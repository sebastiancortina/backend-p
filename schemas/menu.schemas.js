const joi = require('joi');

const menuSchema = joi.object({
    title: joi.string().required(),
    slug: joi.string().required(),
    order: joi.number().required(),
    nivel: joi.number().required(),
    site_id: joi.string().required(),
    father: joi.string(),
    is_active: joi.boolean()
});

module.exports = { 
    menuSchema
}