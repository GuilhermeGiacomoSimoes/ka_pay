import {Client} from "../../../entities/Client";

export interface ClientRepositoryInterface {
	save(client: Client) : Promise<Client | null>;
	update(client: Client) : Promise<Client | null>;
	getClientById(uuid: string) : Promise<Client | null>;
	getAll(): Promise<Client[]>;
}
