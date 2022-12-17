import {Client} from "../entities/Client";
import {ClientRepositoryInterface} from "../interfaceAdapters/repository/ClientRepositoryInterface";

export class CreateClient {
	private readonly clientRepository: ClientRepositoryInterface;
	constructor(clientRepository: ClientRepositoryInterface) {
		this.clientRepository = clientRepository;
	}

	async execute(client: Client) : Promise<Client | null> {
		const clientConsult = await this.clientRepository.getClientById(client.id);
		if(clientConsult) {
			throw new Error("Duplicate key");
		}
		return Promise.resolve(this.clientRepository.save(client));
	}
}
