const express = require('express');
const path = require('path');
const app = express();

let secret = process.env.SECRET

let passMap = process.env


app.post('/', express.json(), function(req, res) {

  let keys = Object.keys(req.body);

  if(passMap[keys[0]] === req.body[keys[0]]){
    return res.json(true)
  }else{
    return res.json(false)
  }
});

app.listen(9000);