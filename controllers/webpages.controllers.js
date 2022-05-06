const { response, request } = require('express');
const { WebpagesModelo } = require('../models/index.models');


// Peticion GET - listo
const webpagesGet = async (req, res = response) => {
    const query = { is_active: true };

    const [ total,  webpage ] = await Promise.all([
        WebpagesModelo.countDocuments(query),
        WebpagesModelo.find(query)
    ]);

    res.status(201).json({
        msg: 'Operacion exitosa',
        total,
        webpage
    });
}


// Peticion PUT - 
const webpagesPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { site_id, ...data}  = req.body;

    const  webpage = await WebpagesModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        msg: 'Operacion exitosa',
        id,
        webpage
    });
}

// Peticion POST  
const webpagesPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const  webpage = new WebpagesModelo( body );
    await  webpage.save(); 

    res.status(201).json({
        msg: 'Operacion exitosa',
        webpage
    });
}

// Peticion DELETE
const webpagesDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const  webpage = await WebpagesModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'Operacion exitosa',
        webpage
    });
}

// Peticion PATCH
const webpagesPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    webpagesGet,
    webpagesPut,
    webpagesPost,
    webpagesDelete,
    webpagesPatch
}
