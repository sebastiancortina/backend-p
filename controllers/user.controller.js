const { response, request } = require('express');
const {  usersModelo } = require('../models/index.models');

// Peticion GET 
const usersGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, user ] = await Promise.all([
        usersModelo.countDocuments(query),
        usersModelo.find(query).populate('id_profile')
    ])

    res.status(201).json({
        total,
        user
    });
}

// Peticion PUT
const usersPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { ...data}  = req.body;

    const user = await  usersModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        id,
        user
    });
}

// Peticion POST 
const usersPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const user = new  usersModelo( body );
    await user.save(); 

    res.status(201).json({
        msg: 'operacion exitosa',
        user
    });
}

// Peticion DELETE
const usersDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const user = await  usersModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'operacion exitosa',
        user
    });
}

// Peticion PATCH

const usersPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    usersGet,
    usersPut,
    usersPost,
    usersDelete
}