var http = require('http');
 
var port = 8089;
 
var s = http.createServer();
s.on('request', function(request, response) {
    response.writeHead(200);
//    console.log(request.method);
 //   console.log(request.headers);
   var vhod = request.url;
   numn = vhod.indexOf('=');
   var vh = vhod.substr(numn + 1); 
   var schislo = vh.split('*');
   var resul = schislo[0] * schislo[1]; 
   console.log(resul);
  //  console.log(schislo);
 
    var data = '';
    request.on('data', function(chunk) {
        data += chunk.toString();
    });
    request.on('end', function() {
      //  console.log(data);
        response.write(resul.toString());
        response.end();
    });
 
});
 
s.listen(port);
console.log('Browse to http://127.0.0.1:' + port);