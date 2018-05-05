
const { bind: setThis, flow: compose, curry } = require('lodash');
const { generateGuid } = require('../shared');
const { writeCandidate } = require('./internal');

const composition = compose([
  generateGuid
]);

module.exports = function createCandidate(data, env) {
  return composition([data, curry(setThis(writeCandidate, env))(data)]);
};
