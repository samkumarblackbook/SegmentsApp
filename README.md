# Segments Editor 1.0

# Autobahn Server

Located under /src/service

## How to install

1. Run a postgres server.
2. Create a 'dbConnection.js' file and fill it out. A sample is included as
'dbConnection.js.sample'.
3. `npm install`
4. `gulp`
5. Your server should be running on localhost:3001.

## Running with Docker

1. Download [Docker](https://www.docker.com/products/overview)
2. Ensure Docker is running by opening your Command Prompt/Terminal and typing `docker info`. 
You should see statics about the number of containers and your system.
3. Go to directory `\src\service` and run `gulp runDocker`. 
If this is your first time deploying the containers, then it may take a couple of minutes. 
4. Once this has finished, verify two containers `blackbook_node` and `blackbook_postgres` are running by running `docker ps`.
5. To redeploy after any code changes, simply run `gulp runDocker` again.

- The node webserver will be running at `localhost:3002` with remote debugging supported on port 5858.
- A postgres server will be running at `localhost:5432`. The username and password will be to whatever your `dbConnection.json` file is set to. 
The db created will be named *autobahn*.

## What can it do?

- You can post to `/api/user` to create a user.
- You can get `/api/user` to list all users.
- You can get `/api/user/:id` to show a user.
- You can delete at `/api/user/:id` to delete a user.
- You can login at `/api/login`.
- You can logout at `/api/logout`.

Minimal JSON form for adding a new user:

	{
        "username": "bill@example.com",
        "firstName": "Bill",
        "lastName": "Smith",
        "password": "Password1"
	}

# Autobahn UI
/src/ui directory contains all the files resources required to build and serve the ui 

##First Run Process

###Step 1
run npm install to get the core packages
```sh
npm install
```

If not already installed the following the required npm packages require a global installation
```sh
npm install gulp -g
```

The following global packages are for front-end unit testing
```sh
npm install jasmine-core -g
npm phantomjs-prebuilt -g
npm karma-phantomjs-launcher -g
```


###Step 2

The task runner for this project is gulp, to start the ui run
```sh
gulp
```

This will compile the required code and start a local dev server using browser-sync on http://localhost:3000/ it should auto open this url on youre systems default broswer



##Regular Run Process
To compile the required Sass, Ts and Assets , start a local dev server at watch files run

```sh
gulp
```

This process will also start watchers on the js,assets,scss and views directories. That means if a file is saved it will recompile the revlanet assets and automatically restart of ui dev server

**Note**
> Sometime the watcher will fail to pick up on new files if that is the case restart gulp


##Run Karma Unit Tests
All front-end unit tests are written in karma and must be manulaly added to the
`js/testing/tests.ts`

To start the test runner run
```sh
gulp run-test
```

The test results are output to the console

##Build Resources

| Resource    | Function                                                                        | Link                                                      |
|-------------|---------------------------------------------------------------------------------|-----------------------------------------------------------|
| Gulp        | Node.js based streaming build system                                            | https://github.com/gulpjs/gulp/blob/master/docs/README.md |
| webpack        | Node.js based bundling system striches all app js depenceys into single files                                           | http://webpack.github.io/docs/what-is-webpack.html |
| browsersync | Simple dev server with code based refresh and exteral url for device testing                 | https://browsersync.io/docs                               |
| jasmine | Jasmine is a behavior-driven development framework for testing JavaScript code                 | https://jasmine.github.io/                             |
