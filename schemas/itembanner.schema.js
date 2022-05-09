const joi = require('joi');

const ItembannerSchema = joi.object({
    title: joi.string().required(),
    image: joi.string().required(),
    description: joi.string().required(),
    banner_id: joi.string().required(),
    data_provider:joi.object( {
        asset_id:  joi.string().required(),
        public_id:  joi.string().required(),
        version:  joi.number().required(),
        version_id:  joi.string().required(),
        signature:  joi.string().required(),
        width:  joi.number().required(),
        height:  joi.number().required(),
        format:  joi.string().required(),
        resource_type:  joi.string().required(),
        created_at:  joi.string().required(),
        tags:  joi.array().items(joi.string()),
        bytes:  joi.number().required(),
        type: joi.string().required(),
        etag: joi.string().required(),
        placeholder:joi.boolean().required(),
        url: joi.string().required(),
        secure_url: joi.string().required(),
        original_filename: joi.string().required(),
        api_key: joi.string().required()
    }).required(),
    is_active: joi.boolean(),
});

module.exports = { 
    ItembannerSchema
}