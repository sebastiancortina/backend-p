const joi = require('joi');

const footerSchema = joi.object({
    id_site: joi.string().required(),
    email: joi.string().required(),
    address: joi.string().required(),
    phone: joi.number().required(),
    is_active: joi.boolean().required()
});

module.exports = { 
    footerSchema
}