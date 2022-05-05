const { response, request } = require('express');
const Banner = require('../models/banner.models');


// Peticion GET - listo
const bannersGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, banner ] = await Promise.all([
        Banner.countDocuments(query),
        Banner.find(query)
    ])

    res.status(201).json({
        total,
        banner
    });
}

// Peticion PUT - listo
const bannersPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { site_id, ...data}  = req.body;

    const banner = await Banner.findByIdAndUpdate(id, data);

    res.status(200).json({
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
const bannersDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const banner = await Banner.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'delete Api - controler',
        banner
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
