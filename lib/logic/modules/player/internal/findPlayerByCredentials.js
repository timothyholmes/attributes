
module.exports = function findPlayerByPassword(jwt) {
  return [
    {
      password: jwt
    },
    {
      _id: 1,
      email: 1,
      name: 1
    }
  ];
};
