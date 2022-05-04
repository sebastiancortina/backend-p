const { Schema, model, mongoose } = require('mongoose');

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
        type: mongoose.Schema.Types.ObjectId,ref:'Post'
    },
    is_active:{
        type: Boolean
    },
}, {
    timestamps:true
});

module.exports = model('Banner', BannerSchema );