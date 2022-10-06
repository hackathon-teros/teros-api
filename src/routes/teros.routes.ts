import { Router, Request, Response } from 'express';

const terosRoutes = Router();

terosRoutes.post('/csv', (req: Request, res: Response) => {
  return res.status(200).json({});
});

export { terosRoutes };
