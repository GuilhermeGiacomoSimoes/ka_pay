import express, { Express , Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

const port = 8080;

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript server');
});

app.listen(port, () => {
	console.log(`server is running at https://localhost:${port}`)
})
