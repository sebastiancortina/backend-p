const { Schema, model } = require('mongoose');

const FooterSchema = Schema({
    id_site:{
        type: Schema.ObjectId, ref: "Site",
        //objeto
    },
    email:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    address:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    phone:{
        type: Number,
        required: [true, 'el nombre es obligatorio']
        
    },
    is_active:{
        type: Boolean,
        required: [true, 'el nombre es obligatorio']
    },
}, {
    timestamps:true
});

module.exports = model('Footer',  FooterSchema );