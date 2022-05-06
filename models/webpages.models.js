const { Schema, model } = require('mongoose');

const WebpageSchema = Schema({

    title:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },

    body:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },

    slug:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },

    site_id:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
        
    },
    is_active:{
        type: Boolean
    },
   
}, {
    timestamps:true
});

module.exports = model('Webpage', WebpageSchema );