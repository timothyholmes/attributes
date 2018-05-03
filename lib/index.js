const Glue = require('glue');

const { API_PORT: PORT = 3000 } = process.env;

const manifest = {
  server: {
    port: PORT
  },
  register: {
    plugins: []
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

    // @TODO Get the server.log method printing to console, move this console out
    // eslint-disable-next-line
    console.log(`Server Running - Port ${server.info.port}`);
  } catch (err) {
    console.log(`Error Starting Server ${err}`); // eslint-disable-line

    process.exit(1);
  }
}

module.exports = startServer(manifest, options);
