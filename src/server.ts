import express from 'express';

import { router } from './routes/index.routes';

const app = express();

app.use(router);

app.listen(8080);
