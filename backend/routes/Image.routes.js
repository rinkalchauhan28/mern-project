import fileUpload from '../controller/file.controller.js'
import { Router } from 'express'
import { uploadFile } from '../controller/imagekit.controller.js'

const fileRouter = Router()

fileRouter.post("/upload", fileUpload.single('image'), uploadFile)

export default fileRouter;
