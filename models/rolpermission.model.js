const { Schema, model } = require('mongoose');

const RolPermissionSchema = Schema({
    id_rol:{
        type: Schema.ObjectId, ref: "Rol",
        //objeto
    },
    id_permission:{
        type: Schema.ObjectId, ref: "Permission",
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