import ProductModel from "../model/Product.model.js";
import imagekit from "../config/imagekit.config.js";

export const createProduct = async (req, res) => {
    try {
        const { title, description, price, category } = req.body
        const file = req.file;
        if(!file){
            return res.status(404).json({message:"file not found"})
            
        }
            const upImage = await imagekit.upload({
                file:file.buffer,
                fileName:file.originalname,
                folder:"products"
            })
        const newProduct = await ProductModel.create({
            title,
            description,
            price,
            category,
            image:upImage.url       
        })
        return res.status(200).json({ message: "product", newProduct })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getAllProduct = async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = 10;
        const skill = (page - 1) * limit;
        const allProduct = await ProductModel.find({}).skip(skill).limit(limit)
        res.status(200).json({ message: "allProducts", allProduct })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}