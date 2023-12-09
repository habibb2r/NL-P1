import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './modules/student/student.route';
import { UserRoutes } from './modules/user/user.route';
import globalErrorHandler from './middleware/globalErrorHandler';
import notFound from './middleware/notFound';
import router from './routes';
const app: Application = express();


//parsers
app.use(express.json());
app.use(cors());

//application routes
app.use('/api/v1', router);


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});


app.use(globalErrorHandler)


//not found 
app.use(notFound)
export default app;
