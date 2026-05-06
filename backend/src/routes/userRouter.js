// src/routes/userRouter.js (or .ts)
import { Router } from 'express';
import { getUserDetails } from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';


const userRouter = Router();

userRouter.get("/me", protect, getUserDetails);
export default userRouter;