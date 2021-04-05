const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PortfolioSchema = new Schema({
    Login: {
        type: String,
        required: true
    },
    CashInvested: {
        type: Number,
        required: true
    },
    CashBalance: {
        type: Number,
        required: true
    },
    NameOfStocksOwned: [{
        type: String
    }],
    AmountPerStock: [{
        type: Number
    }]
});

module.exports = Portfolio = mongoose.model("Portfolio", PortfolioSchema);