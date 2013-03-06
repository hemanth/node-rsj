'use strict';

var feedParser = require('feedparser');

function r2j(url, cb) {
  feedParser.parseUrl(url, function (er, meta, articles) {
    if (er) {
      return console.error(er);
    }
    cb(JSON.stringify(articles));
  });
}

exports.r2j = r2j;
