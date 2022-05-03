const { Schema, model } = require('mongoose');

const WebsiteSchema = Schema({
    _id:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },

    idSite:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },

    slogan:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },

    phone:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    email:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    footer:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    domain:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    domain:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    color_schemes:{
        primary: {type: String},
        secondary: {type: String },
        hover: {type: String},
        link_visited: { type: String},
        background_primary: {type: String},
        background_secondary:{type: String}
    },
    social_links:{
       // en espera
    },
 
    is_active:{
        // en espera
        type: Boolean
    },
    createdAt:{
        // en espera
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