const { response, request } = require('express');
const {   permissionModelo } = require('../models/index.models');

// Peticion GET 
const permissionsGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, permission ] = await Promise.all([
        permissionModelo.countDocuments(query),
        permissionModelo.find(query)
    ])

    res.status(201).json({
        total,
        permission
    });
}

// Peticion PUT
const permissionsPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { ...data}  = req.body;

    const permission = await  permissionModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        id,
        permission
    });
}

// Peticion POST 
const permissionsPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const permission = new  permissionModelo( body );
    await permission.save(); 

    res.status(201).json({
        msg: 'operacion exitosa',
        permission
    });
}

// Peticion DELETE
const permissionsDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const permission = await  permissionModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'operacion exitosa',
        permission
    });
}

// Peticion PATCH

const permissionsPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    permissionsGet,
    permissionsPut,
    permissionsPost,
    permissionsDelete
}