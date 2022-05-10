const { Schema, model } = require('mongoose');

const ProfileSchema = Schema({
    name:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },
    lastName:{
        type: String,
    },
    urlPhoto:{
        type: String,
    },
    phone:{
        type: String
    },
    address:{
        type: String
    },
    id_rol:{
        type: String,
    },
    is_active:{
        type: Boolean
    },
}, {
    timestamps:true
});

module.exports = model('Profile', ProfileSchema );