
module.exports = function writePlayer(...args) {
  console.log('args in writePlayer', args);

  console.log('mongo instance', this.mongo);
};
