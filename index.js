const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
app.use(cors())

let passMap = process.env
let valueMap = {}
let keys = Object.keys(passMap)

for(let keyIndex in keys){
  let key = keys[keyIndex]
  if(keys.indexOf(`return_${key}`) > -1){
    valueMap[key] = passMap[`return_${key}`]
  }
}

app.post('/', express.json(), function(req, res) {
  let keys = Object.keys(req.body);
  if(passMap[keys[0]] === req.body[keys[0]]){
    if(valueMap[keys[0]]){
       return res.json(valueMap[keys[0]])
    }
    return res.json(true)
  }else{
    return res.json(false)
  }
});

app.listen(9000);
