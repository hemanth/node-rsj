exports.r2j = r2j;

var FeedParser = require('feedparser')
  , parser

parser = new FeedParser();

function toJSON(err, meta, articles){
    if(err) return console.error(err);
    console.log(JSON.stringify(articles));
}

function r2j (uri,cb){
    parser.parseUrl(uri,toJSON);
}


//function rsj(uri,cb){ ... .parseUri(... function callback(){ cb(JSON.stringify(articles)) } ) } 
