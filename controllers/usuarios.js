const { response } = require('express');

// Peticion GET
const usuariosGet = (req, res = response) => {
    const query = req.query;
    
    res.json({
        msg: 'get Api - controler',
        query
    });
}

// Peticion PUT
const usuariosPut = (req, res = response) => {
    const {id} = req.params;

    res.json({
        msg: 'put Api - controler',
        id
    });
}

// Peticion POST
const usuariosPost = (req, res = response) => {
    const { nombre, edad } = req.body;
    res.status(201).json({
        msg: 'post Api - controler',
        nombre,
        edad
    });
}

// Peticion DELETE
const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete Api - controler'
    });
}

// Peticion PATCH
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}
