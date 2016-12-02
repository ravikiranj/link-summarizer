'use strict';

var callback = function(response, arg1) {
    console.log(response);
    console.log(arg1);
};

var summarizer = require("./index")();
summarizer.summarizeLink("https://www.ravikiranj.net/", callback, ["dummy"])
