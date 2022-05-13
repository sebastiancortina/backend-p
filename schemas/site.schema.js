const joi = require('joi');

const siteSchema = joi.object({
    name: joi.string().required(),
    slogan: joi.string().required(),
    icon: joi.string().required(),
    is_active: joi.boolean().required()
});

module.exports = { 
    siteSchema
}