const { Schema, model } = require('mongoose');

const BannerSchema = Schema({
    title:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },

    time:{
        type: Number,
        //required: [true, 'el nombre es obligatorio']
    },

    quantity:{
        type: Number,
        //required: [true, 'el nombre es obligatorio']
    },
    site_id:{
        $oid: {
            type: String,
            //required: [true, 'el nombre es obligatorio']
        }
    },
    is_active:{
        type: Boolean
    },
}, {
    timestamps:true
});

module.exports = model('banner', BannerSchema );