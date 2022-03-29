// imports
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { config as dotenvConfig } from 'dotenv';

// router imports
import { userRouter } from '../api/routes';

dotenvConfig();

const app = express();
const PORT: number = Number(process.env.PORT ?? 3000);

app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`\nServer listening on port ${PORT}`);
});
