import { ShortURL } from "../models/shorturl.model.js";
import { nanoid } from 'nanoid';

export const createShortCode = async (req, res) => {
    try {
        const { title, originalUrl, expiresAt, customCode } = req.body;
        const userId = req.user.id;
        if (!originalUrl) {
            console.log("Original URL not found!");
            return res.status(400).json({ message: "Original URL is required!!!" });
        }
        let shortCode;
        if (customCode) {
            const present = await ShortURL.findOne({ shortCode: customCode });
            if (present) {
                console.log("Short code already exists! Enter a different one");
                return res.status(400).json({ message: "Short code already exists! Enter a different one" });
            }
            shortCode = customCode;
        }
        if (!shortCode) {
            shortCode = nanoid(7);
            let present = await ShortURL.findOne({ shortCode });
            while (present) {
                shortCode = nanoid(7);
                present = await ShortURL.findOne({ shortCode });
            }
        }
        const newURL = new ShortURL({
            originalUrl,
            shortCode,
            userId,
            expiresAt,
            title
        });
        await newURL.save();
        return res.status(201).json(newURL);
    } catch (error) {
        console.log("Internal Server Error! ", error);
        return res.status(500).json({ message: "Internal Server Error!" });
    }
}