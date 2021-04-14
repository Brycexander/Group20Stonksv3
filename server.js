require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const finnhub = require('finnhub');
var cron = require('node-cron');
var unixTimestamp = require("unix-timestamp");
unixTimestamp.round = true;


// for first finnhub API
const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = process.env.finnhubURI // Replace this
const finnhubClient = new finnhub.DefaultApi()

// // for second finnhub API
// // const FinnhubAPI = require('@stoqey/finnhub');
// import FinnhubAPI, { FinnhubWS } from '@stoqey/finnhub';
// // For API
// const finnhubAPI = new FinnhubAPI(require("./config/keys").finnhubURI);
// // For Websockets
// const finnhubWs = new FinnhubWS(require("./config/keys").finnhubURI); // or leave finnHubKey blank if process.env.FINNHUB_KEY is set

 //const Users = require("./routes/api/Users");
const authenticate = require('./config/authenticate');
const Stocks = require("./routes/api/Stock");
const Portfolios = require("./routes/api/Portfolios");
const auth = require('./routes/auth');
const user = require('./routes/user');
const app = express();

// Bodyparser middleware
app.use(
   bodyParser.urlencoded({
      extended: false
   })
);
app.use(bodyParser.json());

// DB Config
const db = process.env.mongoURI;
const User = require("./models/User");
const Stock = require("./models/Stock");
const Portfolio = require("./models/Portfolio");
// const { where } = require("./models/User");


// Connect to MongoDB
mongoose
   .connect(
      db,
      {
         useNewUrlParser: true,
         useUnifiedTopology: true
      }
   )
   .then(() => console.log("MongoDB successfully connected"))
   .catch(err => console.log(err));

app.use(passport.initialize());
require("./config/passport")(passport);

app.use('/api/auth', auth);
app.use('/api/user', authenticate, user);
app.use("/api/Stock", Stocks);
app.use("/api/Portfolios", Portfolios);
const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
   // Set static folder
   app.use(express.static('frontend/build'));

   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
   });
}

var stocks = new Array("AAPL", "MSFT", "FB", "TSLA", "BABA", "TSM", "JPM",
   "BAC", "WMT", "INTC", "CMCSA", "VZ", "XOM", "KO",
   "CSCO", "ORCL", "T", "PFE", "WFC", "C", "QCOM", "BA",
   "AMAT", "JD", "GE");

let StocksValues = new Map()
for (i = 0; i < stocks.length; i++)
{
   StocksValues[stocks[i]] = i;
}


