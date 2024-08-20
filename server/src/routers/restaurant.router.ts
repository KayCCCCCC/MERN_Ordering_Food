import express, { Request } from "express";
import multer from "multer";
import restaurantController from "../controllers/restaurant.controller";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import { validateMyRestaurantRequest } from "../middlewares/validation";
import { param } from "express-validator";

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024, //5mb
    }
})
// My restaurant
router.get("/my-order", jwtCheck, jwtParse, restaurantController.getMyRestaurantOrders);
router.patch("/my-order/:orderId/status", jwtCheck, jwtParse, restaurantController.updateOrderStatus);
router.get("/my-get-info", jwtCheck, jwtParse, restaurantController.getMyRestaurant);
router.post("/my-create", upload.single("imageFile"), validateMyRestaurantRequest, jwtCheck, jwtParse, restaurantController.createRestaurant)
router.put("/my-update", upload.single("imageFile"), validateMyRestaurantRequest, jwtCheck, jwtParse, restaurantController.updateMyRestaurant);

// Restaurant
router.get("/get/:restaurantId", param("restaurantId").isString().trim().notEmpty().withMessage("RestaurantId paramenter must be a valid string"), restaurantController.getRestaurant);
router.get("/search/:city", param("city").isString().trim().notEmpty().withMessage("City paramenter must be a valid string"), restaurantController.searchRestaurant);

export default router;