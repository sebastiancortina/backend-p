const { response, request } = require('express');
const Banner = require('../models/banner.models');


// Peticion GET
const bannersGet = (req, res = response) => {
    const query = req.query;
    res.status(201).json({
        query
    });
}

// Peticion PUT
const bannersPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { site_id, ...data}  = req.body;

    const banner = await Banner.findByIdAndUpdate(id, data);

    res.json({
        id,
        data
    });
}

// Peticion POST - listo
const bannersPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const banner = new Banner( body );
    await banner.save(); 

    res.status(201).json({
        banner
    });
}

// Peticion DELETE
const bannersDelete = (req = request, res = response) => {
    res.json({
        msg: 'delete Api - controler'
    });
}

// Peticion PATCH
const bannersPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    bannersGet,
    bannersPut,
    bannersPost,
    bannersDelete,
    bannersPatch
}
