const { Schema, model } = require('mongoose');

const BannerSchema = Schema({
    _id:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },

    title:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },

    time:{
        type: Number,
        required: [true, 'el nombre es obligatorio']
    },

    quantity:{
        type: Number,
        required: [true, 'el nombre es obligatorio']
    },

    site_id:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    is_active:{
        type: Boolean
    },
    createdAt:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    updatedAt:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    __v:{
        type: Number
    }
});

module.exports = model('Banner', BannerSchema );