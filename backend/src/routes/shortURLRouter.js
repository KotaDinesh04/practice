import { Router } from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createShortCode } from "../controllers/shortUrlController.js";

const shortURLRouter = Router();

shortURLRouter.post("/s", protect, createShortCode);

export default shortURLRouter;