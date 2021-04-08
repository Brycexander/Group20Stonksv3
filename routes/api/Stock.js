const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load Stock model
const Stock = require("../../models/Stock");

router.post("/search", (req, res) => {
    const UpperCaseQuery = req.body.Query.toUpperCase()
    Stock.find({ "Company": { "$regex": UpperCaseQuery, "$options": "i" }}).then(stock => {
        if (!stock.length) {
            return res.status(404).json({ StockNotFound: "No Stocks Found" });
        }
        res.json(stock);
    });
});

module.exports = router;