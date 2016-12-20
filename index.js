/*
 * Summarizes link and responds with json payload
 *
 * @author ravikiranj
 * @since dec 2016
 */
module.exports = function() {
    'use strict';
    // Private
    var PAGE_TEXT_MAXLEN = 10000,
        request = require("request"),
        unfluff = require('unfluff'),
        Log = require("log"),
        logger = new Log("info"),
        textSummarizer = require("node-summary"),
        _trimString = function(string, maxlen) {
            if (!string) {
                return string;
            }
            return string.length > maxlen ? string.substring(0, maxlen) : string;
        },
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
                    pageContent.status = "ok";
                    try {
                        var trimmedText = _trimString(pageContent.text, PAGE_TEXT_MAXLEN);
                        var emptyTitle = "";
                        textSummarizer.summarize(emptyTitle, trimmedText, function(err, summary) {
                            if (err) {
                                logger.error("Couldn't summarize url = ", url);
                                logger.error("Error = ", error)
                                return;
                            }
                            pageContent.summary = summary.replace(/\n/g, " ");
                            pageContent.status = "ok"	

                            delete pageContent.text;
                            delete pageContent.links;

                            if (typeof(callback) === "function") {
                                callback.apply(null, [pageContent].concat(callbackArgs));
                            }

                        });
                    } catch (e) {
                        pageContent.summary = "";
                        logger.error("Encountered exception when trying to summarize url = ", url);
                        logger.error("Exception = ", e)
                    }
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
