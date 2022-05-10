const { Schema, model } = require('mongoose');

const ItemBannerSchema = Schema({
    id_banner:{
        type: String,
        //objeto
    },
    name:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },
    url:{
        type: String,
    },
    text:{
        type: String,
    },
    weight:{
        type: String
    },
    time:{
        type: Number
    },
    img:{
        type: String,
    },
    is_active:{
        type: Boolean
    },
}, {
    timestamps:true
});

module.exports = model('ItemBanner', ItemBannerSchema );