const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Product = new Schema ({
    name: {
        type: String,
    },
    colour:{
        type: String,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
    },
    size: {
        type: String,
    },
    src: {
        type: String,
    }
});
module.exports = mongoose.model('Product', Product )