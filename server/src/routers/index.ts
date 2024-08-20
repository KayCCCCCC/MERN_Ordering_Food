import express from "express";
import UserRouter from "../routers/user.router"
import RestaurantRouter from "../routers/restaurant.router"
const router = express.Router();

router.use("/user", UserRouter)
router.use("/restaurant", RestaurantRouter)

export default router;