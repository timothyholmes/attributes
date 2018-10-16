// const MongoClient = require('mongodb').MongoClient;

module.exports.plugin = {
  name: 'mongo',
  version: '1.0.0',
  description: 'Creates and attaches to the server object the mongo client instance',
  async register() {
    // const client = await MongoClient.connect(options.connectionString);

    // server.method('getDB', async databaseName => client.db(databaseName));
    // console.log('options', options);
  }
};

module.exports.options = {
  connectionString: 'mongodb://localhost:27017'
};
