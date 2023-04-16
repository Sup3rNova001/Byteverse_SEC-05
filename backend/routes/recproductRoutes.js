import express from "express";
const router = express.Router();

import { getRecProducts } from "../controllers/recproductController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getRecProducts).post(protect, admin, getRecProducts);

export default router;
