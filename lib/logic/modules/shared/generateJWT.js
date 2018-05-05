const jwt = require('jsonwebtoken');
const { jwt: { algorithm, public_key } } = require('../../../config');

module.exports = function generateJWT([toBeSignedPayload, cResponseCallback]) {
  return [toBeSignedPayload, cResponseCallback(
    jwt.sign(toBeSignedPayload, public_key, { algorithm }))];
};
