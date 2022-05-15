const joi = require('joi');

const rolPermissionSchema = joi.object({
    id_rol:  joi.string().required(),
    id_permission: joi.string().required(),
    is_active: joi.boolean().required()
});

module.exports = { 
    rolPermissionSchema
}