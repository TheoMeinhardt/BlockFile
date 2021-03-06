// imports
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { config as dotenvConfig } from 'dotenv';

// router imports
import { userRouter, imageRouter } from '../api/routes';

// error handlers
import { errorHandler, notFoundHandler } from '../api/middleware';

dotenvConfig();

const app = express();
const PORT: number = Number(process.env.PORT ?? 3000);

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/user', userRouter);
app.use('/image', imageRouter);

app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`\nServer listening on port ${PORT}`);
});
