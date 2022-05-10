const { Schema, model } = require('mongoose');

const RolPermissionSchema = Schema({
    id_permission:{
        type: String,
        //objeto
    },
    id_rol:{
        type: String,
        //objeto
    },
    is_active:{
        type: Boolean
    },
}, {
    timestamps:true
});

module.exports = model(' RolPermission',  RolPermissionSchema);