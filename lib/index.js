const Glue = require('glue');
const mongo = require('./mongo');
const routes = require('./routes');
const logic = require('./logic');
const config = require('./config');

const manifest = {
  server: {
    port: config.server.port
  },
  register: {
    plugins: [
      {
        plugin: 'good',
        options: {
          reporters: {
            console: [
              {
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [
                  {
                    log: '*',
                    response: '*'
                  }
                ]
              },
              {
                module: 'good-console'
              },
              'stdout'
            ]
          }
        }
      },
      {
        plugin: mongo,
        options: config.mongo
      },
      {
        plugin: logic,
        options: {}
      },
      {
        plugin: routes,
        options: {}
      }
    ]
  }
};

const options = {
  relativeTo: __dirname
};

async function startServer(registrations, serverOptions) {
  try {
    const server = await Glue.compose(registrations, serverOptions);
    await server.start();

    server.log(['startup', 'server'], `Server Running - Port ${server.info.port}`);
  } catch (err) {
    console.log(`Error Starting Server ${err}`); // eslint-disable-line

    process.exit(1);
  }
}

module.exports = startServer(manifest, options);
