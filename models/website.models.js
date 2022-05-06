const { Schema, model } = require('mongoose');

const WebsiteSchema = Schema({
    _id:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },

    idSite:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },
    title:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },

    slogan:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },

    phone:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },
    email:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },
    footer:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },
    domain:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },
    color_schemes:{
        primary: {type: String},
        secondary: {type: String },
        hover: {type: String},
        link_visited: { type: String},
        background_primary: {type: String},
        background_secondary:{type: String}
    },
    social_links:[
        {
            id: {type: Number},
            title: {type: String },
            text: {type: String},
            icon: { type: String},
            url: {type: String},
            is_active:{type: Boolean}
        }
    ],
    is_active:{
        type: Boolean
    }
},{
    timestamps:true
});

module.exports = model('Website', WebsiteSchema );