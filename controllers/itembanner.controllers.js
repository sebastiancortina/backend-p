const { response, request } = require('express');
const { ItembannerSchema } = require('../models/index.models');

// Peticion GET - listo
const itembannerteGet = async (req, res = response) => {
    const query = { is_active: true };

    const [ total,  itembanner ] = await Promise.all([
        ItembannerSchema.countDocuments(query),
        ItembannerSchema.find(query)
    ]);

    res.status(201).json({
        msg: 'Operacion exitosa',
        total,
        itembanner
    });
}

// Peticion PUT 
const itembannerPut = async(req = request, res = response) => {
    
    const { id } = req.params;
    const { site_id, ...data}  = req.body;
    
    const itembanner = await ItembannerSchema.findByIdAndUpdate(id, data);

    res.status(200).json({
        msg: 'Operacion exitosa',
        id,
        itembanner
    });
}

// Peticion POST - listo
const itembannerPost = async (req = request, res = response) => {

    // Permite guardar los datos
    const body  = req.body;
    const  itembanner = new ItembannerSchema( body );
    await  itembanner.save(); 

    res.status(201).json({
        msg: 'Operacion exitosa',
        itembanner
    });
}

// Peticion DELETE - listo
const itembannerDelete = async (req = request, res = response) => {
    const { id } = req.params;

    const  itembanner = await ItembannerSchema.findByIdAndUpdate(id, {is_active: false})

    res.status(200).json({
        msg: 'Operacion exitosa',
        itembanner
    });
}

// Peticion PATCH
const itembannerPatch = (req = request, res = response) => {
    res.json({
        msg: 'patch Api - controler'
    });
}

module.exports = {
    itembannerteGet,
    itembannerPut,
    itembannerPost,
    itembannerDelete,
    itembannerPatch
}
