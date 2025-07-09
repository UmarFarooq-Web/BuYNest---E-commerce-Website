import cloudinary from "../config/cloudinary.js";

const uploadFromBuffer = (buffer) =>{

    return new Promise((resolve , reject)=>{
        const stream = cloudinary.uploader.upload_stream((err , result)=>{
            if(err) return reject(err)

            resolve(result)
        });

        stream.end(buffer)
    })

}

export default uploadFromBuffer