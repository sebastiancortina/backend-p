const { response, request } = require('express');
const {  footerModelo } = require('../../models/models/index.models');

// Peticion GET 
const footersGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, footer ] = await Promise.all([
        footerModelo.countDocuments(query),
        footerModelo.find(query)
    ])

    res.status(201).json({
        total,
        footer
    });
}

// Peticion PUT
const footersPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { site_id, ...data}  = req.body;

    const footer = await footerModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        id,
        footer
    });
}

// Peticion POST 
const footersPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const footer = new footerModelo( body );
    await footer.save(); 

    res.status(201).json({
        footer
    });
}

// Peticion DELETE
const footersDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const footer = await footerModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'operacion exitosa',
        footer
    });
}

// Peticion PATCH

const footersPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    footersGet,
    footersPut,
    footersPost,
    footersDelete,
    footersPatch
}