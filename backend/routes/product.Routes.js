import { createProduct ,getAllProduct} from "../controller/Product.controller.js";
import { search } from "../controller/search.controller.js";
import {Router} from "express"
import fileUpload from '../controller/file.controller.js'

const ProductRouter = Router()

ProductRouter.post('/createproduct',fileUpload.single('image'),createProduct)
ProductRouter.get('/getproduct',getAllProduct)
ProductRouter.get('/search',search)

export default ProductRouter