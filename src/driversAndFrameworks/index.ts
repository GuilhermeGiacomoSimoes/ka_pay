import express, { Express , Request, Response} from 'express';
import dotenv from 'dotenv';
import {ClientRepositoryMySQL} from './ClientRepositoryMySQL';
import {CreateClient} from '../domain/useCases/CreateClient';
import {Client} from '../domain/entities/Client';
import { GetClient } from '../domain/useCases/GetClient';

dotenv.config();

const app: Express = express();

const port = 8080;

app.get('/client/:id', async (req: Request, res: Response) => {
	const repositoryClient = new ClientRepositoryMySQL();
	const useCase = new GetClient(repositoryClient);
	const getClientById = useCase.execute(req.params.id);
	res.send(getClientById);
});

app.put('/client', async (req: Request, res: Response) => {
	const repositoryClient = new ClientRepositoryMySQL();
	const createClientUseCase = new CreateClient(repositoryClient);
	const client: Client = new Client('id', 'guilherme', '15/01/1996', '111222222333');
	const clientCreated = await createClientUseCase.execute(client);
	res.send(clientCreated);
});

app.listen(port, () => {
	console.log(`server is running at https://localhost:${port}`)
})
