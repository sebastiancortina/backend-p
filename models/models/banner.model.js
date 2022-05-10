const { Schema, model } = require('mongoose');

const BannerSchema = Schema({
    id_page:{
        type: String,
        //objeto
    },
    name:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },
    is_active:{
        type: Boolean
    },
}, {
    timestamps:true
});

module.exports = model('Banner', BannerSchema );