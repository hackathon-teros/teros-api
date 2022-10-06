import express from 'express';
import router from './router';
import cors from 'cors';

const app: express.Express = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(router);

export default app;
