const fs = require('fs');
const path = require('path');

module.exports = (function playerExposer() {
  const absolutePath = path.resolve('lib/logic/modules/player');
  return fs.readdirSync(absolutePath)
    .filter(e => !['internal', 'index.js'].includes(e))
    .reduce((acc, filename) =>
      ({ [path.parse(filename).name]: require(path.join(absolutePath, filename)), ...acc }), // eslint-disable-line
      {});
}());
