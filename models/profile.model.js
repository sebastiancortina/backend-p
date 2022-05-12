const { Schema, model } = require('mongoose');

const ProfileSchema = Schema({
    id_rol:{
        type: Schema.ObjectId, ref: "Rol",
    },
    name:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    lastName:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    urlPhoto:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    phone:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    address:{
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

module.exports = model('Profile', ProfileSchema );