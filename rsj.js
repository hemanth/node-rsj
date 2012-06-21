var FeedParser = require('feedparser')
  , parser

parser = new FeedParser();

 
var jss = [];
function toJSON(err, meta, articles){
    if(err) console.error(err);
    else {
        articles.forEach(function (article) {
        jss.push(JSON.stringify(article));
        });
    }
return jss;
}

var rsj = function x2j(uri){
    parser.parseUrl(uri,toJSON);
}

