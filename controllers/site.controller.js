const { response, request } = require('express');
const {  siteModelo } = require('../models/index.models');

// Peticion GET 
const sitesGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, site ] = await Promise.all([
        siteModelo.countDocuments(query),
        siteModelo.find(query)
    ])

    res.status(201).json({
        total,
        site
    });
}

// Peticion PUT
const sitesPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { ...data}  = req.body;

    const site = await siteModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        id,
        site
    });
}

// Peticion POST 
const sitesPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const site = new siteModelo( body );
    await site.save(); 

    res.status(201).json({
        msg: 'operacion exitosa',
        site
    });
}

// Peticion DELETE
const sitesDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const site = await siteModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'operacion exitosa',
        site
    });
}

// Peticion PATCH

const sitesPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    sitesGet,
    sitesPut,
    sitesPost,
    sitesDelete
}