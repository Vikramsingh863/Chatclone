import multer from 'multer'
import { GridFsStorage } from "multer-gridfs-storage"

const storage = new GridFsStorage({
    url: `mongodb+srv://vikramsinghmertiya863:Mertiya0564@cluster0.13njzdi.mongodb.net/Chatapp?retryWrites=true&w=majority&appName=Cluster0`,
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    
    file: (request, file) => {
        const match = ["image/png", "image/jpg","image/jpeg"];

        if(match.indexOf(file.mimeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
})
export default multer({storage});