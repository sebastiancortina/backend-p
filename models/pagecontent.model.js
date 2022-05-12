const { Schema, model } = require('mongoose');

const pageContentSchema = Schema({
    id_page:{
        type: Schema.ObjectId, ref: "Page",
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