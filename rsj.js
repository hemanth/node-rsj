'use strict';

var feedParser = require('feedparser');

function r2j(url, cb, options) {
  feedParser.parseUrl(url, function (er, meta, articles) {
    if (er) {
      return console.error(er);
    }
    cb(JSON.stringify(articles), options);
  });
}

exports.r2j = r2j;
