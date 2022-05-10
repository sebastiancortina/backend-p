const { Schema, model } = require('mongoose');

const pageContentSchema = Schema({
    id_page:{
        type: String,
        //objeto
    },
    body:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },
    is_active:{
        type: Boolean
    },
}, {
    timestamps:true
});

module.exports = model('PageContent', pageContentSchema );