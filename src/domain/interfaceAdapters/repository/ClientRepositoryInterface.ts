import {Client} from "../../entities/Client";

export interface ClientRepositoryInterface {
	save(client: Client) : Promise<Client>;
	update(client: Client) : Promise<Client | undefined>;
	getClientById(uuid: string) : Promise<Client | undefined>;
	getAll(): Promise<Client[]>;
}
