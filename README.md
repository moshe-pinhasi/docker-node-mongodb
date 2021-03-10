# Overview
Example Todo project that running nodejs and mongodb into docker.

##### No UI display here. you can check it using postman

## Using docker
<!--running mongodb:
mongod-->
NOTE: make sure you have docker running on your machine

##### Images:

Create an image

```
docker build -t moshe/node-todo .
```

List all images

```
docker images
docker images ls
```

##### Docker services:

Run all containers:

```
docker-compose up
```

Shut down all containers:

```
docker-compose down
```

Run the containers in background:

```
docker-compose up -d
```

List containers:

```
docker ps -a
```

To see the logs:

```
docker-compose logs
```

more command:
``
docker-compose ps
``

[more command you can find here] (https://medium.com/the-code-review/top-10-docker-commands-you-cant-live-without-54fb6377f481)



## Using migrations

##### To create a new migration, for example "add-todos":

```
NAME=add-todos npm run create-migrate
```

##### To run a specific migration, for example "add-todos":

```
NAME=20190420140009-add-todos npm run migrate
```

##### To run a all migrations:

```
npm run migrate-all
```

## Read More
[docker-compose with nodejs and mongodb]
(https://medium.com/@kahana.hagai/docker-compose-with-node-js-and-mongodb-dbdadab5ce0a)

[using docker-compose for nodejs development]
(https://blog.codeship.com/using-docker-compose-for-nodejs-development/)



Need to add this lib for testing
mongodb-memory-server
