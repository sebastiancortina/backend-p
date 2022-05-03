const { Schema, model } = require('mongoose');

const MenuSchema = Schema({
   

    title:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },

    slug:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },

    order:{
        type: Number,
        required: [true, 'el nombre es obligatorio']
    },

    nivel:{
        type: Number,
        required: [true, 'el nombre es obligatorio']
    },
    site_id:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    father:{
        type: Boolean
    },
    father:{
        type: Boolean
    },
    is_active:{
        type: Boolean
    },
    createdAt:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
   
});

module.exports = model('Menu', MenuSchema );