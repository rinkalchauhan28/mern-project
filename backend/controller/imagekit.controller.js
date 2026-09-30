import imagekit from "../config/imagekit.config.js";

export const uploadFile = async (req, res) => {
    try {
        const file = req.file;
        if (!file) {
            return res.status(400).json({message: "No image file provided."});
        }
        const image = await imagekit.upload({
            file: file.buffer,
            fileName: file.originalname,
            folder: "image"
        });
        res.status(201).json({
            message: "Image uploaded successfully",
            imageUrl: image.url,
            imageDetails: image
        });
    } catch (error) {
        console.error("Upload Error:", error);
        res.status(500).json({message: error.message});
    }
};