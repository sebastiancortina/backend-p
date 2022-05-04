const { validationResult } = require('express-validator');
const { response, request } = require('express');
const { bannerSchema } = require('../schemas/banner.schema');

const validarCampos = async (req = request , res =  response , next) => {
    try{
        
        await bannerSchema.validateAsync(req.body);
        next();
    } catch(err){
        return res.status(400).json(err);
    }
}

module.exports = {
    validarCampos
}