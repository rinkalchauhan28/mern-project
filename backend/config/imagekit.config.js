import ImageKit from "imagekit"
import dotenv from "dotenv"

dotenv.config()

const imagekit = new ImageKit({
    privateKey:process.env.PRIVATEKEY,
    publicKey:process.env.PUBLICKEY,
    urlEndpoint:process.env.URLENDPOINT
})

export default imagekit