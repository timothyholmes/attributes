
module.exports = function updatePlayer(updateDetails, accountId) {
  return {
    _id: accountId,
    $set: { updateDetails }
  };
};
