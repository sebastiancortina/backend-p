const joi = require('joi');

const userSchema = joi.object({
    id_profile:  joi.string().required(),
    email: joi.string().required(),
    password: joi.string().required(),
    is_active: joi.boolean().required()
});

module.exports = { 
    userSchema
}