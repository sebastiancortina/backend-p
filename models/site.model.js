const { Schema, model } = require('mongoose');

const SiteSchema = Schema({
    name:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    slogan:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    icon:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    is_active:{
        type: Boolean,
        required: [true, 'el nombre es obligatorio']
    },
}, {
    timestamps:true
});

module.exports = model('Site',  SiteSchema );