const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StockSchema = new Schema({
    Company: {
        type: String,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Candlestick: [{
        type: Number,
        required: true
    }]
});

module.exports = Stock = mongoose.model("Stock", StockSchema);