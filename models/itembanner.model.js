const { Schema, model } = require('mongoose');

const ItemBannerSchema = Schema({
    id_banner:{
        type: Schema.ObjectId, ref: "Banner",
        //objeto
    },
    name:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    url:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    text:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    weight:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    time:{
        type: Number,
        required: [true, 'el nombre es obligatorio']
    },
    img:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    is_active:{
        type: Boolean,
        required: [true, 'el nombre es obligatorio']
    },
}, {
    timestamps:true
});

module.exports = model('Itembanner', ItemBannerSchema );