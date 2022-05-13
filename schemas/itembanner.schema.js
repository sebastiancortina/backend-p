const joi = require('joi');

const ItembannerSchema = joi.object({
    id_banner: joi.string().required(),
    name: joi.string().required(),
    url: joi.string().required(),
    text: joi.string().required(),
    image: joi.string().required(),
    time: joi.number().required(),
    weight: joi.string().required(),
    is_active: joi.boolean().required()
});

module.exports = { 
    ItembannerSchema
}