
const Joi = require('joi');
const { bind: setThis } = require('lodash');
const { mongo: { db_name: dbName } } = require('../../config');

module.exports = {
  method: 'PUT',
  path: '/v1/campaign/{campaignGuid}/candidate/',
  config: {
    description: 'Adds a candidate stat change document',
    validate: {
      params: {
        campaignGuid: Joi.string().guid()
      },
      payload: {
        value: Joi.array().items(Joi.object()),
        reason: Joi.string()
      }
    }
  },
  async handler({ server, payload, params }) {
    const { methods, log } = server;

    const mongoInstance = await methods.getDB(dbName);

    try {
      return await methods.createCandidate(
        { ...payload, ...params }, { mongo: mongoInstance, log: setThis(log, server) });
    } catch (err) {
      return err;
    }
  }
};
