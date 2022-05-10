const { response, request } = require('express');
const {  pageModelo } = require('../../models/models/index.models');

// Peticion GET 
const pagesGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, page ] = await Promise.all([
        pageModelo.countDocuments(query),
        pageModelo.find(query)
    ])

    res.status(201).json({
        total,
        page
    });
}

// Peticion PUT
const pagesPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { ...data}  = req.body;

    const page = await pageModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        id,
        page
    });
}

// Peticion POST 
const pagesPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const page = new pageModelo( body );
    await page.save(); 

    res.status(201).json({
        msg: 'operacion exitosa',
        page
    });
}

// Peticion DELETE
const pagesDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const page = await pageModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'operacion exitosa',
        page
    });
}

// Peticion PATCH

const pagesPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    pagesGet,
    pagesPut,
    pagesPost,
    pagesDelete,
    pagesPatch
    
}
