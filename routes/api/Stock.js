const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load Stock model
const Stock = require("../../models/Stock");

// router.post("/update", (req, res) => {
//     // Update Quote Function
//     finnhubClient.quote(stocks[i], (error, data, response) => {
//         Stock.findOne({ Company: stocks[i] }).then(stock => {
//         if (stock) {
//             let quote = stock.findOneAndUpdate(stock.Quote, data, {
//                 new: true
//             });
//         }
//         else {
//             const newStock = new Stock({
//             Company: stocks[i],
//             Quote: data
//             })
//         }
//     });
//   });
//     // Update Candlestick Function
//     // TODO: Fix Unix Timestamps for retrieval
//     finnhubClient.stockCandles(stocks[i], "D", 1590988249, 1591852249, {}, (error, data, response) => {
//         const stock = Stock.findOne({ Company: stocks[i] });
//         let candle = Stock.findOneAndUpdate(stock.Candlestick, data, {
//             new: true
//         });
//     });
// });


// req {
//     Query: "string to be queried"
// }
router.post("/search", (req, res) => {
    const UpperCaseQuery = req.body.Query.toUpperCase()
    Stock.find({ "Company": { "$regex": UpperCaseQuery, "$options": "i" }}).then(stock => {
        if (!stock) {
            return res.status(404).json({ StockNotFound: "Stock not found" });
        }
        res.json(stock);
    });
});

module.exports = router;