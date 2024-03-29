import {Client} from "../../../entities/Client";
import {ClientRepositoryInterface} from "../../interfaces/repository/ClientRepositoryInterface";

export class ClientRepositoryMemory implements ClientRepositoryInterface{
	
	private clients : Client[] = [];

	async getAll(): Promise<Client[]> {
		return Promise.resolve(this.clients);	
	}	

	async getClientById(uuid: string): Promise<Client | null> {
		const client : Client | undefined = 
			this.clients.find((transactiom) => {
				    return transactiom.id == uuid;
			}); 
		return Promise.resolve(client || null);
	}

	async save(client: Client): Promise<Client> {
		this.clients.push(client);
		return Promise.resolve(client);
	}

	async update(client: Client) : Promise<Client | null> {
		const indexClientUpdate = this.returnIndexOfClientInArrayMemoryByUuid(client.id);
		if(indexClientUpdate == -1) {
			return Promise.resolve(null);
		}

		this.clients.splice(indexClientUpdate, 1);
		this.clients.push(client); 
		return Promise.resolve(client);
	}

	private returnIndexOfClientInArrayMemoryByUuid(uuid: string) : number {
		for(let index = 0; index < this.clients.length; index++) {
			if(this.clients[index].id == uuid) return index; 
		}

		return -1;	
	}
}
