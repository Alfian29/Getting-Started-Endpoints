const express = require('express');
const app = express();

app.get('/', function(request, respone){
    respone.send("Hello World! Muhammad Alfian!")
})

app.listen("1010");