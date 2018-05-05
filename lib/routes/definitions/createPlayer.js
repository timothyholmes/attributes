
const Joi = require('joi');
const { mongo: { db_name: dbName } } = require('../../config');

module.exports = {
  method: 'PUT',
  path: '/v1/player/',
  config: {
    description: 'Initializes player document',
    validate: {
      payload: {
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
      }
    }
  },
  async handler({ server: { methods }, payload }) {
    const mongoInstance = await methods.getDB(dbName);

    try {
      return await methods.createPlayer(payload, { mongo: mongoInstance });
    } catch (err) {
      return err;
    }
  }
};
