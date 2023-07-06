const mongoose = require('mongoose');
const {Schema } = mongoose;


const schema = new Schema({
        email: {
            type: String,
            required: true
        },

        password:{
            type: String,
            required: true
        },

        phone:{
            type: Number,
            required: true
        },

        cPass: {
            type: String,
            required: true
        }
});

module.exports = mongoose.model('user', schema);