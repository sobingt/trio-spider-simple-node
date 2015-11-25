var express = require('express');
var app = express();

//Routes
app.get('/',function(req, res){
  res.json({
    name: "Surya"
  });
});
app.post('/',function(req, res){
  res.send("POST Method: Hello World");
});
app.put('/',function(req, res){
  res.send("PUT Method: Hello World");
});
app.del('/',function(req, res){
  res.send("DELETE Method: Hello World");
});

app.get('/hello',function(req, res){
  res.send("Hello");
});
app.get('/world',function(req, res){
  res.send("World");
});

app.listen('3000', function(){
  console.log("Server at port 3000");
});