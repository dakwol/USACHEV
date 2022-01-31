const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {
        type: String
    },
    model: {
        type: String
    },
    Img: {
        type: Array
    },
    info: {
        type: String
    },
    har: {
        type: Array
    },
}, {
        collection: 'swiper'
    })

module.exports = mongoose.model('swiper', userSchema)