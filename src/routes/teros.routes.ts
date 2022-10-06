import { Request, Response, Router } from 'express';

const terosRoutes = Router();

terosRoutes.post('/csv', (req: Request, res: Response) => {
  return res.status(200).send("Hello World");
});

export { terosRoutes };
