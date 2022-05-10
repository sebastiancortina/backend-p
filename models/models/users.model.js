const { Schema, model } = require('mongoose');

const ItemBannerSchema = Schema({
    email:{
        type: String,
    },
    password:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },
    id_profile:{
        type: String,
        //objeto
    },
    is_active:{
        type: Boolean
    },
}, {
    timestamps:true
});

module.exports = model('ItemBanner', ItemBannerSchema );