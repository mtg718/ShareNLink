import express from 'express';
import router from './routes/routes.js';
const app = express();
import cors from 'cors';
import { connectDB } from './database/db.js';
import dotenv from "dotenv";

dotenv.config();

const PORT =process.env.PORT;
app.use(cors());

app.use('/',router);

connectDB();

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})
