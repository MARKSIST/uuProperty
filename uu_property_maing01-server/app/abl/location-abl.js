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
  getUnsupportedKeys: {
    code: `${Errors.Get.UC_CODE}unsupportedKeys`,
  },
  deleteUnsupportedKeys: {
    code: `${Errors.Delete.UC_CODE}unsupportedKeys`,
  },
};

class LocationAbl {
  constructor() {
    this.validator = Validator.load();
    this.dao = DaoFactory.getDao("location");
  }

  async get(awid, dtoIn) {
    let validationResult = this.validator.validate("locationGetDtoInType", dtoIn);

    // HDS 1.2, 1.3 // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.getUnsupportedKeys.code,
      Errors.Get.InvalidDtoIn
    );

    let dtoOut = await this.dao.get({ awid, id: dtoIn.locationId });

    return { dtoOut, uuAppErrorMap };
  }

  async update(awid, dtoIn) {}

  async list(awid) {
    let dtoOut = this.dao.list({ awid });
    return dtoOut;
  }

  async delete(awid, dtoIn) {
    let validationResult = this.validator.validate("locationDeleteDtoInType", dtoIn);

    // HDS 1.2, 1.3 // A1, A2
    let uuAppErrorMap = ValidationHelper.processValidationResult(
      dtoIn,
      validationResult,
      WARNINGS.deleteUnsupportedKeys.code,
      Errors.Delete.InvalidDtoIn
    );

    this.dao.delete({ awid, id: dtoIn.locationId });

    let dtoOut = {
      text: `Location id - ${dtoIn.locationId} deleted`,
    };

    return { dtoOut, uuAppErrorMap };
  }

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
