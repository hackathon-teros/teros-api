import { Router } from 'express';
import DataController from '../app/controllers/DataController';

const router: Router = Router();

router.get('/', DataController.index);
router.post('/',DataController.store);

export default router;
