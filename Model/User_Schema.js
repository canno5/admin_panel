const { Schema, model } = require("mongoose");
const UserSchema = new Schema({

    prodname: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    stock: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        // lowercase: true
        
    },
    status: {
        type: String,
        required: true
    },
    fileImage: {
        type: String,
        require: true
    },
    breid: {
        type: String,
        require: true
    },
    breidContent: {
        type: String,
        require: true
    }

})

const Product = model("PRODUCTS", UserSchema);
module.exports = Product;