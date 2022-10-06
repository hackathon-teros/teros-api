import { Router } from 'express';

const mongoose = require('mongoose');
import { terosRoutes } from './teros.routes';

const router = Router();

router.use('/teros', terosRoutes);

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:8080/teros');
}

export { router };
