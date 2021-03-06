const { Schema, model } = require('mongoose');

const BannerSchema = Schema({
    id_page:{
        type: Schema.ObjectId, ref: "Page",
        //objeto
    },
    name:{
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

module.exports = model('Banner', BannerSchema );