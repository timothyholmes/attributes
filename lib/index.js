
const Hapi = require('hapi');
const Specs = require('./specs');
const Mongo = require('./mongo');

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

const init = async () => {
  await server.register([
    Specs,
    Mongo
  ]);

  await server.start();
  console.log(`Server running at: ${server.info.uri}`); // eslint-disable-line
};

process.on('unhandledRejection', (err) => {
  console.log(err); // eslint-disable-line
  process.exit(1);
});

init();
