import express from 'express';
import http from 'node:http';
import mongoose from 'mongoose';
import path from 'node:path';
import 'dotenv/config';
import { Server } from 'socket.io';

import cors from './app/middlewares/cors';

import { router } from './router';

const app = express();
const server = http.createServer(app);
export const io = new Server(server);

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const port = process.env.PORT;

    app.use(cors);

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    app.use(express.json());

    app.use(router);

    server.listen(port, () => {
      console.log(`🚀 Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));

