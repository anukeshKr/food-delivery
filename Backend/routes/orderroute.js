import express from 'express';
import { listOrders, placeorder, userorder, verifyOrder } from "../controllers/ordercontroller.js";
import authMiddleware from '../middleware/auth.js'



const orderRouter = express.Router();

orderRouter.post("/place",authMiddleware,placeorder);
orderRouter.post("/verify",verifyOrder);
orderRouter.post("/userorders",authMiddleware,userorder);
orderRouter.get("/list",listOrders);


export default orderRouter;