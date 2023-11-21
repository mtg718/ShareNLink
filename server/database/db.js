import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
export const connectDB=async()=>{
    
const MONGO_URI= process.env.MONGO_URI
    try {
       await mongoose.connect(MONGO_URI,{useNewUrlParser:true})
       console.log('Database is connected')
    } catch (error) {
       console.error('Error while connecting database',error.message) 
    }
}
