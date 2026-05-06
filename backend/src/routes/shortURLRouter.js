import { Router } from "express";
import { protect } from "../middlewares/authMiddleware.js";
import { createShortCode, fetchAllUrls, getOriginalURL } from "../controllers/shortUrlController.js";

const shortURLRouter = Router();

shortURLRouter.get("/fetchAllUrls", protect, fetchAllUrls);
shortURLRouter.post("/", protect, createShortCode);
shortURLRouter.get("/:shortCode", getOriginalURL);
export default shortURLRouter;