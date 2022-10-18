import express, { Express , Request, Response} from 'express';
import dotenv from 'dotenv';
import {ClientRepositoryMySQL} from './ClientRepositoryMySQL';
import {CreateClient} from '../domain/useCases/CreateClient';
import {Client} from '../domain/entities/Client';

dotenv.config();

const app: Express = express();

const port = 8080;

app.get('/', (req: Request, res: Response) => {
	res.send('Express + TypeScript server');
});

app.put('/client', (req: Request, res: Response) => {
	const repositoryClient = new ClientRepositoryMySQL();
	const createClientUseCase = new CreateClient(repositoryClient);
	const client: Client = new Client('id', 'guilherme', '15/01/1996', '111222222333');
	createClientUseCase.execute(client);
});

app.listen(port, () => {
	console.log(`server is running at https://localhost:${port}`)
})
