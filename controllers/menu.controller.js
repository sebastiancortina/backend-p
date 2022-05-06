const { response, request } = require('express');
const { MenuModelo } = require('../models/index.models');


// Peticion GET 
const menusGet = async (req, res = response) => {

    const query = { is_active: true };

    const [ total, menu ] = await Promise.all([
        MenuModelo.countDocuments(query),
        MenuModelo.find(query)
    ])

    res.status(201).json({
        total,
        menu
    });
}

// Peticion PUT 
const menusPut = async(req = request, res = response) => {

    const { id } = req.params;
    const { site_id, ...data}  = req.body;

    const menu = await MenuModelo.findByIdAndUpdate(id, data);

    res.status(200).json({
        id,
        menu
    });
}


// Peticion POST 
const menusPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const menu = new MenuModelo( body );
    await menu.save(); 

    res.status(201).json({
        menu
    });
}


// Peticion DELETE
const menusDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const menu = await MenuModelo.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        menu
    });
}

// Peticion PATCH
const menusPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    menusGet ,
    menusPut,
    menusPost,
    menusDelete,
  //  menusPatch
}