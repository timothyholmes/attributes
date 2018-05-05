
const Joi = require('joi');
const { mongo: { db_name: dbName } } = require('../../config');

module.exports = {
  method: 'DELETE',
  path: '/v1/player/{accountId}/',
  config: {
    description: 'Deletes player document',
    validate: {
      params: {
        accountId: Joi.string().guid()
      }
    }
  },
  async handler({ server: { methods }, params }) {
    const mongoInstance = await methods.getDB(dbName);

    try {
      return await methods.editPlayer({ ...params, remove: true }, { mongo: mongoInstance });
    } catch (err) {
      return err;
    }
  }
};
