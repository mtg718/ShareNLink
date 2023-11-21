import express from 'express';
import router from './routes/routes.js';
const app = express();
import cors from 'cors';
import { connectDB } from './database/db.js';

const PORT =7000;
app.use(cors());

app.use('/',router);

connectDB();

app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`)
})