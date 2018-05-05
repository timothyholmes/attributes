
const uuid = require('uuid/v4');

module.exports = function generateGuid([, cResponseCallback]) {
  return cResponseCallback(uuid());
};
