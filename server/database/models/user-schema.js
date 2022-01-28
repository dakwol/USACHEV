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
        type: String
    }
}, {
        collection: 'swiper'
    })

module.exports = mongoose.model('swiper', userSchema)