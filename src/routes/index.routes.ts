import { Router } from 'express';

import { terosRoutes } from './teros.routes';

const router = Router();

router.use('/teros', terosRoutes);

export { router };
