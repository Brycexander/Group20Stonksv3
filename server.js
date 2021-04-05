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


// var stocks = new Array("AAPL", "MSFT", "FB", "TSLA", "BABA", "TSM", "JPM",
//                         "BAC", "WMT", "INTC", "CMCSA", "VZ", "XOM", "KO",
//                         "CSCO", "ORCL", "T", "PFE", "WFC", "C", "QCOM", "BA",
//                         "AMAT", "JD", "GE", "UBER", "MU", "AMD", "VALE", "GM");



// /*
// Open: data.o,
// ..


// */
// // Update Quote Function
// finnhubClient.quote(stocks[i], (error, data, response) => {
//   Stock.findOne({ Company: stocks[i] }).then(stock => {
//     if (stock) {
//       let quote = stock.findOneAndUpdate(stock.Quote, data, {
//           new: true
//       });
//     }
//     else {
//       const newStock = new Stock({
//         Company: stocks[i],
//         Quote: data
//       })
//     }
//   });
// });

// // Update Candlestick Function
// // TODO: Fix Unix Timestamps for retrieval
// finnhubClient.stockCandles(stocks[i], "D", 1590988249, 1591852249, {}, (error, data, response) => {
//   const stock = Stock.findOne({ Company: stocks[i] });
//   let candle = Stock.findOneAndUpdate(stock.Candlestick, data, {
//     new: true
//   });
// });


// // Calls recursively every 1 minute
// // Final should be (* 9-17 * * MON-FRI)
// cron.schedule('* * * * *', () => {
//   for (i = 0; i < stocks.length; i++) {
//     finnhubClient.quote(stocks[i], (error, data, response) => {
//       // UPDATE QUOTE IN DATABASE
//     });
//     finnhubClient.stockCandles(stocks[i], "D", 1590988249, 1591852249, {}, (error, data, response) => {
//       // UPDATE CHART IN DATBASE
//     });
//   }
//   // UPDATE USER BALANCES
// });

// // UPDATE 30 DAY CHART AT MIDNIGHT



app.listen(port, () => console.log(`Server up and running on port ${port} !`));

