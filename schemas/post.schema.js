const joi = require('joi');

const postSchema = joi.object({
    id_page:  joi.string().required(),
    title: joi.string().required(),
    slug: joi.string().required(),
    body: joi.string().required(),
    author: joi.string().required(),
    publisher: joi.string().required(),
    is_active: joi.boolean().required()
});

module.exports = { 
    postSchema
}