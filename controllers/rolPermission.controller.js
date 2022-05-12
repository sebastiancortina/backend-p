const { response, request } = require('express');
const {  rolPermissionModelo } = require('../models/index.models');

// Peticion GET 
const rolPermissionsGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, rolPermission ] = await Promise.all([
        rolPermissionModelo.countDocuments(query),
        rolPermissionModelo.find(query)
        .populate('id_rol')
        .populate('id_permission')
    ])

    res.status(201).json({
        total,
        rolPermission
    });
}

// Peticion PUT
const rolPermissionsPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { ...data}  = req.body;

    const rolPermission = await  rolPermissionModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        id,
        rolPermission
    });
}

// Peticion POST 
const rolPermissionsPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const rolPermission = new  rolPermissionModelo( body );
    await rolPermission.save(); 

    res.status(201).json({
        msg: 'operacion exitosa',
        rolPermission
    });
}

// Peticion DELETE
const rolPermissionsDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const rolPermission = await  rolPermissionModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'operacion exitosa',
        rolPermission
    });
}

// Peticion PATCH

const rolPermissionsPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    rolPermissionsGet,
    rolPermissionsPut,
    rolPermissionsPost,
    rolPermissionsDelete
}