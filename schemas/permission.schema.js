const joi = require('joi');

const permissionSchema = joi.object({
    name: joi.string().required(),
    is_active: joi.boolean().required()
});

module.exports = { 
    permissionSchema
}