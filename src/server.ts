import express, { Request, Response } from 'express';

const app = express();

app.post('/teros', (req: Request, res: Response) => {
  return res.status(200).json({});
});

app.listen(8080);
