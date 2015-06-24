# Pandoc As A Service
If you need to convert text from one markup format into another, pandoc is your swiss-army knife.

## Overview

Basicaly I wrapped [Pandoc](http://pandoc.org/) in a web service.

## Installation

1. Install [Pandoc](http://pandoc.org/installing.html).
2. Install dependencies: `npm i`
3. Run it: `npm start`

The server will be avaliable on `http://localhost:8080/convert`

## Usage

Sent a post request to http://localhost:8080

~~~ bash
curl -H "Content-Type: application/json" -X POST -d '{"from": "markdown", "to": "html", "text": "# hello"}' http://localhost:8080
~~~
