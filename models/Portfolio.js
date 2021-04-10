const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    Login: {
        type: String,
        required: true
    },
    Cash: {
        type: Number,
        default: 10000,
        required: true
    },
    Holdings: {
        type: Number,
        default: 0,
        required: true
    },
    AccountBalance: {
        type: Number,
        default: 10000,
        required: true
    },
    StocksOwned: [{
        Company: String,
        Amount: Number,
        StockValue: Number,
        TotalValue: Number,
        Date: Date
    }],
    BuyingHistory: [{
        Date: Date,
        Company: String,
        Side: String,
        Price: Number,
        Amount: Number,
        Total: Number
    }],
    BalanceHistory: {
        type: Array,
        default: [10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000,
                  10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000,
                  10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000, 10000]
    }
});

module.exports = Portfolio = mongoose.model("Portfolio", PortfolioSchema);