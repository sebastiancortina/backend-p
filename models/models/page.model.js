const { Schema, model } = require('mongoose');

const PageSchema = Schema({
    idSite:{
        type: String
        //objeto
    },
    name:{
        type: String
    },
    slug:{
        type: String
    },
    weight:{
        type: String
        
    },
    is_active:{
        type: Boolean
    },
}, {
    timestamps:true
});

module.exports = model('Page',  PageSchema );