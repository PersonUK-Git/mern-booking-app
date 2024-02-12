import mongoose from "mongoose"

const connectDB =async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string)
        console.log(`connected to mongo db ${conn.connection.host}`); 
    } catch (error) {
        console.log(`error in mongo db ${error}`);
    }
}

export default connectDB;