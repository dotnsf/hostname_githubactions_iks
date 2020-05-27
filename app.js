//.  app.js
var express = require( 'express' ),
    fs = require( 'fs' ),
    app = express();

app.get( '/', function( req, res ){
  res.contentType( 'text/plain; charset=utf-8' );
  fs.readFile( '/etc/hostname', "utf-8", function( err, text ){
    if( err ){
      res.write( JSON.stringify( err, 2, null ) );
      res.end();
    }else{
      res.write( text );
      res.end();
    }
  });
});

var port = 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
