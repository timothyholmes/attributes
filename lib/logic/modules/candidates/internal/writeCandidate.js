
module.exports = function writeCandidate(candidatePayload, guid) {
  this.log(['test', 'debug'], `new candidate created ${guid}`);
  return {
    ...candidatePayload,
    _id: guid
  };
};
