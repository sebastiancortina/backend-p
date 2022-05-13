const joi = require('joi');

const pageContentSchema = joi.object({
    id_page: joi.string().required(),
    body: joi.string().required(),
    is_active: joi.boolean().required()
});

module.exports = { 
    pageContentSchema
}