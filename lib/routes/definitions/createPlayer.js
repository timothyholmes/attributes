
const Joi = require('joi');
const { mongo: { db_name: dbName } } = require('../../config');

module.exports = {
  method: 'PUT',
  path: '/v1/player/',
  config: {
    validate: {
      payload: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
      }
    }
  },
  async handler({ server: { methods } }, payload) {
    const mongoInstance = await methods.getDB(dbName);

    const { _id } = await methods.createPlayer(payload, { mongo: mongoInstance });

    return { _id };
  }
};
