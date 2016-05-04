# ES2015 Watch Us Build

*We changed the name of this series to "Watch Us Build," so you may see an occasional reference to its former name ("Soup to Bits") in this repository.*

This repository contains the sample app built in the [Watch Us Build episode](https://www.codeschool.com/screencasts/build-a-forum-web-app-with-es2015) for the [ES2015: The Shape of JavaScript to Come course](https://www.codeschool.com/courses/es2015-the-shape-of-javascript-to-come).

# Installing

1. `npm install` to resolve dependencies
2. `npm install -g json-server` for the API

# Running

First, run the API with either  

`json-server server/db.json `

or

`json-server server/db.with.xss.json`

then open up `index.html`

# Developing

1. `npm install -g gulp`
2. `gulp` should transpile and trigger the watch

