const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load Stock model
const Stock = require("../../models/Portfolio");
const { StockTranscripts } = require("finnhub");

// needs to return portfolio
router.post("/getPortfolio", (req, res) => {
    Portfolio.findOne({ "Login": req.body.Login }).then(portfolio => {
        if (!portfolio) {
            return res.status(404).json({ PortfolioNotFound: "No Portfolio Found" });
        }
        res.json(portfolio);
    });
});

// API for Buy
router.post("buyStock", (req, res) => {
    Portfolio.findOne({ Login: req.body.login }).then(portfolio => {
        
    })
})
// API for Sell


module.exports = router;