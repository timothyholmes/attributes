
const convict = require('convict');
const Path = require('path');

const config = convict(Path.join(__dirname, 'config.json'));

module.exports = config.getProperties();
