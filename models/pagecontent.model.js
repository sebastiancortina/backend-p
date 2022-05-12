const { Schema, model } = require('mongoose');

const pageContentSchema = Schema({
    id_page:{
        type: String,
        required: [true, 'el nombre es obligatorio']
        //objeto
    },
    body:{
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

module.exports = model('PageContent', pageContentSchema );