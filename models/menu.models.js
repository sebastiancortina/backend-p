const { Schema, model } = require('mongoose');

const MenuSchema = Schema({
    title:{
        type: String
    },
    slug:{
        type: String
    },
    order:{
        type: Number,
    },
    nivel:{
        type: Number,
    },
    site_id:{
        type: String
    },
    father:{
        type: String
    },
    is_active:{
        type: Boolean
    }
},{
    timestamps:true
});

module.exports = model('Menu', MenuSchema );