// WORKING
// NOTE: COMMENTED ON GITHUB TO NOT MESS SOMETHING UP
//---------------------------------------------------------------------------------------------------------------
cron.schedule('*/2 * * * *', () => {
   // setting timestamps
   var from3Months = unixTimestamp.now("-3M");
   var toNow = unixTimestamp.now();

   // for AAPL
   finnhubClient.quote("AAPL", (error, data, response) => {
		if (error) {console.error(error);}
		else if (data != null) {
			Stock.findOne({ Company: "AAPL" }).then(stock => {
            stock.Quote = data;
            StocksValues["AAPL"] = stock.Quote.c;
            stock.save();
			});
		}
	});
   finnhubClient.stockCandles("AAPL", "D", from3Months, toNow, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "AAPL" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for MSFT
   finnhubClient.quote("MSFT", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "MSFT" }).then(stock => {
              stock.Quote = data;
             StocksValues["MSFT"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("MSFT", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "MSFT" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for FB
   finnhubClient.quote("FB", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "FB" }).then(stock => {
              stock.Quote = data;
             StocksValues["FB"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("FB", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "FB" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for TSLA
   finnhubClient.quote("TSLA", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "TSLA" }).then(stock => {
             stock.Quote = data;
             StocksValues["TSLA"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("TSLA", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "TSLA" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for BABA
   finnhubClient.quote("BABA", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
          Stock.findOne({ Company: "BABA" }).then(stock => {
              stock.Quote = data;
              StocksValues["BABA"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("BABA", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "BABA" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for TSM
   finnhubClient.quote("TSM", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
          Stock.findOne({ Company: "TSM" }).then(stock => {
              stock.Quote = data;
              StocksValues["TSM"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("TSM", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "TSM" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for JPM
   finnhubClient.quote("JPM", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "JPM" }).then(stock => {
              stock.Quote = data;
             StocksValues["JPM"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("JPM", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "JPM" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for BAC
   finnhubClient.quote("BAC", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
          Stock.findOne({ Company: "BAC" }).then(stock => {
              stock.Quote = data;
              StocksValues["BAC"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("BAC", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "BAC" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for WMT
   finnhubClient.quote("WMT", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
          Stock.findOne({ Company: "WMT" }).then(stock => {
              stock.Quote = data;
              StocksValues["WMT"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("WMT", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "WMT" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for INTC
   finnhubClient.quote("INTC", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "INTC" }).then(stock => {
              stock.Quote = data;
             StocksValues["INTC"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("INTC", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "INTC" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for CMCSA
   finnhubClient.quote("CMCSA", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "CMCSA" }).then(stock => {
             stock.Quote = data;
             StocksValues["CMCSA"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("CMCSA", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "CMCSA" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for VZ
   finnhubClient.quote("VZ", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "VZ" }).then(stock => {
              stock.Quote = data;
             StocksValues["VZ"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("VZ", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "VZ" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for XOM
   finnhubClient.quote("XOM", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "XOM" }).then(stock => {
             stock.Quote = data;
             StocksValues["XOM"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("XOM", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "XOM" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for KO
   finnhubClient.quote("KO", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "KO" }).then(stock => {
              stock.Quote = data;
             StocksValues["KO"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("KO", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "KO" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for CSCO
   finnhubClient.quote("CSCO", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "CSCO" }).then(stock => {
              stock.Quote = data;
             StocksValues["CSCO"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("CSCO", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "CSCO" }).then(stock => {
            stock.Candlestick = data;
            stock.save();
         });
      }
   });

   // for ORCL
   finnhubClient.quote("ORCL", (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "ORCL" }).then(stock => {
              stock.Quote = data;
             StocksValues["ORCL"] = stock.Quote.c;
            stock.save();
         });
      }
   });
   finnhubClient.stockCandles("ORCL", "D", 1590988249, 1591852249, {}, (error, data, response) => {
      if (error) { console.error(error); }
      else if (data != null) {
         Stock.findOne({ Company: "ORCL" }).then(stock => {
              stock.Candlestick = data;
            stock.save();
         });
      }
   });

    // for T
    finnhubClient.quote("T", (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "T" }).then(stock => {
                stock.Quote = data;
                StocksValues["T"] = stock.Quote.c;
                stock.save();
            });
        }
    });
    finnhubClient.stockCandles("T", "D", 1590988249, 1591852249, {}, (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "T" }).then(stock => {
                stock.Candlestick = data;
                stock.save();
            });
        }
    });

    // for PFE
    finnhubClient.quote("PFE", (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "PFE" }).then(stock => {
                stock.Quote = data;
                StocksValues["PFE"] = stock.Quote.c;
                stock.save();
            });
        }
    });
    finnhubClient.stockCandles("PFE", "D", 1590988249, 1591852249, {}, (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "PFE" }).then(stock => {
                stock.Candlestick = data;
                stock.save();
            });
        }
    });

    // for WFC
    finnhubClient.quote("WFC", (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "WFC" }).then(stock => {
                stock.Quote = data;
                StocksValues["WFC"] = stock.Quote.c;
                stock.save();
            });
        }
    });
    finnhubClient.stockCandles("WFC", "D", 1590988249, 1591852249, {}, (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "WFC" }).then(stock => {
                stock.Candlestick = data;
                stock.save();
            });
        }
    });

    // for C
    finnhubClient.quote("C", (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "C" }).then(stock => {
                stock.Quote = data;
                StocksValues["C"] = stock.Quote.c;
                stock.save();
            });
        }
    });
    finnhubClient.stockCandles("C", "D", 1590988249, 1591852249, {}, (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "C" }).then(stock => {
                stock.Candlestick = data;
                stock.save();
            });
        }
    });

    // for QCOM
    finnhubClient.quote("QCOM", (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "QCOM" }).then(stock => {
                stock.Quote = data;
                StocksValues["QCOM"] = stock.Quote.c;
                stock.save();
            });
        }
    });
    finnhubClient.stockCandles("QCOM", "D", 1590988249, 1591852249, {}, (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "QCOM" }).then(stock => {
                stock.Candlestick = data;
                stock.save();
            });
        }
    });

    // for BA
    finnhubClient.quote("BA", (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "BA" }).then(stock => {
                stock.Quote = data;
                StocksValues["BA"] = stock.Quote.c;
                stock.save();
            });
        }
    });
    finnhubClient.stockCandles("BA", "D", 1590988249, 1591852249, {}, (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "BA" }).then(stock => {
                stock.Candlestick = data;
                stock.save();
            });
        }
    });

    // for AMAT
    finnhubClient.quote("AMAT", (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "AMAT" }).then(stock => {
                stock.Quote = data;
                StocksValues["AMAT"] = stock.Quote.c;
                stock.save();
            });
        }
    });
    finnhubClient.stockCandles("AMAT", "D", 1590988249, 1591852249, {}, (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "AMAT" }).then(stock => {
                stock.Candlestick = data;
                stock.save();
            });
        }
    });

    // for JD
    finnhubClient.quote("JD", (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "JD" }).then(stock => {
                stock.Quote = data;
                StocksValues["JD"] = stock.Quote.c;
                stock.save();
            });
        }
    });
    finnhubClient.stockCandles("JD", "D", 1590988249, 1591852249, {}, (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "JD" }).then(stock => {
                stock.Candlestick = data;
                stock.save();
            });
        }
    });

    // for GE
    finnhubClient.quote("GE", (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "GE" }).then(stock => {
                stock.Quote = data;
                StocksValues["GE"] = stock.Quote.c;
                stock.save();
            });
        }
    });
    finnhubClient.stockCandles("GE", "D", 1590988249, 1591852249, {}, (error, data, response) => {
        if (error) { console.error(error); }
        else if (data != null) {
            Stock.findOne({ Company: "GE" }).then(stock => {
                stock.Candlestick = data;
                stock.save();
            });
        }
    });

   // UPDATE PORTFOLIOS STOCKSOWNED: TOTALVALUE
   Portfolio.find().then(portfolios => {
      if (!portfolios.length)
         console.log("No portfolios to update");
      else {
         for (i = 0; i < portfolios.length; i++) {
            sum = 0;
            currStock = 0;
            for (j = 0; j < portfolios[i].StocksOwned.length; j++) {
               currStock = StocksValues[portfolios[i].StocksOwned[j].Company];
               portfolios[i].StocksOwned[j].StockValue = currStock;
               portfolios[i].StocksOwned[j].TotalValue = currStock * portfolios[i].StocksOwned[j].Amount;
               sum += portfolios[i].StocksOwned[j].TotalValue;
            }
            portfolios[i].Holdings = sum;
            sum += portfolios[i].Cash;
            portfolios[i].AccountBalance = sum;
            portfolios[i].save();
         }
      }
   });
});

