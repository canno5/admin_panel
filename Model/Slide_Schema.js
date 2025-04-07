const {Schema, model} = require("mongoose");
const SlderSchema = new Schema({
    title:{
        type: String, 
        required: true
    },
    type:{
        type: String, 
        required: true
    },
    status:{
        type: String, 
        required: true
    },
    update:{
        type: String, 
        required: true
    },
    image:{
        type: String, 
        required: true
    },
    description:{
        type: String, 
        required: true
    }
})
const Sliders = model("SLIDERS", SlderSchema);
module.exports = Sliders;


