import grid from 'gridfs-stream';
// import { GridFSBucket } from 'mongodb';
import mongoose from 'mongoose';
const url = 'https://chatclone-458j.onrender.com';
// const url = 'http://localhost:5500';
let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open',()=>{
   gridfsBucket=  new mongoose.mongo.GridFSBucket(conn.db,{
        bucketName:'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
})

export const uploadFile = async(request, response)=>{
    if(!request.file){

        return response.status(404).json('file not found');
    }
    
    const imageUrl = `${url}/file/${request.file.filename}`;
    
    return response.status(200).json(imageUrl)
}

export const getImage= async(req,res)=>{
    try {
        const file = await gfs.files.findOne({filename:req.params.filename}) ;
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(res)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}
