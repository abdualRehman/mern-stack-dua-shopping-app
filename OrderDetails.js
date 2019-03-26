const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Orders = new Schema ({
    fname: {
        type: String,
    },
    lname:{
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    carts:{
        type:Array,
    },
    message:{
        type: String,
    }
});
module.exports = mongoose.model('Orders', Orders )