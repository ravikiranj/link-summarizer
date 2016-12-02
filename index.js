/*
 * Summarizes link and responds with json payload
 *
 * @author ravikiranj
 * @since dec 2016
 */
'use strict';
module.exports = function() {
    // Private
    var MAX_LEN = 200,
        request = require("request"),
        unfluff = require('unfluff'),
        Log = require("log"),
        logger = new Log("info"),
        _errorHandler = function(error, response, body, url) {
            var statusCode = response ? response.statusCode : null;
            logger.error("Failed to fetch response for url = %s, statusCode = %d", url, statusCode);
        },
        _summarizeLink = function(url, callback, callbackArgs) {

            request.get(url, function(error, response, body) {
                var statusCode = response ? response.statusCode : null;
                var pageContent = {"status": "fail"};

                if (error || statusCode !== 200) {
                    _errorHandler(error, response, body, url);
                } else {
                    pageContent = unfluff(body);
                    delete pageContent.text;
                    pageContent.status = "ok";
                }

                if (typeof(callback) === "function") {
                    callback.apply(null, [pageContent].concat(callbackArgs));
                }
            });

        }
    ;

    // Public
    return {
        summarizeLink: function(url, callback, callbackArgs) {
            _summarizeLink(url, callback, callbackArgs);
        }
    };
};
