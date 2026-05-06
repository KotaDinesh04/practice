import { Router } from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createShortCode, getOriginalURL } from "../controllers/shortUrlController.js";

const shortURLRouter = Router();

shortURLRouter.post("/", protect, createShortCode);
shortURLRouter.get("/:shortCode", getOriginalURL);

export default shortURLRouter;