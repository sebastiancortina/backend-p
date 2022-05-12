const { Schema, model } = require('mongoose');

const PageSchema = Schema({
    id_Site:{
        type: String,
        required: [true, 'el nombre es obligatorio']
        //objeto
    },
    name:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    slug:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    weight:{
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

module.exports = model('Page',  PageSchema );