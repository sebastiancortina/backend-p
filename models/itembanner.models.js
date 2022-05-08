const { Schema, model } = require('mongoose');

const ItembannerSchema = Schema({
    title:{
        type: String
        //required: [true, 'el nombre es obligatorio']
    },
    image:{
        type: String
    },
    description:{
        type: String
    },
    banner_id:{  
        type: String
    },
    data_provider:{
        asset_id: {type: String},
        public_id: {type: String },
        version: {type: Number},
        version_id: { type: String},
        signature: {type: String},
        width:{type: Number},
        height:{type: Number},
        format:{type: String},
        resource_type:{type: String},
        created_at:{type: String},
        tags:[
            {type: String}
        ],
        bytes:{type: Number},
        type:{type: String},
        etag:{type: String},
        placeholder:{type: Boolean},
        url:{type: String},
        secure_url:{type: String},
        original_filename:{type: String},
        api_key:{type: String}

    },
    is_active:{
        type: Boolean
    },
}, {
    timestamps:true
});

module.exports = model('Itembanner', ItembannerSchema  );