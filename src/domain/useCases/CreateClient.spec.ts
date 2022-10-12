import {CreateClient} from "./CreateClient";
import {ClientRepositoryMemory} from "../interfaceAdapters/repository/inMemory/ClientRepositoryMemory";
import {Client} from "../entities/Client";

describe('Create Client Use Cases', () => {
	
	let createCliente : CreateClient;

	beforeEach(() => {
		const repositoryClient = new ClientRepositoryMemory();
		createCliente = new CreateClient(repositoryClient);
	});

	test('verify if save correct and not throw', async () => {
		const client = new Client('id', 'guilherme', '15/01/1996', '1111111111');
		expect(createCliente.execute(client)).resolves.not.toThrow();
	});

	test('verify if return throw', async () => {
		const client = new Client('id', 'guilherme', '15/01/1996', '1111111111');
		await createCliente.execute(client);
		expect(createCliente.execute(client)).rejects.toThrow();
	});
});
