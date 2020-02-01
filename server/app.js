const express = require('express');
const fs = require('fs');
const https = require('https');
const app = express();
var key = fs.readFileSync('encryption/private.key');
var cert = fs.readFileSync( 'encryption/primary.crt' );
var ca = fs.readFileSync( 'encryption/intermediate.crt' );

var options = {
  key: key,
  cert: cert,
  ca: ca
};

app.get('/', function (req, res) {
  res.send('Hello Pixi!');
});

https.createServer(options, app).listen(443);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
