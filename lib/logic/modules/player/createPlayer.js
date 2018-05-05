
const { bind: setThis, flow: compose, curry, pick } = require('lodash');
const { generateJWT, generateGuid } = require('../shared');
const { writePlayer } = require('./internal');

const composition = compose([
  generateJWT,
  generateGuid,
  resp => pick(resp, '_id')
]);

module.exports = function createPlayer(data, env) {
  return composition([data, curry(setThis(writePlayer, env))(data)]);
};
