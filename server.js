var http = require("http");
var url = require("url");
var fs = require("fs");

var express = require('express');
// создаём Express-приложение
var app = express();
 app.use('/img', express.static(__dirname + '/public'));
//app.use('/img',express.static(__dirname, 'public/images'));
app.listen(8880);

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    request.setEncoding("utf8");

    request.addListener("data", function(postDataChunk) {
      postData += postDataChunk;
      console.log("Received POST data chunk '"+
      postDataChunk + "'.");
    });

    request.addListener("end", function() {
      route(handle, pathname, response, postData);
    });

  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
  }

  function start2() {
    function onRequest2(request, response) {
  var page;
     params = url.parse(request.url).search;
    var str=params;
      if (str == "?text=bober")
    {
      //var x = random(9)+'.html';
     var x = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
      page = fs.readFileSync('1'+x+'.html');
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(page);
    }
  
    else
    {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(str);
        
    }
   response.end();
  
  
    }
  
    http.createServer(onRequest2).listen(8889);
    console.log("Server2 has started.");
    }
    function start3() {
    function onRequest3(request, response) {
  var page;
     params = url.parse(request.url).search;
    var str=params;
      if (str == "?text=bober")
    {
      //var x = random(9)+'.html';
     var x = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
      page = fs.readFileSync('1'+x+'.html');
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(page);
    }
  
    else
    {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(str);
        
    }
   response.end();
  
  
    }
  
    http.createServer(onRequest3).listen(8890);
    console.log("Server3 has started.");
    }
    
    function start4() {
    function onRequest4(request, response) {
  var page;
     params = url.parse(request.url).search;
    var str=params;
      if (str == "?text=bober")
    {
      //var x = random(9)+'.html';
     var x = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
      page = fs.readFileSync('1'+x+'.html');
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(page);
    }
  
    else
    {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(str);
        
    }
   response.end();

    }
  
    http.createServer(onRequest4).listen(8891);
    console.log("Server4 has started.");
    console.log("Server5 has started.");
    }
    
    function start5() {
    function onRequest5(request, response) {
  var page;
     params = url.parse(request.url).search;
    var str=params;
      if (str == "?text=bober")
    {
      //var x = random(9)+'.html';
     var x = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
      page = fs.readFileSync('1'+x+'.html');
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(page);
    }
  
    else
    {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write(str);
        
    }
   response.end();
 
    }
  
    http.createServer(onRequest5).listen(8892);
    console.log("Server5 has started.");
    }

exports.start = start;
exports.start2 = start2;
exports.start3 = start3;
exports.start4 = start4;
exports.start5 = start5;