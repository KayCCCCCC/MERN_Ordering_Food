import express from "express";
import { jwtCheck, jwtParse } from "../middlewares/auth";
import orderController from "../controllers/order.controller";

const router = express.Router();

router.get("/get-order", jwtCheck, jwtParse, orderController.getMyOrders);
router.post("/checkout/create-checkout-session", jwtCheck, jwtParse, orderController.createCheckoutSession);
router.post("/checkout/webhook", orderController.stripeWebhookHandler);

export default router;