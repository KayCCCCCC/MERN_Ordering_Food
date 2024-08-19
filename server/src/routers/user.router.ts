import express from "express";
import userController from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateUserRequest } from "../middlewares/validation";

const router = express.Router();
router.get("/get-info", jwtCheck, jwtParse, userController.getCurrentUser);
router.post("/create", jwtCheck, userController.createCurrentUser)
router.put("/update", jwtCheck, jwtParse, validateUserRequest, userController.updateCurrentUser)

export default router;