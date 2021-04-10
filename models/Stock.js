const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    Company: {
        type: String,
        required: true
    },
    Quote: {
        o: Number,
        h: Number,
        l: Number,
        c: Number,
        pc: Number
    },
    Candlestick: {
        o: [{
            type: Number
        }],
        h: [{
            type: Number
        }],
        l: [{
            type: Number
        }],
        c: [{
            type: Number
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

module.exports = Stock = mongoose.model("Stock", StockSchema);