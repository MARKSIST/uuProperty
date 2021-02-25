"use strict";
const LocationAbl = require("../../abl/location-abl.js");

class LocationController {

  delete(ucEnv) {
    return LocationAbl.delete(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

  create(ucEnv) {
    return LocationAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new LocationController();
