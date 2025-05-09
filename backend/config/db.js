import mongoose from "mongoose";


const connectDb = async () => {
    try {
        let connect = await mongoose.connect("mongodb+srv://merntodonov:merntodonov@cluster0.jsf3481.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        console.log('mongodb connected successfully')
    } catch (error) {
        console.log(error)
    }
}

export default connectDb