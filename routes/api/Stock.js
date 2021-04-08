const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load Stock model
const Stock = require("../../models/Stock");
const { StockTranscripts } = require("finnhub");

// needs to just return the company name and the quote
router.post("/search", (req, res) => {
    const UpperCaseQuery = req.body.Query.toUpperCase()
    Stock.find({ "Company": { "$regex": UpperCaseQuery, "$options": "i" }}).then(stock => {
        if (!stock.length) {
            return res.status(404).json({ StockNotFound: "No Stocks Found" });
        }
        else {
            var retVal;
            for (i = 0; i < stock.length; i++)
            {
                retVal.push({Company: stock[i].Company, Quote: stock[i].Quote});
            }
            res.json(retVal);
        }
    });
});

// needs to return candlestick
router.post("/getChart", (req, res) => {
    Stock.findOne({ "Company": req.body.Company}).then(stock => {
        if (!stock) {
            return res.status(404).json({ StockNotFound: "No Stock Found" });
        }
        res.json(stock.Candlestick);
    });
});



module.exports = router;