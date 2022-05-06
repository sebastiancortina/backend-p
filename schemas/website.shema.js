const joi = require('joi');

const websiteSchema = joi.object({
    idSite: joi.string().required(),
    title: joi.string().required(),
    slogan: joi.string().required(),
    phone: joi.string().required(),
    email: joi.string().required(),
    footer: joi.string().required(),
    domain: joi.string().required(),
    site_id: joi.string().required(),
    color_schemes:{
        primary: joi.string().required(),
        secondary: joi.string().required(),
        hover: joi.string().required(),
        link_visited: joi.string().required(),
        background_primary: joi.string().required(),
        background_secondary: joi.string().required()
    },
    social_links:[
        {
            id: joi.string().required(),
            title:  joi.string().required(),
            text: joi.string().required(),
            icon: joi.string().required(),
            url: joi.string().required(),
            is_active: joi.boolean().required()
        }
    ],
    is_active: joi.boolean(),
});

module.exports = { 
    webpageSchema
}