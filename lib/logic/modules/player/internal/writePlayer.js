
module.exports = function writePlayer(player, jwt, guid) {
  return {
    _id: guid,
    password: jwt,
    ...player
  };
};
