const { response, request } = require('express');
const {  rolModelo } = require('../models/index.models');

// Peticion GET 
const rolsGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, rol ] = await Promise.all([
        rolModelo.countDocuments(query),
        rolModelo.find(query)
    ])

    res.status(201).json({
        total,
        rol
    });
}

// Peticion PUT
const rolsPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { ...data}  = req.body;

    const rol = await rolModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        id,
        rol
    });
}

// Peticion POST 
const rolsPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const rol = new rolModelo( body );
    await rol.save(); 

    res.status(201).json({
        msg: 'operacion exitosa',
        rol
    });
}

// Peticion DELETE
const rolsDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const rol = await rolModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'operacion exitosa',
        rol
    });
}

// Peticion PATCH

const rolsPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    rolsGet,
    rolsPut,
    rolsPost,
    rolsDelete 
}