# Skeleton project for Swagger
# README of SWAN Microservices #

This is Repo of swan microservices

## Software's used
    •  NodeJs
	•  ExpressJs
	•  Mongodb

### Mongo setup
mongo setup can be found at file mongo.txt

### How do I get set up code? ###

```
npm install
```
### Start the service
```
npm start
```

It is used to create an user in the users db with client access. It has 1 API.

API: http://localhost:3000/users/register
Method: POST
Payload: {
	"name": "ssd",
	"email":"scs@abc.com",
	"password": "dfdf",
	"gender": "M",
	"phonenumber": 1345,
	"role": "client" 
}
Headers: Authorization, Accept & Content-Type

Response: 
Success creation - {
    "message": "Succesfully stored to database."
	"status": 200
}
Error Creation - {
    "message": "Error in storing to database",
	"status": 500
}