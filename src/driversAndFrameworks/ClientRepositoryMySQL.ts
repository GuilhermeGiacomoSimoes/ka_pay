import {Client} from "../domain/entities/Client";
import {ClientRepositoryInterface} from "../domain/interfaceAdapters/repository/ClientRepositoryInterface";
import {execute} from "./mysqlconfig";

export class ClientRepositoryMySQL implements ClientRepositoryInterface {

	save(client: Client) : Promise<Client> {
		const query = `INSERT INTO ka_clients(name,birth_date,cpf_cnpj) VALUES (?,?,?);`;
		execute(query,[client.name, client.birthDate, client.cpfCnpj]);
	}
	
	update(client: Client) : Promise<Client | undefined> {
		const query = `
		UPDATE FROM ka_clients 
		SET 	
			name  = ?,
			birth_date = ?,
			cpf_cnpj = ?,
		VALUES (?,?,?)
		WHERE 
			id = ?
		;`;

		execute(query,[
			client.name,
			client.birthDate,
			client.cpfCnpj,
			client.id
		]);
	}
	
	getClientById(uuid: string) : Promise<Client | undefined> {
		const query = `
		SELECT 
			* 
		FROM 
			ka_clients
		WHERE 
			id = ?	
		`;
	
		execute(query, [uuid]);
	}
	
	getAll(): Promise<Client[]> {
		
		const query = `
		SELECT 
			* 
		FROM 
			ka_clients
		`;

		execute(query, []);
	}
} 

