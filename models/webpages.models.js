const { Schema, model } = require('mongoose');

const WebpageSchema = Schema({
    _id:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },

    title:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },

    body:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    slug:{
        type: String,
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

module.exports = model('Webpage', WebpageSchema );