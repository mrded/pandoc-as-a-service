# Pandoc As A Service
If you need to convert text from one markup format into another, pandoc is your swiss-army knife.

## Overview

Basicaly I wrapped [Pandoc](http://pandoc.org/) in a web service.

## Installation

1. Install [Pandoc](http://pandoc.org/installing.html).
2. Install dependencies: `npm i`
3. Run it: `npm start`

The server will be avaliable on `http://localhost:8080`

## Usage

Sent a text as HTTP POST request to http://localhost:8080/:from/:to

~~~ bash
curl -H "Content-Type: text/plain" -X POST -d "# hello" http://localhost:8080/markdown/html
~~~
