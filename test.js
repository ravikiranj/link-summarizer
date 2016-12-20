'use strict';

var callback = function(response, arg1) {
    console.log(response);
};

var summarizer = require("./index")();
var url = "https://en.wikipedia.org/wiki/Bacteria";
url = "http://www.imdb.com/name/nm4530214/"
summarizer.summarizeLink(url, callback, ["dummy"])
