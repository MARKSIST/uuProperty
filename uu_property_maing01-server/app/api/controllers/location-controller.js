"use strict";
const LocationAbl = require("../../abl/location-abl.js");

class LocationController {

  create(ucEnv) {
    return LocationAbl.create(ucEnv.getUri().getAwid(), ucEnv.getDtoIn());
  }

}

module.exports = new LocationController();
