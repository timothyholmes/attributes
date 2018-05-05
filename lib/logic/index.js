
const fs = require('fs');
const path = require('path');

const logicPlugin = {
  name: 'logic',
  version: '1.0.0',
  description: 'Houses all business logic modules',
  async register(server) {
    const absolutePath = path.resolve('lib/logic/modules/');
    const modules = fs.readdirSync(absolutePath);

    const composedObject = modules.filter(e => e !== 'shared')
      .reduce((acc, filename) => ({ ...require(path.join(absolutePath, filename)), ...acc }), {}); // eslint-disable-line

    Object.entries(composedObject).forEach(([key, value]) => server.method(key, value));
  }
};

module.exports = logicPlugin;
