
import express, { Express , Request, Response} from 'express';
import {Client} from '../domain/entities/Client';
import {ClientRepositoryMemory} from '../domain/interfaceAdapters/repository/inMemory/ClientRepositoryMemory';
import {CreateClient} from '../domain/useCases/CreateClient';

const app: Express = express()

app.put('/createClient', (req: Request, res: Response) => {
	const repositoryClient = new ClientRepositoryMemory();
	const createClientUseCase = new CreateClient(repositoryClient);
	const client: Client = new Client('id', 'guilherme', '15/01/1996', '111222222333');
	createClientUseCase.execute(client);
});
