const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    Company: {
        type: String,
        required: true
    },
    Quote: {
        o: Decimal128,
        h: Decimal128,
        l: Decimal128,
        c: Decimal128,
        pc: Decimal128
    },
    Candlestick: {
        o: [{
            type: Decimal128
        }],
        h: [{
            type: Decimal128
        }],
        l: [{
            type: Decimal128
        }],
        c: [{
            type: Decimal128
        }],
        v: [{
            type: Number
        }],
        t: [{
            type: Number
        }],
        s: String,
    }
    
});
