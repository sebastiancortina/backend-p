//const { validationResult } = require('express-validator');
const { response, request } = require('express');
const { rolPermissionSchema } = require('../schemas/rolPermission.schema');
//const {Banner} = require('../models/banner.models');
//const {  BannerModelo } = require('../models/index.models');

const validarCampos = async (req = request , res =  response , next) => {
    try{
        await rolPermissionSchema.validateAsync(req.body);
        next();
    } catch(err){
        return res.status(400).json(err);
    }
}

module.exports = [
    validarCampos
]