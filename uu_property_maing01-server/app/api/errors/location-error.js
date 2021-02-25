"use strict";

const PropertyMainUseCaseError = require("./property-main-use-case-error.js");
const LOCATION_ERROR_PREFIX = `${PropertyMainUseCaseError.ERROR_PREFIX}location/`;

const Create = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}create/`,
  
};

const Delete = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}delete/`,
  
};

const List = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}list/`,
  
};

const Update = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}update/`,
  
};

module.exports = {
  Update,
  List,
  Delete,
  Create
};
