const { Schema, model } = require('mongoose');

const WebpageSchema = Schema({

    site_id:{ //
        type: String,  
    },
    name:{ //
        type: String,
    },
    slug:{ // 
        type: String
    },
    weight:{ // 
        type: String
    },
    is_active:{ //
        type: Boolean
    }

}, {
    timestamps:true
});

module.exports = model('Webpage', WebpageSchema );