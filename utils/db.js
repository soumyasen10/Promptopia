import mongoose from "mongoose";
let isConnected=false
export const connectdb=async()=>{
    mongoose.set('strictQuery',true)
    if(isConnected){
        console.log("mongo connected")
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            dbname:'share_prompt'
        })
        isConnected=true;
        console.log("mongodb connected")
    } catch (error) {
        console.log(error)
    }
}