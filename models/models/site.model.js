const { Schema, model } = require('mongoose');

const SiteSchema = Schema({
    name:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    slogan:{
        type: Number,
        required: [true, 'el nombre es obligatorio']
    },

    icon:{
        type: Number,
        required: [true, 'el nombre es obligatorio']
    },
    is_active:{
        type: Boolean
    },
}, {
    timestamps:true
});

module.exports = model('Site',  SiteSchema );