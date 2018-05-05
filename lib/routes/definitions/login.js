
const Joi = require('joi');
const { mongo: { db_name: dbName } } = require('../../config');

module.exports = {
  method: 'POST',
  path: '/v1/player/login/',
  config: {
    description: 'Logs player in, returns access key',
    validate: {
      payload: {
        email: Joi.string().email().required(),
        password: Joi.string().required()
      }
    }
  },
  async handler({ server: { methods }, payload }) {
    const mongoInstance = await methods.getDB(dbName);

    try {
      return await methods.loginPlayer(payload, { mongo: mongoInstance });
    } catch (err) {
      return err;
    }
  }
};
