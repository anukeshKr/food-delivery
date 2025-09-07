import express from "express";
import { addToCart,removeItemsfromUser,getUserCartData } from "../controllers/cartcontroller.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter  = express.Router()

cartRouter.post("/add",authMiddleware,addToCart)
cartRouter.post("/remove",authMiddleware,removeItemsfromUser)
cartRouter.post("/get",authMiddleware,getUserCartData)


export default cartRouter;