const { response, request } = require('express');
const {  pagecontentModelo } = require('../models/index.models');

// Peticion GET 
const pagecontentsGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, pagecontent ] = await Promise.all([
        pagecontentModelo.countDocuments(query),
        pagecontentModelo.find(query)
    ])

    res.status(201).json({
        total,
        pagecontent
    });
}

// Peticion PUT
const pagecontentsPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { site_id, ...data}  = req.body;

    const pagecontent = await pagecontentModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        id,
        pagecontent
    });
}

// Peticion POST 
const pagecontentsPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const pagecontent = new pagecontentModelo( body );
    await pagecontent.save(); 

    res.status(201).json({
        pagecontent
    });
}

// Peticion DELETE
const pagecontentsDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const pagecontent = await pagecontentModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'operacion exitosa',
        pagecontent
    });
}

// Peticion PATCH

const pagecontentsPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    pagecontentsGet,
    pagecontentsPut ,
    pagecontentsPost,
    pagecontentsDelete,
    pagecontentsPatch
}
