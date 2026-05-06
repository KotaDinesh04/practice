import { config } from '../config.js';
import jwt from 'jsonwebtoken';

export const protect = async (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        console.log("Error! Token not found");
        return res.status(403).json({ status: "Forbidden", message: "Error! Token not found" });
    }
    try {
        const decode = jwt.verify(token, config.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log("Internal Server Error!! ", error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}