const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    Company: {
        type: String,
        required: true
    },
    Quote: {
        Open: Decimal128,
        High: Decimal128,
        Low: Decimal128,
        Current: Decimal128,
        PreviousClose: Decimal128
    },
    Candlestick: {
        ClosePrices: [{
            type: Decimal128
        }],
        HighPrices: [{
            type: Decimal128
        }],
        LowPrices: [{
            type: Decimal128
        }],
        OpenPrices: [{
            type: Decimal128
        }],
        Status: String,
        Timestamps: [{
            type: Number
        }],
        Volume: [{
            type: Number
        }]
    }
    
});
