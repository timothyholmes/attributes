
const Joi = require('joi');
const { mongo: { db_name: dbName } } = require('../../config');

module.exports = {
  method: 'GET',
  path: '/v1/player/{accountId}/',
  config: {
    description: 'Gets player document',
    validate: {
      params: {
        accountId: Joi.string().guid()
      }
    }
  },
  async handler({ server: { methods }, params }) {
    const mongoInstance = await methods.getDB(dbName);

    try {
      return await methods.getPlayer({ ...params, remove: false }, { mongo: mongoInstance });
    } catch (err) {
      return err;
    }
  }
};
