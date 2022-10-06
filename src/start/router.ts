import { Router } from 'express';
import DataController from '../app/controllers/DataController';

const router: Router = Router();

router.get('/', (req, res) => res.send('hello'));
router.get('/data', DataController.index);
router.post('/',DataController.store);

export default router;
