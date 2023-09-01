# Full Cycle Docker challeng with NodeJS, Nginx and MySql
## The Challenge
In this challenge you'll put into practice what we've learned about using nginx as a reverse proxy. The main idea is that when a user accesses nginx, they make a call to our node.js application. This application will then add a record to our mysql database, registering a name in the people table.

The return from the node.js application to nginx should be:

<h1>Full Cycle Rocks!</h1>

- List of names registered in the database.

Generate docker-compose in such a way that all we have to do is run: docker-compose up -d and everything should be working and available on port 8080.

Upload everything to a repository and deliver it.

* The programming language for this challenge is Node/JavaScript.

## Instructions:

### Start up containers
```bash
docker-compose up -d
```

### Test results
Just access `http://localhost:8080` and if everthing is okay, you should see "Full Cycle Rocks!" with my name below.
