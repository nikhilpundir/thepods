import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;


const app = express();
connectDB();


app.use(cors({
    origin:["https://thepods.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("hello");
})

app.listen(port, () => console.log(`Server started on port ${port}`));
