import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import { router } from './router';
import 'dotenv/config';
import cors from './app/middlewares/cors';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const port = process.env.PORT;
    const app = express();

    app.use(cors);

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    app.use(express.json());

    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));

