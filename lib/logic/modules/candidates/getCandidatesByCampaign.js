
const { bind: setThis, flow: compose, curry, pick } = require('lodash');
const { getCandidates } = require('./internal');

const composition = compose([
  ([data, cb]) => cb(pick(data, 'campaignGuid'))
]);

module.exports = function getCanditatesByCampaign(data, env) {
  try {
    return composition([data, curry(setThis(getCandidates, env))]);
  } catch (error) {
    env.log(['error', 'getCanditatesByCampaign'], error);
    throw error;
  }
};
