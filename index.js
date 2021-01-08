
var express = require("express");
var app= express();
var bodyParser= require("body-parser");
const axios = require('axios');

var urlencodedParser = bodyParser.urlencoded({extended:false})
app.use(express.static("public"));

app.get('/',function(req,res){

    res.sendFile(__dirname+"/index.html");
});

app.post('/give',urlencodedParser,function(req,res){
 //  app.request('https://api.github.com/orgs/'+req.body.fname+'/repos', function(error,response,body){

   // console.log(response.data);
  //  })
  axios.get('https://api.github.com/orgs/'+req.body.fname+'/repos')
  .then(response => {
    console.log(response.data);
    
  })
  .catch(error => {
    console.log(error);
  });
    res.send("CHECK TERMINAL FOR REPO NAMES");
    //console.log(req.body.fname);
    
});


app.listen(3000);
