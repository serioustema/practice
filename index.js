var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");
var requestHandlers2 = require("./requestHandlers2");
var requestHandlers3 = require("./requestHandlers3");
var requestHandlers4 = require("./requestHandlers4");
var requestHandlers5 = require("./requestHandlers5");
var handle = {}
handle["/"] = requestHandlers.start;
//handle["/"] = requestHandlers2.start;
//handle["/"] = requestHandlers3.start;
//handle["/"] = requestHandlers4.start;
//handle["/"] = requestHandlers5.start;

handle["/start"] = requestHandlers.start;
handle["/start2"] = requestHandlers2.start;
handle["/start3"] = requestHandlers3.start;
handle["/start4"] = requestHandlers4.start;
handle["/start5"] = requestHandlers5.start;

handle["/upload"] = requestHandlers.upload;
handle["/upload2"] = requestHandlers2.upload;
handle["/upload3"] = requestHandlers3.upload;
handle["/upload4"] = requestHandlers4.upload;
handle["/upload5"] = requestHandlers5.upload;

server.start(router.route, handle);
server.start2(router.route, handle);
server.start3(router.route, handle);
server.start4(router.route, handle);
//server.start5(router.route, handle);
