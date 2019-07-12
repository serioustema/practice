//6laba
var fs = require("fs");
var p;
var test1;
var test2;
var umstr1;
var i = 0;
const http = require('http');  
//var express = require('express');
//var app = express();
//app.use(express.static(__dirname + '/public'));

//app.use("/img",express.static(__dirname, "public/images"));

function start(response, postData) {
  console.log("Request handler 'start' was called.");

var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+
    'charset=UTF-8" />'+
    '</head>'+
    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+
    '<input type="submit" value="Жми!" />'+
      '</form>'+
    '</body>'+
    '</html>';
   
 response.writeHead(200, {"Content-Type": "text/html"});
response.write(body);
response.end();

}



function upload(response, postData) {
  console.log("Request handler 'upload' was called.");
  var page;
  var str1;
  var str=postData;
//    if (str == "text=*")
str = str.replace('%2B', '+');
            str = str.replace('%2F', '/');
  if(str.indexOf('*') + 1)
  {
    //var x = random(9)+'.html';
//   var x = Math.floor(Math.random() * (9 - 1 + 1)) + 1;
//   let url = 'http://localhost:8889/?text=bober';
    global.content = '';
    var someData; 
    str = str.slice(5);
    var n = str.indexOf('*');
    var n1 = str.indexOf('-');
    var n2 = str.indexOf('+');
    var n3 = str.indexOf('/');
 //----------УМНОЖЕНИЕ--------------------------------------      	
    var mmin = Math.min.apply(null, [n,n1,n2,n3]);
    if (n==mmin) {
    var l = Math.min.apply(null, [n1,n2,n3]);	
    var umstr = str.substr(0, l);	
   console.log("umn="+umstr);
    }
    
    var mmax = Math.max.apply(null, [n,n1,n2,n3]);
    if (n==mmax) {
    var l = Math.max.apply(null, [n1,n2,n3]);	
    if (l == n1) {
    var umstr = str.substr(l+1);	
    }
   else var umstr = str.substr(l+1);
       	console.log("umn="+umstr);
       }	
 //-----------------------------------------------------------  
   if ((mmin == n1) && ((mmax == n2) || (mmax == n3))) {
   	if (mmax == n2) {
   			var l = Math.min.apply(null, [n,n3]);
   			  if (l==n) var umstr = str.substring(n1+1,n3);
   			var l = Math.max.apply(null, [n,n3]);  
   			  if (l==n)  {
   			var umstr = str.substring(n3+1,n2);	
   			  }
   				console.log("umn="+umstr);
   			}
   		if (mmax == n3) {
   			
   			var l = Math.min.apply(null, [n,n2]);
   			  if (l==n) var umstr = str.substring(n1+1,n2);
   		//	var l = Math.min.apply(null, [n,n2]);  
   		  if (l==n2)  {
   	//		console.log("Ok1");  	
  		var umstr = str.substring(n2+1,n3);	
  		  }
   				console.log("umn="+umstr);
   			}	
   			
   		  }
 //-------------------------------------------------------------  		  
   	if ((mmin == n2) && ((mmax == n1) || (mmax == n3))) {
   	if (mmax == n1) {
   			var l = Math.min.apply(null, [n,n3]);
   			  if (l==n) var umstr = str.substring(n2+1,n3);
   			var l = Math.max.apply(null, [n,n3]);  
   			  if (l==n)  {
   			var umstr = str.substring(n3+1,n1);	
   			  }
   				console.log("umn="+umstr);
   			}
   		if (mmax == n3) {
   			var l = Math.min.apply(null, [n,n1]);
   			  if (l==n) var umstr = str.substring(n2+1,n1);
   			var l = Math.min.apply(null, [n,n1]);  
   			  if (l==n1)  {
   			var umstr = str.substring(n1+1,n3);
   			  }
   				console.log("umn="+umstr);
   			}	
   			
   		  }
 //-------------------------------------------------------------  		  
   	if ((mmin == n3) && ((mmax == n2) || (mmax == n1))) {
   		if (mmax == n1) {
   			var l = Math.min.apply(null, [n,n2]);
   			  if (l==n) var umstr = str.substring(n3+1,n2);
   			var l = Math.max.apply(null, [n,n2]);  
   			  if (l==n)  {
   			var umstr = str.substring(n2+1,n1);	
   			  }
   				console.log("umn="+umstr);
   			}
   			if (mmax == n2) {
   			var l = Math.min.apply(null, [n,n1]);
   			  if (l==n) var umstr = str.substring(n3+1,n1);
   			var l = Math.max.apply(null, [n,n1]);  //------------------
   			  if (l==n)  {
   			var umstr = str.substring(n1+1,n2);	
   			  }
   				console.log("umn="+umstr);
   			}
      		  }		  	  
//==================================================================   	
console.log(umstr);

	  
  //  var arr = str.split('-');
console.log("n="+n);
console.log("n1="+n1);
console.log("n2="+n2);
console.log("n3="+n3);
//------------отправка запроса-------------------------
let url = 'http://localhost:8089/?text='+umstr;
    global.content = '';
    var someData; 

    console.log("123");
     
    http.get('http://localhost:8089/?text='+umstr, (res) => {
          
      var data = '';  
      
     res.on('data', function (d) 
    {

     console.log("555");
       data = d;        
    });
res.on('data', (d) => {
     //  res.on('end', () => {
       	      test1 = data;
       //     console.log("test: " + test1);
        //    console.log(umstr);
        //  console.log("**************" + str);
           var nstr = str;
            var umnnog = str.replace(umstr, test1);
          console.log(umnnog);
            response.writeHead(200, {"Content-Type": "text/html; charset=utf-8" });
            umnnog = umnnog.replace('%2B', '+');
            str = umnnog.replace('%2F', '/');
           // response.write(data);
            response.write("<b>Вычисляем: " + nstr + "</b>");
            response.write("<p>Ответ сервера умножения: " + str + "</p>");
    //        response.end();
    //----------------------------------------------------------------
  
   console.log("--------------" + str);
   // str1 = str.slice(5);
   // var n = str1.indexOf('*');
    var n1 = str.indexOf('-');
   var n2 = str.indexOf('+');
    var n3 = str.indexOf('/');
    console.log("--------------" + str);
    console.log("______________" + n1);
    console.log("______________" + n2);
    console.log("______________" + n3);
    
  //----------Деление--------------------------------------      	
    var mmin = Math.min.apply(null, [n1,n2,n3]);
    if (n3==mmin) {
    var l = Math.min.apply(null, [n1,n2]);	
     var umstr1 = str.substring(0, l);	
   console.log("______________"+umstr1);
    }
    
    var mmax = Math.max.apply(null, [n1,n2,n3]);
    if (n3==mmax) {
    var l = Math.max.apply(null, [n1,n2]);	
    if (l == n1) {
    var umstr1 = str.substr(l+1);	
    }
   else var umstr1 = str.substr(n2+1);
       	console.log("______________"+umstr1);
       }	
     
     if ((n2==mmax || n1==mmax) && n3!=mmin) {
    var l = Math.max.apply(null, [n1,n2]);	
    if (l == n1) {
    var umstr1 = str.substring(n2+1,n1);	
    }
   else var umstr1 = str.substring(n1+1,n2);
       	console.log("______________"+umstr1);
       }	 
                
console.log("umstr1=============="+umstr1);
  console.log("str=============="+str);  
  //------------отправка запроса-------------------------
let url = 'http://localhost:8090/?text='+umstr1;
    global.content = '';
    var someData; 

    console.log("123");
     
    http.get('http://localhost:8090/?text='+umstr1, (res) => {
          
      var data = '';  
      
     res.on('data', function (d1) 
    {

     console.log("777");
       data = d1;  
       console.log("+++++++data++++++" + data);      
//  });
//--------------res.on('data', (d1) => {
     //  res.on('end', () => {
       	      test2 = data;
       	 //     console.log("test: " + test1);
        //    console.log(umstr);
       //    console.log(str);
            var umnnog = str.replace(umstr1, test2);
          console.log("+++++++umnnog++++++" + umnnog);
      //      response.writeHead(200, {"Content-Type": "text/html; charset=utf-8" });
            umnnog = umnnog.replace('%2B', '+');
            str = umnnog.replace('%2F', '/');
           // response.write(data);
            response.write("<p>Ответ сервера деления: " + str + "</p>");
       //     response.end();
            
 //-----------------------Сложение-----------------------------------------        
    var n1 = str.indexOf('-');
    var n2 = str.indexOf('+');
    var n1 = str.indexOf('-');
    console.log("--------------" + str);
    console.log("______________" + n1);
    console.log("______________" + n2);
   
   var mmin = Math.min.apply(null, [n1,n2]);
    if (n2==mmin) var umstr2 = str.substring(0, n1);	
    var mmax = Math.max.apply(null, [n1,n2]);
    if (n2==mmax) var umstr2 = str.substr(n1);
   console.log("______________"+umstr2);
 //------------отправка запроса-------------------------
let url = 'http://localhost:8091/?text='+umstr2;
    global.content = '';
    var someData; 

    console.log("123");
     
    http.get('http://localhost:8091/?text='+umstr2, (res) => {
          
      var data = '';  
      
     res.on('data', function (d2) 
    {

     console.log("888");
       data = d2;  
       console.log("+++++++data++++++" + data);      
//  });
//--------------res.on('data', (d1) => {
     //  res.on('end', () => {
       	      test3 = data;
       	 //     console.log("test: " + test1);
        //    console.log(umstr);
       //    console.log(str);
            var umnnog = str.replace(umstr2, test3);
          console.log("+++++++umnnog++++++" + umnnog);
      //      response.writeHead(200, {"Content-Type": "text/html; charset=utf-8" });
            umnnog = umnnog.replace('%2B', '+');
            str = umnnog.replace('%2F', '/');
           // response.write(data);
            response.write("<p>Ответ сервера сложения: " + str + "</p>");
        //    response.end();
   
   
   //------------отправка запроса вычитания-------------------------
let url = 'http://localhost:8092/?text='+str;
    global.content = '';
    var someData; 

    console.log("123");
     
    http.get('http://localhost:8092/?text='+str, (res) => {
          
      var data = '';  
      
     res.on('data', function (d3) 
    {

     console.log("888");
       data = d3;  
       console.log("+++++++data++++++" + data);      
//  });
//--------------res.on('data', (d1) => {
     //  res.on('end', () => {
     //  	      test4 = data;
       	 
            response.write("<p>Ответ сервера вычитания: " + data + "</p>");
            response.write("<p><b>ИТОГО: " + data + "</b></p>");
            response.end();
   
   });

    }).on('error', (e) => {
      console.error(e);
    }); 
    //---------------------конец вычитания--------------------------------       
         
         
   });

    }).on('error', (e) => {
      console.error(e);
    }); 
    //---------------------конец сложения--------------------------------      
            
           });

    }).on('error', (e) => {
      console.error(e);
    }); 
    //---------------------конец деления--------------------------------
  
  
  

       });

    }).on('error', (e) => {
      console.error(e);
    }); 
    //----------------------конец умножения------------------------------       
  }
   	
               }
  
 //----------------------------------------------------------- 
            
          //  console.log(str);
         
//}


exports.start = start;
exports.upload = upload;
