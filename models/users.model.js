const { Schema, model } = require('mongoose');

const ItemBannerSchema = Schema({
    email:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    password:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    id_profile:{
        type: String,
        required: [true, 'el nombre es obligatorio']
        //objeto
    },
    is_active:{
        type: Boolean,
        required: [true, 'el nombre es obligatorio']
    },
}, {
    timestamps:true
});

module.exports = model('ItemBanner', ItemBannerSchema );