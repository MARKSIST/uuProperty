"use strict";
const Path = require("path");
const { Validator } = require("uu_appg01_server").Validation;
const { DaoFactory } = require("uu_appg01_server").ObjectStore;
const { ValidationHelper } = require("uu_appg01_server").AppServer;
const Errors = require("../api/errors/location-error.js");

const WARNINGS = {
  createUnsupportedKeys: {
    code: `${Errors.Create.UC_CODE}unsupportedKeys`,
  },
};

class LocationAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("location");
  }

  async get(awid, dtoIn) {
    
  }

  async update(awid, dtoIn) {}

  async list(awid) {
    let dtoOut = this.dao.list({ awid });
    return dtoOut;
  }

  async delete(awid, dtoIn) {}

  async create(awid, dtoIn) {
    let validationResult = this.validator.validate("locationCreateDtoInType", dtoIn);

    // HDS 1.2, 1.3 // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.createUnsupportedKeys.code,
      Errors.Create.InvalidDtoIn
    );

    this.dao.create({ awid, dtoIn });
    let dtoOut = {
      text: `Location ${dtoIn.name} created`,
    };

    return { dtoOut, uuAppErrorMap };
  }
}

module.exports = new LocationAbl();
