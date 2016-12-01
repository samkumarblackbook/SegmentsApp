# Blackbook Autobahn UI
Directory contains all the files resources required to build and serve the ui for the

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
npm install karma -g
npm phantomjs-prebuilt -g
npm karma-phantomjs-launcher -g
```


###Step 2

The task runner for this project is gulp, to start the ui run
```sh
gulp
```

This will compile the required code and start a local dev server using browser-sync on http://localhost:3000/ it should auto open this url on you're systems default browser



##Regular Run Process
To compile the required Sass, Ts and Assets , start a local dev server at watch files run

```sh
gulp
```

This process will also start watchers on the js,assets,scss and views directories. That means if a file is saved it will recompile the revlanet assets and automatically restart of ui dev server

**Note**
> Sometime the watcher will fail to pick up on new files if that is the case restart gulp


##Run Karma Unit Tests
All front-end unit tests are written in karma and must be manually added to the
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
| webpack        | Node.js based bundling system stitches all app js dependencies into single files                                           | http://webpack.github.io/docs/what-is-webpack.html |
| browsersync | Simple dev server with code based refresh and external url for device testing                 | https://browsersync.io/docs                               |
| jasmine | Jasmine is a behavior-driven development framework for testing JavaScript code                 | https://jasmine.github.io/                             |
