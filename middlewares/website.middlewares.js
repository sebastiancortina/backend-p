const { validationResult } = require('express-validator');
const { response, request } = require('express');
const { websiteSchema } = require('../schemas/website.shemas');
//const { WebpagesModelo } = require('../models/index.models');

const validarCampos = async (req = request , res =  response , next) => {
    try{
        await websiteSchema.validateAsync(req.body);
        next();
    } catch(err){
        return res.status(400).json(err);
    }
}
/*
const existeId = async (req = request , res = response) => {

    const { id } = req.params;

    // Verifica si el banner existe
    const existebanner = await WebpagesModelo.findById(id);
    if (!existebanner ){
        throw new Error(`El id no existe ${id}`);
    }
    
    next();
}*/

module.exports = {
    validarCampos
}