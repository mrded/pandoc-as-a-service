# Pandoc As A Service
If you need to convert text from one markup format into another, pandoc is your swiss-army knife.

## Overview

Basicaly I wrapped [Pandoc](http://pandoc.org/) in a web service.

## Installation

`docker run mrded/pandoc-as-a-service -p 8080:8080`

The server will be avaliable on `http://localhost:8080`

## Conversion API

**Pandoc As A Service** has a simple to use HTTP API:

POST a text to http://localhost/:format

~~~ bash
curl -H "Content-Type: text/markdown" -X POST -d "# hello" http://localhost/html
~~~
