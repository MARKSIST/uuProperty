"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class LocationMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
  }

  async create({ awid, dtoIn }) {
    return await super.insertOne({ awid, dtoIn });
  }
}

module.exports = LocationMongo;
