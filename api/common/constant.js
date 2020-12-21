const successMessage = { message: 'Succesfully stored to database.', status: 200 };
const errorMessage = { message: 'Error in storing to database', status: 500 };
const unauthorisedMessage = { message: 'You are unauthorised to access resources or token is invalid.', status: 401 };

const errorStatusCode = 500;
const unauthorisedStatusCode = 401;

const secretKey = 'secretKey';

const maxPageSize = 10;
const reviewsSize = 2;
const saltRounds = 10;

module.exports = {
  successMessage,
  errorMessage,
  errorStatusCode,
  unauthorisedStatusCode,
  secretKey,
  unauthorisedMessage,
  maxPageSize,
  reviewsSize,
  saltRounds,
};
