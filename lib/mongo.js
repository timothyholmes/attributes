const MongoClient = require('mongodb').MongoClient;

const mongoPlugin = {
  name: 'mongo',
  version: '1.0.0',
  description: 'Creates and attaches to the server object the mongo client instance',
  async register(server, options) {
    const client = await MongoClient.connect(options.connectionString);

    server.method('getDB', async databaseName => client.db(databaseName));
  }
};

module.exports = mongoPlugin;
