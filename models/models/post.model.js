const { Schema, model } = require('mongoose');

const PostSchema = Schema({
    title:{
        type: String,
        //required: [true, 'el nombre es obligatorio']
    },
    id_Page:{
        type: String
    },
    slog:{
        type: String
        //required: [true, 'el nombre es obligatorio']
    },
    body:{
        type: String
        //required: [true, 'el nombre es obligatorio']
    },
    author:{
        type: String
        //required: [true, 'el nombre es obligatorio']
    },
    publisher:{
        type: String
    },
    is_active:{
        type: Boolean
    },
}, {
    timestamps:true
});

module.exports = model('Post', PostSchema );