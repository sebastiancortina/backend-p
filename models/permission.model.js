const { Schema, model } = require('mongoose');

const PermissionSchema = Schema({
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

module.exports = model('Permission', PermissionSchema);