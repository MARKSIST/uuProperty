"use strict";
const { UuObjectDao } = require("uu_appg01_server").ObjectStore;

class LocationMongo extends UuObjectDao {
  async createSchema() {
    await super.createIndex({ awid: 1, _id: 1 }, { unique: true });
  }

  async create({ awid, dtoIn }) {
    return await super.insertOne({ awid, dtoIn });
  }

  async list({ awid }) {
    return await super.find({ awid });
  }

  async get({ awid, id }) {
    return await super.find({ awid, id });
  }

  async delete({ awid, id }) {
    return await super.deleteOne({ awid, id });
  }
}

module.exports = LocationMongo;
