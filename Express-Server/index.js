// import express from "express"
const express = require('express')
// import * as bodyParser from "bodyParser"
const bodyParser = require('body-parser')
// import { ShoppingList, ShoppingItem } from "./ShoppingList";
const ShoppingList = require('./ShoppingList');
const ShoppingItem = require('./ShoppingList');
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: false
}))

//parse application/json
app.use(bodyParser.json())

const myShoppingList = ShoppingList()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello to Nodejs Express!')
})

app.post('/', function (req, res) {
  // console.log('This is trail post via Express and Postman!');
  // console.log("Body", req.body);
  const item = new ShoppingItem(req.body.name, req.body.amount, req.body.price);
  myShoppingList.addItem(item);
  console.log("This is my shopping list:", myShoppingList.listOfItem);
  
  res.send(myShoppingList.listOfItem);

})

app.get('/test', function (req, res) {
  console.log(req.query.name);
  //you put on the prowser: http://localhost:3000/test?name=Mohamed it will return Mohamed on the terminal
  console.log(req.query);
  // if I put only query it will retrun the whole query as an object
  res.send('hello to TEST page!')
})

app.listen(8000, function () {
  console.log('Example app listening on port 3000!')
})
