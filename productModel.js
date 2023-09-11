const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: false
    },
    precio: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        default: 0
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
