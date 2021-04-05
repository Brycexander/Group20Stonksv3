const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const finnhub = require('finnhub');
var cron = require('node-cron');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = require("./config/keys").finnhubURI // Replace this
const finnhubClient = new finnhub.DefaultApi()

const Users = require("./routes/api/Users");
const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;
// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true, 
      useUnifiedTopology: true 
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/Users", Users);
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('frontend/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

// app.get('/', function (req, res) {
//   res.render('index', {});
// });

// var interval;
// var minutes = .1, the_interval = minutes * 60 * 1000;
// interval = setInterval(function () {
//   // console.log("I am doing my 5 minutes check");
//   // do your stuff here
// }, the_interval);

// clearInterval(interval);

cron.schedule('* * * * *', () => {
  //Quote
  finnhubClient.quote("AAPL", (error, data, response) => {
    console.log(data)
  });
  finnhubClient.quote("GME", (error, data, response) => {
    console.log(data)
  });
  finnhubClient.quote("TSLA", (error, data, response) => {
    console.log(data)
  });
  finnhubClient.quote("QQQ", (error, data, response) => {
    console.log(data)
  });
});



app.listen(port, () => console.log(`Server up and running on port ${port} !`));

