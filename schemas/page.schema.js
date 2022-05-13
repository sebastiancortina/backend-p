const joi = require('joi');

const pageSchema = joi.object({
    id_site:  joi.string().required(),
    name: joi.string().required(),
    slug: joi.string().required(),
    weight: joi.string().required(),
    is_active: joi.boolean().required()
});

module.exports = { 
    pageSchema
}