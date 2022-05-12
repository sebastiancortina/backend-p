const { Schema, model } = require('mongoose');

const RolPermissionSchema = Schema({
    id_permission:{
        type: String,
        required: [true, 'el nombre es obligatorio']
        //objeto
    },
    id_rol:{
        type: String,
        required: [true, 'el nombre es obligatorio']
        //objeto
    },
    is_active:{
        type: Boolean,
        required: [true, 'el nombre es obligatorio']
    },
}, {
    timestamps:true
});

module.exports = model(' RolPermission',  RolPermissionSchema);