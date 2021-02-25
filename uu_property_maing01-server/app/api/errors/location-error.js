"use strict";

const PropertyMainUseCaseError = require("./property-main-use-case-error.js");
const LOCATION_ERROR_PREFIX = `${PropertyMainUseCaseError.ERROR_PREFIX}location/`;

const Create = {
  UC_CODE: `${LOCATION_ERROR_PREFIX}create/`,
  
};

module.exports = {
  Create
};
