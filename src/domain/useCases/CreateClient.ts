import {Client} from "../entities/Client";
import {ClientRepositoryInterface} from "../interfaceAdapters/repository/ClientRepositoryInterface";

export class CreateClient {
	private readonly clientRepository: ClientRepositoryInterface;
	constructor(clientRepository: ClientRepositoryInterface) {
		this.clientRepository = clientRepository;
	}

	async execute(client: Client) {
		const clientConsult = await this.clientRepository.getClientById(client.id);
		if(clientConsult != undefined) {
			throw new Error("Duplicate key");
		}
		this.clientRepository.save(client);
	}
}
