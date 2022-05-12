const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    id_profile:{
        type: Schema.ObjectId, ref: "Profile",
        //objeto
    },
    email:{
        type: String,
        required: [true, 'el nombre es obligatorio']
    },
    password:{
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

module.exports = model('User', UserSchema );