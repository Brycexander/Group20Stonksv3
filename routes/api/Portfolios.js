const express = require("express");
const router = express.Router();
// Load Stock model
const Stock = require("../../models/Portfolio");
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
        if (req.body.Price * req.body.Amount > portfolio.Cash) {
            return res.status(400).json("Insufficient founds");
        } /*else {
            var index = -1;
            for (i = 0; i < portfolio.StocksOwned.length; i++){
                if (portfolio.StocksOwned[i].Company == req.body.Company) {
                    index = i;
                    break;
                }
            }
            if (index != -1) {
                portfolio.StocksOwned[index].Amount += req.body.Amount;
            } else {
                portfolio.StocksOwned.push({ Company: req.body.Company, Amount: req.body.Amount, StockValue: req.body.Price, TotalValue: rep.body.Price * req.body.Amount, Date: Date.now() });
            }
            Portfolio.Cash -= rep.body.Price * req.body.Amount;
            portfolio.save().then(res.status(200).json("Stock Bought"));
            
        }*/
        portfolio.StocksOwned.push({Company:"MSFT", Amount: 2, StocksValues: 1, TotalValue: 1, Date: Date.now()});
        portfolio.save();

    });
});


// API for Sell
router.post("/sellStock", (req, res) => {
    Portfolio.findOne({ "Login": req.body.Login }).then(portfolio => {
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
        portfolio.StocksOwned[index].Amount -= req.body.Amount;
        portfolio.Cash += req.body.Amount * req.body.Price;
        portfolio.Holdings -= req.body.Amount * req.body.Price;
        portfolio.save().then(res.status(200).json("Shares Sold"));
    });
});

router.post("/bankrupt", (req, res) => {
    Portfolio.findOneAndDelete({ "Login" : req.body.Login }).then(portfolio => {
        const newPortfolio = new Portfolio({ Login: req.body.Login });
        newPortfolio.save();
        res.status(200).json({ message: "Your old portfolio has been deleted, and a new one has been created."});
    });
});


module.exports = router;