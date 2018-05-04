
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
  async handler({ server: { plugins: { logic, mongo } }, payload }) {
    const mongoInstance = await mongo.getDB(dbName);
    const { _id } = await logic.createPlayer(payload, { mongo: mongoInstance });

    return { _id };
  }
};
