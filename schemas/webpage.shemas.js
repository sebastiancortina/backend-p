const joi = require('joi');

const webpageSchema = joi.object({
    title: joi.string().required(),
    body: joi.string().required(),
    slug: joi.string().required(),
    site_id: joi.string().required(),
    is_active: joi.boolean()
});

module.exports = { 
    webpageSchema
}