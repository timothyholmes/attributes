
const Joi = require('joi');
const { bind: setThis } = require('lodash');
const { mongo: { db_name: dbName } } = require('../../config');

module.exports = {
  method: 'GET',
  path: '/v1/campaign/{campaignGuid}/candidates/',
  config: {
    description: 'Gets candidates for a particular campaign',
    validate: {
      params: {
        campaignGuid: Joi.string().guid()
      }
    }
  },
  async handler({ server, params }) {
    const { methods, log } = server;

    const mongoInstance = await methods.getDB(dbName);

    try {
      return await methods.getCandidatesByCampaign(
        params, { mongo: mongoInstance, log: setThis(log, server) });
    } catch (err) {
      return err;
    }
  }
};
