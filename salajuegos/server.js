//Install express server
const express = require('express');

const app = express();
const path = require('path');


// Your dist folder
app.use(express.static(__dirname + '/angularapp'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+'/angularapp/index.html'));
});

console.log('Build successful');