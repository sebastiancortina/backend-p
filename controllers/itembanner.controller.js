const { response, request } = require('express');
const {  itembannerModelo } = require('../models/index.models');

// Peticion GET 
const itembannersGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, itembanner ] = await Promise.all([
        itembannerModelo.countDocuments(query),
        itembannerModelo.find(query)
    ])

    res.status(201).json({
        total,
        itembanner
    });
}

// Peticion PUT
const itembannersPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { ...data}  = req.body;

    const itembanner = await itembannerModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        id,
        itembanner
    });
}

// Peticion POST 
const itembannersPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const itembanner = new itembannerModelo( body );
    await itembanner.save(); 

    res.status(201).json({
        msg: 'operacion exitosa',
        itembanner
    });
}

// Peticion DELETE
const itembannersDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const itembanner = await itembannerModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'operacion exitosa',
        itembanner
    });
}

// Peticion PATCH

const itembannersPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    itembannersGet,
    itembannersPut,
    itembannersPost,
    itembannersDelete,
    itembannersPatch
}
