import foodModel from "../models/foodmodel.js";
import fs from "fs"

// add food items

const addFood = async(req,res)=>{

    let image_filename = `${req.file.filename}`;

    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        category:req.body.category,
        image:image_filename
    })
    try {
        await food.save();
        res.json({ success: true, message: "food added" })
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "error" }) 
}

}

// all food_list

const listfoods = async(req,res)=>{
    try {
        const foods = await foodModel.find({}, { _id: 1, name: 1, description: 1, price: 1, image: 1, category: 1 });
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error})
    }
}

// remove food item

const removefoods = async(req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addFood,listfoods,removefoods}