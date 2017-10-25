# Pandoc As A Service
If you need to convert text from one markup format into another, pandoc is your swiss-army knife.

## Overview

Basically I wrapped [Pandoc](http://pandoc.org/) in a web service.

## Installation

`docker run -p 8080:8080 mrded/pandoc-as-a-service`

The server will be available on `http://localhost:8080`

## Conversion API

**Pandoc As A Service** has a simple to use HTTP API:

POST a text to http://localhost/:format

~~~ bash
curl -H "Content-Type: text/markdown" -X POST -d "# hello" http://localhost/html
~~~
