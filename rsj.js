exports.r2j = r2j;

var FeedParser = require('feedparser')
  , parser

parser = new FeedParser();

function r2j (uri,cb){
    parser.parseUrl(uri,function(err, meta, articles){
    if(err) return console.error(err);
    cb(JSON.stringify(articles));
}


//function rsj(uri,cb){ ... .parseUri(... function callback(){ cb(JSON.stringify(articles)) } ) } 
