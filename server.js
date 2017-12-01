// API key is stored in a .env as 'BR_API_KEY': '{API KEY}'
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const logger = require('morgan');

// Middleware
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(logger('dev'));

// Routes
require('./routes/api.js')(app);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})