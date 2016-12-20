'use strict';

var callback = function(response, arg1) {
    console.log(response);
};

var summarizer = require("./index")(200);
var url = "https://en.wikipedia.org/wiki/Bacteria";
summarizer.summarizeLink(url, callback, ["dummy"])
