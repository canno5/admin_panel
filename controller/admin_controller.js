const ADMIN = require("../Model/Admin_Schema");
const bcrypt = require("bcrypt");
const Product = require("../Model/User_Schema");
const Catagorys = require("../Model/Catagory_Schema");
const Sliders = require("../Model/Slide_Schema");

const home = async (req, res) => {
    res.status(200).json({ message: "Home Page" });
}
const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        // res.status(200).json({msg: userData});
        res.status(200).json({ userData });


    } catch (err) {
        console.log("error from the user route " + err);
    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const data = await  ADMIN.findOne({email});
        if (!data) {
            return res.status(422).json({msg: "User Not Exist"});
        } else {
           
            const isMatch = await bcrypt.compare(password, data.password);
            if (email === data.email && isMatch) {
                const token = await data.generateToken();
                // console.log(token);
                res.status(201).json({msg: "Welcome to Admin Sucessfully Login",
                    userToken: token,
                    userId: data._id.toString()
                });
            } else {
                res.status(401).json({msg: "Invalid Credentails"});
            }
        }


    } catch (err) {
        console.log("The Err " + err);
    }
}

const Procuct = async (req, res) => {
    try {
        const bodyData = req.body;
        const data = await Product.create(bodyData);
        console.log(data)
        res.status(201).json({ message: "data is add sucessfully" });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const Catagory = async (req, res) => {
    try {
        const bodyData = req.body;
        const data = await Catagorys.create(bodyData);
        console.log(data)
        res.status(201).json({ message: "data is add sucessfully" });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const Slider = async (req, res) => {
    try {
        const bodyData = req.body;
        const data = await Sliders.create(bodyData);
        console.log(data)
        res.status(200).json({ message: "data is add sucessfully" });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const getAllProcuct = async (req, res) => {
    try {
        const data = await Product.find();
        res.status(200).json({ data });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}
const getAllCatagory = async (req, res) => {
    try {
        // const data  = await Product.find().select({_id: 0});
        const categories = await Catagorys.find();
        res.status(200).json({ status: "sucess", categories });
     

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}
const getAllSlider = async (req, res) => {
    try {
        // const data  = await Product.find().select({_id: 0});
        const data = await Sliders.find();
        // console.log(data)
        // res.status(201).json({message: "sucess", data});
        res.status(201).json({data});

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const deleteProduct = async (req, res) => {

    try {
        const id = req.params.id;
        await Product.deleteOne({ _id: id });
        res.status(200).json({ message: "delete sucessfully data" });
        // console.log(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}


const deleteCatagory = async (req, res) => {

    try {
        const id = req.params.id;
        await Catagorys.deleteOne({ _id: id });
        res.status(200).json({ message: "delete sucessfully data" });
        // console.log(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}
const deleteSlider = async (req, res) => {

    try {
        const id = req.params.id;
        await Sliders.deleteOne({ _id: id });
        res.status(200).json({ message: "delete sucessfully data" });
        // console.log(data);
    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const getSingleUser = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await Product.findOne({ _id });
        res.status(200).json({ data });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const getPrductOneCatagory = async (req,res)=>{
    let type = req.params.type;
    type = type.replace(type[0], type[0].toUpperCase());
    const data = await Product.find({type:type});
    res.status(200).json({ data });

}
const getSingleCatagory = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await Catagorys.findOne({ _id });
        res.status(200).json({ data });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const getSingleSlider = async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await Sliders.findOne({ _id });
        res.status(200).json({ data });

    } catch (err) {
        console.log(err);
        res.status(404).json({ message: err });
    }
}

const UpdateProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const bodyData = req.body;
        await Product.updateOne({ _id: _id }, { $set: bodyData });
        res.status(201).json({ message: "Update Sucessfully" });

    } catch (err) {
        res.status(404).json({ message: err });
    }
}

const UpdateCatagory = async (req, res) => {
    try {
        const _id = req.params.id;
        const bodyData = req.body;
        await Catagorys.updateOne({ _id: _id }, { $set: bodyData });
        res.status(201).json({ message: "Update Sucessfully" });

    } catch (err) {
        res.status(404).json({ message: err });
    }
}
const updateSlider = async (req, res) => {
    try {
        const _id = req.params.id;
        const bodyData = req.body;
        const data = await Sliders.updateOne({ _id }, { $set: bodyData });
        console.log(data);
        res.status(201).json({ message: "Update Sucessfully" });

    } catch (err) {
        res.status(404).json({ message: err });
    }
}

module.exports = { home, user, login, Procuct, getAllProcuct, deleteProduct, getSingleUser, UpdateProduct, Catagory, getAllCatagory, deleteCatagory, getSingleCatagory, UpdateCatagory, Slider, getAllSlider, deleteSlider, getSingleCatagory, getSingleSlider, updateSlider, getPrductOneCatagory };