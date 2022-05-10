const { Schema, model } = require('mongoose');

const RolSchema = Schema({
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

module.exports = model('ItemBanner', ItemBannerSchema );