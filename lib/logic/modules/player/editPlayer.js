
const { bind: setThis, flow: compose, curry, pick } = require('lodash');
const { updatePlayer } = require('./internal');

const composition = compose([
  ([data, cResponseCallback]) => cResponseCallback(pick(data, 'accountId'))
]);

module.exports = function editPlayer(data, env) {
  return composition([data, curry(setThis(updatePlayer, env))(data)]);
};
