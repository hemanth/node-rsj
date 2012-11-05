exports.r2j = r2j;

var FeedParser = require('feedparser');

function r2j (uri,cb){
	var parser = new FeedParser();
    parser.parseUrl(uri,function(err, meta, articles){
        if(err) return console.error(err);
        cb(JSON.stringify(articles));
    });
}


//function rsj(uri,cb){ ... .parseUri(... function callback(){ cb(JSON.stringify(articles)) } ) } 
