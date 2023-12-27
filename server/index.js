import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from "cors";
const port = process.env.PORT || 5000;


const app = express();

app.use(cors({
    origin:["https://thepods.vercel.app"],
    methods:["POST","GET"],
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => console.log(`Server started on port ${port}`));
