const express = require("express");
const router = express.Router();

// Load Stock model
const Stock = require("../../models/Stock");
const { StockTranscripts } = require("finnhub");
const Portfolio = require("../../models/Portfolio");

// needs to return portfolio
router.post("/getPortfolio", (req, res) => {
    Portfolio.findOne({ "Login": req.body.Login }).then(portfolio => {
        if (!portfolio) {
            return res.status(404).json({ PortfolioNotFound: "No Portfolio Found" });
        }
        res.json(portfolio);
    });
});

// API to Buy
router.post("/buyStock", (req, res) => {
    Portfolio.findOne({ "Login": req.body.Login }).then(portfolio => {
        Stock.findOne({"Company": req.body.Company}).then(stock => {
            if (!stock)
                return res.status(404).json("No Stock Found");
            if (stock.Quote.c * req.body.Amount > portfolio.Cash) {
                return res.status(400).json("Insufficient founds");
            } else {
                var index = -1;
                for (i = 0; i < portfolio.StocksOwned.length; i++) {
                    if (portfolio.StocksOwned[i].Company == req.body.Company) {
                        index = i;
                        break;
                    }
                }
                if (index != -1) {
                    portfolio.StocksOwned[index].Amount += req.body.Amount;
                    portfolio.StocksOwned[index].TotalValue += stock.Quote.c * req.body.Amount;
                } else {
                    portfolio.StocksOwned.push({ Company: req.body.Company, Amount: req.body.Amount, StockValue: stock.Quote.c, TotalValue: stock.Quote.c * req.body.Amount, Date: Date.now() });
                }

                portfolio.Cash -= stock.Quote.c * req.body.Amount;
                portfolio.Holdings += stock.Quote.c * req.body.Amount;
                portfolio.save().then(res.status(200).json("Shares Bought"));
            }
        });
    });
});


// API for Sell
router.post("/sellStock", (req, res) => {
    Portfolio.findOne({ "Login": req.body.Login }).then(portfolio => {
        Stock.findOne({ "Company": req.body.Company}).then(stock => {
            if (!stock)
                return res.status(404).json("No Stock Found");
            var index = -1;
            var stockQuantity = -1;
            for (i = 0; i < portfolio.StocksOwned.length; i++) {
                if (portfolio.StocksOwned[i].Company == req.body.Company) {
                    index = i;
                    stockQuantity = portfolio.StocksOwned[i].Amount;
                    break;
                }
            }

            if (index == -1 || stockQuantity < req.body.Amount) {
                return res.status(400).json("Don't own enough shares");
            }
            else if (stockQuantity == req.body.Amount) {
                portfolio.StocksOwned.splice(index, 1);
            }
            else {
                portfolio.StocksOwned[index].Amount -= req.body.Amount;
                portfolio.StocksOwned[index].TotalValue -= stock.Quote.c * req.body.Amount;
            }

            portfolio.Cash += req.body.Amount * stock.Quote.c;
            portfolio.Holdings -= req.body.Amount * stock.Quote.c;
            portfolio.save().then(res.status(200).json("Shares Sold"));
        })
    });
});

router.post("/bankrupt", (req, res) => {
    Portfolio.findOneAndDelete({ "Login" : req.body.Login }).then(portfolio => {
        const newPortfolio = new Portfolio({ Login: req.body.Login });
        newPortfolio.save();
        res.status(200).json({ message: "Your old portfolio has been deleted, and a new one has been created."});
    });
});

router.post("/leaderboard", (req, res) => {
    Portfolio.find({}).then(portfolios => {
        if (!portfolios) {
            res.status(404).json({ NoPortfolios: "No Portfolios Found" })
        }
        else {
            var retVal = [];
            for (i = 0; i < portfolios.length; i++)
            {
                retVal.push({Login: portfolios[i].Login, AccountBalance: portfolios[i].AccountBalance});
            }

            const sorted = retVal.sort((a, b) => {
                return b - a;
            })

            res.status(200).json(sorted);
        }
    });
});


module.exports = router;