
const { flow: compose } = require('lodash');
const { generateJWT, generateGuid } = require('../shared');
const { writePlayer } = require('./internal');

const composition = compose([
  // Generate web token based on hashed password
  generateJWT,
  // Generate guid for player
  generateGuid,
  // Ensure email is not already in use (do in query)
  // Write player, return guid
  writePlayer
]);

module.exports = function createPlayer(data, env) {
  return composition.call(env, data);
};
