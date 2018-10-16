
const Path = require('path');
const OpenApi = require('hapi-openapi');
const OpenApiParser = require('swagger-parser');
const { get } = require('lodash');

module.exports.plugin = {
  name: 'openApi-wire-up',
  async register(server, options) {
    const parser = new OpenApiParser();
    const parsedDoc = await parser.dereference(options.api);

    parsedDoc.info.version = get(server, 'app.pkg.version', '1.0.0');
    parsedDoc.info.title = get(server, 'app.pkg.name', 'Attributes Game');
    parsedDoc.info.description = get(server, 'app.pkg.description', 'Attributes Game API');

    return OpenApi.plugin.register(server, {
      api: parsedDoc,
      handlers: options.handlers,
      docs: {
        path: options.path
      }
    });
  }
};

module.exports.options = {
  api: Path.join(__dirname, './routes.yaml'),
  handlers: Path.join(__dirname, '../handlers'),
  path: '/_specs'
};
