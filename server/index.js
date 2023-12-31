import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();
import connectDB from './config/db.js';

import cookieParser from 'cookie-parser';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(cors({
  origin: 'https://thepods.vercel.app', // Replace with your Vercel frontend URL
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use('/api/users', userRoutes);
app.use('/api/book',bookRoutes);
app.use('/api/contactdetail',contactRoutes);

app.get('/api/getkey', (req, res) => {
  res.status(200).json({ key: process.env.RAZORPAY_ID_KEY });
});

// if (process.env.NODE_ENV === 'production') {
//   const __dirname = path.resolve();
//   app.use(express.static(path.join(__dirname, '/frontend/dist')));

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
//   );
// } else {
  app.get('/', (req, res) => {
    res.send('API is running....');
  });
// }

// app.use('contact')
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
