
const fs = require('fs');
const path = require('path');

const routesPlugin = {
  name: 'routes',
  version: '1.0.0',
  description: 'Sets up the API routes',
  async register(server) {
    const absolutePath = path.resolve('lib/routes/definitions/');
    const modules = fs.readdirSync(absolutePath);

    // eslint-disable-next-line
    modules.forEach(filename => server.route(require(path.join(absolutePath, filename))));
  }
};

module.exports = routesPlugin;
