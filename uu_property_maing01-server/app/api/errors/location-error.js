"use strict";

const PropertyMainUseCaseError = require("./property-main-use-case-error.js");
const LOCATION_ERROR_PREFIX = `${PropertyMainUseCaseError.ERROR_PREFIX}location/`;

const Create = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends PropertyMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  LocationDaoCreateFailed: class extends PropertyMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}locationDaoCreateFailed`;
      this.message = "Create location by Dao create failed.";
    }
  },
};

const Delete = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}delete/`,
  InvalidDtoIn: class extends PropertyMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  LocationDaoDeleteFailed: class extends PropertyMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Delete.UC_CODE}locationDaoDeleteFailed`;
      this.message = "Delete location by Dao delete failed.";
    }
  },
};

const List = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}list/`,
};

const Update = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}update/`,
};

const Get = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}get/`,

  InvalidDtoIn: class extends PropertyMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  },

  LocationDaoGetFailed: class extends PropertyMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Get.UC_CODE}locationDaoGetFailed`;
      this.message = "Get location by Dao get failed.";
    }
  },
};

module.exports = {
  Get,
  Update,
  List,
  Delete,
  Create,
};