const express = require('express')

require("dotenv").config();


const app = express();


app.get('/public', function(req, res){
 res.json({
     message: 'Hello From Public API'
 });
});

app.listen(3001)
console.log(`App Listening on ${process.env.REACT_APP_AUTH0_AUDIENCE}`)