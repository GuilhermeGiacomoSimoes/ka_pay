import {Client} from "../../../entities/Client";
import {ClientRepositoryInterface} from "../ClientRepositoryInterface";

export class ClientRepositoryMemory {
	
	private clients : Client[] = [];

	listClients(): Promise<Client[]> {
		return Promise.resolve(this.clients);	
	}	

	getClientById(uuid: string): Promise<Client | undefined> {
		const client : Client | undefined = 
			this.clients.find((transactiom) => {
				    return transactiom.id == uuid;
			}); 
		return Promise.resolve(client);
	}

	save(client: Client) {
		this.clients.push(client);
	}

	update(client: Client) {
		const indexClientUpdate = this.returnIndexOfClientInArrayMemoryByUuid(client.id);
		if(indexClientUpdate == -1) {
			return;
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
