import express, { Router, json } from 'express';
import path from 'path';
import cors from 'cors';
import config from './config';
import pingRouter from '@routes/ping.route';
import { connect } from 'mongoose';

import '@models/example.model';

const { PORT } = config;
const app = express();

app.use(json());
app.use(cors());

async function main(port: number) {
  await connect(config.MONGO_URI);

  const api = Router();
  // Implement route
  api.use('/ping', pingRouter);
  app.use('/api', api);
  // Listen port
  app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
  });
}

main(PORT);
