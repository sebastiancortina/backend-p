const { response, request } = require('express');
const { WebsitesModelo } = require('../models/index.models');


// Peticion GET - listo
const websiteGet = async (req, res = response) => {
    const query = { is_active: true };

    const [ total,  website ] = await Promise.all([
        WebsitesModelo.countDocuments(query),
        WebsitesModelo.find(query)
    ]);

    res.status(201).json({
        msg: 'Operacion exitosa',
        total,
        website
    });
}


// Peticion PUT - 
const websitePut = async(req = request, res = response) => {
    
    const { id } = req.params;
    const { site_id, ...data}  = req.body;

    const website = await WebsitesModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        msg: 'Operacion exitosa',
        id,
        website
    });
}

// Peticion POST  
const websitePost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const  website = new WebsitesModelo( body );
    await  website.save(); 

    res.status(201).json({
        msg: 'Operacion exitosa',
        website
    });
}

// Peticion DELETE
const websiteDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const  website = await WebsitesModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'Operacion exitosa',
        website
    });
}

// Peticion PATCH
const websitePatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    websiteGet,
    websitePut,
    websitePost,
    websiteDelete,
    websitePatch
}
