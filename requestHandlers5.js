﻿var http = require('http');
 
var port = 8092;
 
var s3 = http.createServer();
s3.on('request', function(request, response) {
    response.writeHead(200);
//    console.log(request.method);
 //   console.log(request.headers);
   var vhod = request.url;
   numn = vhod.indexOf('=');
   var vh = vhod.substr(numn + 1); 
   var schislo = vh.split('-');
   schislo[0] = schislo[0] * 1;
   schislo[1] = schislo[1] * 1;
   var resul = schislo[0] - schislo[1]; 
   console.log("=================="+resul);
  console.log("=================="+schislo);
 
    var data = '';
    request.on('data', function(chunk) {
        data += chunk.toString();
    });
    request.on('end', function() {
        //console.log("=================="+resul);
        response.write(resul.toString());
        response.end();
    });
 
});
 
s3.listen(port);
console.log('Browse to http://localhost:' + port);