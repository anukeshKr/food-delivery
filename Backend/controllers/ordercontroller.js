// import { CurrencyCodes } from "validator/lib/isISO4217";
import orderModel from "../models/orderModel.js";
import usermodel from "../models/usermodel.js";
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// placing user order from frontend
const placeorder = async(req,res)=>{

    const frontend_url = 'http://localhost:5173'
    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amount:req.body.amount,
            address:req.body.address,
        })
        await newOrder.save();
        await usermodel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        const line_items = req.body.items.map((item)=>({
            price_data:{
                currency:"inr",
                product_data:{
                    name:item.name
                },
                unit_amount:item.price*100*80
            },
            quantity:item.quantity
        }))

        line_items.push({
            price_data:{
                currency:"inr",
                product_data:{
                    name:"Delivery Charges"
                },
                unit_amount:2*100*80
            },
            quantity:1
        })

        const session = await stripe.checkout.sessions.create({
            line_items:line_items,
            mode:'payment',
            success_url:`${frontend_url}/verify?sucess=true&orderId=${newOrder._id}`,
            cacel_url:`${frontend_url}/verify?sucess=false&orderId=${newOrder._id}`,
        })

        res.json({success:true,session_url:session.url})


    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


export {placeorder}