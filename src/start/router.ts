import { Router } from 'express';
import DataController from '../app/controllers/DataController';
import UserController from '../app/controllers/UserController';

const router: Router = Router();

router.get('/', (req, res) => res.send('hello'));
router.get('/data', DataController.index);
router.post('/',DataController.store);

router.post('/user', UserController.store);
router.post('/login', UserController.login);

export default router;
