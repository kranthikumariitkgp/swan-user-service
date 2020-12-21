
const { storeUsers } = require('../helpers/mongo');
const { successMessage, errorMessage } = require('../common/constant');

const createUser = async (req, res) => {
  try{
    const reqBody = req.body;
    await storeUsers(reqBody);
    res.send(successMessage);
  } catch(e) {
    res.send(errorMessage);
  }
};

module.exports = {
  createUser,
};
