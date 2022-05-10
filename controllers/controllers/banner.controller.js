const { response, request } = require('express');
const {  bannerModelo } = require('../../models/models/index.models');

// Peticion GET 
const bannersGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, banner ] = await Promise.all([
        bannerModelo.countDocuments(query),
        bannerModelo.find(query)
    ])

    res.status(201).json({
        total,
        banner
    });
}

// Peticion PUT
const bannersPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { site_id, ...data}  = req.body;

    const banner = await bannerModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        id,
        banner
    });
}

// Peticion POST 
const bannersPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const banner = new bannerModelo( body );
    await banner.save(); 

    res.status(201).json({
        banner
    });
}

// Peticion DELETE
const bannersDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const banner = await bannerModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'operacion exitosa',
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
