
const Joi = require('joi');
const { mongo: { db_name: dbName } } = require('../../config');

module.exports = {
  method: 'PUT',
  path: '/v1/player/{accountId}/',
  config: {
    validate: {
      params: {
        accountId: Joi.string().guid()
      },
      payload: {
        name: Joi.string().required(),
        email: Joi.string().email().required()
      }
    }
  },
  async handler({ server: { methods }, payload }) {
    const mongoInstance = await methods.getDB(dbName);

    try {
      return await methods.editPlayer(payload, { mongo: mongoInstance });
    } catch (err) {
      return err;
    }
  }
};
