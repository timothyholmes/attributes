const jwt = require('jsonwebtoken');
const { jwt: { algorithm, public_key } } = require('../../../config');
const { merge } = require('lodash');

module.exports = function generateJWT(toBeSignedPayload, options = {}) {
  const jwtOptions = merge(options, { algorithm });

  return jwt.sign(toBeSignedPayload, public_key, jwtOptions);
};
