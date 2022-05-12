const { response, request } = require('express');
const {  profileModelo } = require('../models/index.models');

// Peticion GET 
const profilesGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, profile ] = await Promise.all([
        profileModelo.countDocuments(query),
        profileModelo.find(query).populate('id_rol')
    ])

    res.status(201).json({
        total,
        profile
    });
}

// Peticion PUT
const profilesPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { ...data}  = req.body;

    const profile = await profileModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        id,
        profile
    });
}

// Peticion POST 
const profilesPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const profile = new profileModelo( body );
    await profile.save(); 

    res.status(201).json({
        msg: 'operacion exitosa',
        profile
    });
}

// Peticion DELETE
const profilesDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const profile = await profileModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'operacion exitosa',
        profile
    });
}

// Peticion PATCH

const rolsPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    profilesGet,
    profilesPut,
    profilesPost,
    profilesDelete 
}