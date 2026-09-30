import ProductModel from "../model/Product.model.js";

export const search = async(req,res)=>{
    try {
        const q = req.query.search
        const pro = await ProductModel.find({
            $or: [
                {title:{$regex:q,$options:'i'}},
                {description:{$regex:q,$options:'i'}}
            ]
        })
        if(pro.length === 0){
            return res.status(404).json({message:"product not found"})
        }
            return res.status(200).json({message:"product",pro})

    } catch (error) {
            return res.status(500).json({message:error.message})

    }
}
