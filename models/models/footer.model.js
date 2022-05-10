const { Schema, model } = require('mongoose');

const FooterSchema = Schema({
    id_site:{
        type: String
        //objeto
    },
    email:{
        type: String
    },
    address:{
        type: String
    },
    phone:{
        type: Number
        
    },
    socialNetwork:{
        type: String
    },
    is_active:{
        type: Boolean
    },
}, {
    timestamps:true
});

module.exports = model('Footer',  FooterSchema );