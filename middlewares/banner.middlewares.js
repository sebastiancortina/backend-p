const { validationResult } = require('express-validator');
const { response, request } = require('express');
const { bannerSchema } = require('../schemas/banner.schema');
const {Banner} = require('../models/banner.models');
const {  BannerModelo } = require('../models/index.models');

const validarCampos = async (req = request , res =  response , next) => {
    try{
        
        await bannerSchema.validateAsync(req.body);
        next();
    } catch(err){
        return res.status(400).json(err);
    }
}

const existeId = async (req = request , res = response, next) => {


    const { id } = req.params;

    // Verifica si el banner existe
    const existebanner = await Banner.findById(id);
    if (!existebanner ){
        throw new Error(`El id no existe ${id}`);
    }
    
    next();
}

module.exports = {
    validarCampos,
    existeId
}