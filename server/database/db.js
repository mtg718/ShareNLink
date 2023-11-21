import mongoose from 'mongoose';

export const connectDB=async()=>{
    
const MONGO_URI =
  "mongodb+srv://mtg123:7877676528@cluster0.pvsrpea.mongodb.net/?retryWrites=true&w=majority";
    try {
       await mongoose.connect(MONGO_URI,{useNewUrlParser:true})
       console.log('Database is connected')
    } catch (error) {
       console.error('Error while connecting database',error.message) 
    }
}