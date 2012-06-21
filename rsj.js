var FeedParser = require('feedparser')
  , parser

parser = new FeedParser();

jss = [];
function toJSON(err, meta, articles){
    if(err) console.error(err);
    else {
        articles.forEach(function (article) {
        jss.push(JSON.stringify(article));
        });
    }
}

var rsj = function (uri){
    parser.parseUrl(uri,toJSON);
    return jss;
}

exports.rsj = rsj;

