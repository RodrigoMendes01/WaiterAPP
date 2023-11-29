import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

import 'dotenv/config';

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const port = process.env.PORT;
    const app = express();

    app.use(express.json());

    app.use(router);

    app.listen(port, () => {
      console.log(`🚀 Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => console.log(error));

