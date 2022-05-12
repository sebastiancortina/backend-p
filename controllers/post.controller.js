const { response, request } = require('express');
const {  postModelo } = require('../models/index.models');

// Peticion GET 
const postsGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, post ] = await Promise.all([
        postModelo.countDocuments(query),
        postModelo.find(query).populate('id_page')
    ])

    res.status(201).json({
        total,
        post
    });
}

// Peticion PUT
const postsPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { ...data}  = req.body;

    const post = await postModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        id,
        post
    });
}

// Peticion POST 
const postsPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const post = new postModelo( body );
    await post.save(); 

    res.status(201).json({
        msg: 'operacion exitosa',
        post
    });
}

// Peticion DELETE
const postsDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const post = await postModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'operacion exitosa',
        post
    });
}

// Peticion PATCH

const postsPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    postsGet,
    postsPut,
    postsPost,
    postsDelete,
    postsPatch 
    
}
