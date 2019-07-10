var bodyParser = require('body-parser')
var express = require('express')
var app = express()
const PORT = 1995
var request = require('request')
var mongoose = require('mongoose')

app.listen(PORT,
     () => console.log(`Server is listening on port ${PORT}`))