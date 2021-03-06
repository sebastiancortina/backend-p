const joi = require('joi');

const bannerSchema = joi.object({
    id_page:  joi.string().required(),
    name: joi.string().required(),
    is_active: joi.boolean().required()
});

module.exports = { 
    bannerSchema
}