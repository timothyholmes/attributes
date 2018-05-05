
const { bind: setThis } = require('lodash');
const { findPlayer } = require('./internal');

module.exports = function getPlayer(data, env) {
  return setThis(findPlayer, env)(data);
};
