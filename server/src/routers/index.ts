import express from "express";
import UserRouter from "../routers/user.router"
import RestaurantRouter from "../routers/restaurant.router"
import OrderRouter from "../routers/order.router"
const router = express.Router();

router.use("/user", UserRouter)
router.use("/restaurant", RestaurantRouter)
router.use("/order", OrderRouter)

export default router;