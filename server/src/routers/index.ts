import express from "express";
import UserRouter from "../routers/user.router"
const router = express.Router();

router.use("/user", UserRouter)

export default router;