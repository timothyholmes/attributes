
module.exports = function findPlayer(query) {
  return [
    query,
    {
      _id: 1,
      email: 1,
      name: 1
    }
  ];
};
