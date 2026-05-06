import { User } from "../models/user/user.model.js";

export const getUserDetails = async (req, res) => {
    try {
        const userId = req.user.id;
        const user = await User.findById(userId);
        if (!user) {
            console.log("User not found!");
            return res.status(404).json({ status: "FAILURE", message: "Invalid user!" });
        }
        return res.status(200).json({ status: "success", user });
    } catch (error) {
        console.log("Internal server error!! ", error.message);
        return res.status(500).json({ message: "Internal server error!" });
    }
}