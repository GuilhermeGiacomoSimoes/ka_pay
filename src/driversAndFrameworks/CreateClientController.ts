import express, { Express , Request, Response} from 'express';
import {Client} from '../domain/entities/Client';
import {CreateClient} from '../domain/useCases/CreateClient';
import {ClientRepositoryMySQL} from './ClientRepositoryMySQL';

const app: Express = express()

app.put('/client', (req: Request, res: Response) => {
	const repositoryClient = new ClientRepositoryMySQL();
	const createClientUseCase = new CreateClient(repositoryClient);
	const client: Client = new Client('id', 'guilherme', '15/01/1996', '111222222333');
	createClientUseCase.execute(client);
});
