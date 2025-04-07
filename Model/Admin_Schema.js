const { Schema, model } = require("mongoose");
const jwt = require("jsonwebtoken");
const AdminSchema = new Schema({
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
    }
});
AdminSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email,
        }, process.env.SECRET_KEY, {
            expiresIn: "30d"
        })
    } catch (error) {
        console.log(error);
    }
}
const ADMIN = model("ADMINS", AdminSchema);
module.exports = ADMIN;