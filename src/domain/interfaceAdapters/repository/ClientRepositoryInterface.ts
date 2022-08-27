import {Client} from "../../entities/Client";

export interface ClientRepositoryInterface {
	save(client: Client) : Promise<Client>;
	update(client: Client) : Promise<Client>;
	getClientById(uuid: string) : Promise<Client>;
	getAll(): Promise<Client[]>;
}
