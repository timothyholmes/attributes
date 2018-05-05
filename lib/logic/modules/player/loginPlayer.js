
const { bind: setThis, flow: compose, curry, tail } = require('lodash');
const { generateJWT } = require('../shared');
const { findPlayerByCredentials } = require('./internal');

const composition = compose([
  generateJWT,
  tail,
  e => e[0]
]);

module.exports = function loginPlayer(data, env) {
  return composition([data, curry(setThis(findPlayerByCredentials, env))]);
};
