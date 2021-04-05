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
        default: 10000,
        required: true
    },
    StocksOwned: [{
        Company: String,
        Amount: Decimal128,
        Date: Date
    }],
    History: [{
        Date: Date,
        Company: String,
        Side: String,
        Price: Decimal128,
        Amount: Decimal128,
        Total: Decimal128
    }],
    BalanceHistory: [Decimal128]
});

module.exports = Portfolio = mongoose.model("Portfolio", PortfolioSchema);