// // UPDATE 30 DAY CHART AT MIDNIGHT

//---------------------------------------------------------------------------------------------------------------------

// TRYING TO INITIALIZE ALL STOCK VALUES

// for (i = 0; i < stocks.length; i++)
// {
// 	var currStock = stocks[i];
// 	// console.log(currStock)
//    const newStock = new Stock();
//    newStock.Company = stocks[i];

//    finnhubClient.quote(stocks[i], (error, data, response) => {
//       if (error) {console.error(error);}
//       else {
// 			newStock.Quote = data;
//       }
//    });

//    finnhubClient.stockCandles(stocks[i], "D", 1590988249, 1591852249, {}, (error, data, response) => {
//       if (error) {console.error(error);}
//       else {
//          newStock.Candlestick = data;
//          // console.log(newStock);
// 			// newStock.save();
//       }
//    });
// 	// console.log(quote);
//    console.log(newStock);
// }
//-----------------------------------------------------------------------------------------------------------
// ADD SINGLE STOCK VALUE

// stocks to add "BAC" and "C"

// const newStock = new Stock();
// newStock.Company = "C";
// finnhubClient.quote("C", (error, data, response) => {
//   // for Quote
//   newStock.Quote.o = data.o;
//   newStock.Quote.h = data.h;
//   newStock.Quote.l = data.l;
//   newStock.Quote.c = data.c;
//   newStock.Quote.pc = data.pc;
//   // console.log(newStock);
// });

// finnhubClient.stockCandles("C", "D", 1590988249, 1591852249, {}, (error, data, response) => {
//   newStock.Candlestick.o = data.o;
//   newStock.Candlestick.h = data.h;
//   newStock.Candlestick.l = data.l;
//   newStock.Candlestick.c = data.c;
//   newStock.Candlestick.v = data.v;
//   newStock.Candlestick.t = data.t;
//   newStock.Candlestick.s = data.s;

//   console.log(newStock);
//   newStock.save();
// });

// finnhubClient.quote("C", (error, data, response) => {
// 	console.log(data);
// });

// console.log(test);


// PORTFOLIO OPERATIONS
//===========================================================================================

// TO ADD A NEW STOCK TO A PORTFOLIO
// Portfolio.findOne({ Login: "test"}).then(portfolio => {
//    // console.log(portfolio.StocksOwned);
//    portfolio.StocksOwned.push({Company:"MSFT", Amount: 2, StocksValues: 1, TotalValue: 1, Date: Date.now()});
//    // console.log(portfolio.StocksOwned);
//    portfolio.save();
//    // console.log(portfolio.Cash);
//    // portfolio.BalanceHistory.push(11111);
//    // portfolio.BalanceHistory.splice(0, 1);
//    // console.log(portfolio.BalanceHistory);
// })

// TO ADD A NEW PORTFOLIO
// const newPortfolio = new Portfolio()
// newPortfolio.Login = "anothertest";
// newPortfolio.save();
// Portfolio.findOne({ Login: "anothertest" }).then(portfolio => {
//    // console.log(portfolio.StocksOwned);
//    portfolio.StocksOwned.push({ Company: "TSLA", Amount: 5, StocksValues: 1, TotalValue: 1, Date: Date.now() });
//    // console.log(portfolio.StocksOwned);
//    portfolio.save();
//    // console.log(portfolio.Cash);
//    // portfolio.BalanceHistory.push(11111);
//    // portfolio.BalanceHistory.splice(0, 1);
//    // console.log(portfolio.BalanceHistory);
// })



// var cash = 0;
// var k = 0;
// Portfolio.findOne({ Login: "test"}).then(portfolio => {

// })

// Portfolio.findOne({ Login: "test" }).then(portfolio => {
//    total = 0;
//    for each stock owned:
//       total += portfolio.StocksOwnded.totalprice
//    total += cash;
//    save(total);
// )};

// Stock.find({ "Company": { "$regex": "A", "$options": "i" } }).then(stock => {
//    if (!stock) {
//       console.log("error");
//    }
//    console.log(stock);
// });


app.listen(port, () => console.log(`Server up and running on port ${port} !`));
