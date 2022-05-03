const joi = require('joi');

const bannerSchema = joi.object({
    title: joi.string().required(),
    time: joi.number().required(),
    quantity: joi.number().required(),
    site_id: {
        $oid: joi.string().required()
    },
    is_active: joi.boolean()
});

module.exports = { 
    bannerSchema
}