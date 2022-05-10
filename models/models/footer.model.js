const { Schema, model } = require('mongoose');

const FooterSchema = Schema({
    idSite:{
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
        type: String
        
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

module.exports = model('Page',  PageSchema );