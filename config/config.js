const appName = 'swan-user-service';
const port = 3002;

const mongo = {
    "baseURL": "mongodb://localhost:27017/",
    "dbName": "swan-service",
    "debug": "true",
    "username": "swanUsername",
    "password": "Test@123",
    "poolSize": 10,
    "authSource": "swan-service"
};

module.exports =
{ appName, port, mongo };
