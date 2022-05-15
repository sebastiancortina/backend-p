const joi = require('joi');

const rolSchema = joi.object({
    name: joi.string().required(),
    is_active: joi.boolean().required()
});

module.exports = { 
    rolSchema
}