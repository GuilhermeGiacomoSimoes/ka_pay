import {Client} from "../domain/entities/Client";
import {ClientRepositoryInterface} from "../domain/interfaceAdapters/repository/ClientRepositoryInterface";
import {ClientRepositoryMySQLAdapter} from "../domain/interfaceAdapters/repository/ClientRepositoryMySQLAdapter";
import {ClientInterfaceMySQLDTO} from "./ClientMySQLDTO";
import {execute} from "./MySQLConfig";

export class ClientRepositoryMySQL implements ClientRepositoryInterface {

	async save(client: Client) : Promise<Client | null> {
		const query = `INSERT INTO ka_clients(name,birth_date,cpf_cnpj) VALUES (?,?,?);`;
		const clientDTO = await execute<ClientInterfaceMySQLDTO>(query,[client.name, client.birthDate, client.cpfCnpj]);
		return Promise.resolve(ClientRepositoryMySQLAdapter.execute(clientDTO));
	}
	
	async update(client: Client) : Promise<Client | null> {
		const query = `
		UPDATE FROM ka_clients 
		SET 	
			name = ?,
			birth_date = ?,
			cpf_cnpj = ?,
		WHERE 
			id = ?
		;`;

		const clientDTO = await execute<ClientInterfaceMySQLDTO>(query,[
			client.name,
			client.birthDate,
			client.cpfCnpj,
			client.id
		]).catch(err => {
			throw new Error(`err: ${err}`);
		});

		return Promise.resolve(ClientRepositoryMySQLAdapter.execute(clientDTO));
	}
	
	async getClientById(uuid: string) : Promise<Client | null> {
		const query = `
		SELECT 
			* 
		FROM 
			ka_clients
		WHERE 
			id = ?	
		`;
	
		const clientDTO = await execute<ClientInterfaceMySQLDTO>(query, [uuid]).catch(err => {
			throw new Error(`err: ${err}`);
		});
		console.log('aqui depois do execute');
		return ClientRepositoryMySQLAdapter.execute(clientDTO);
	}
	
	async getAll(): Promise<Client[]> {
		
		const query = `
		SELECT 
			* 
		FROM 
			ka_clients
		`;

		const clientDTO = await execute<ClientInterfaceMySQLDTO[]>(query, []).catch(err => {
			throw new Error(`err: ${err}`);
		});
		const clients: Client[] = [];

		if(clientDTO) {
			for(let client of clientDTO) {
				const clientAdapter = ClientRepositoryMySQLAdapter.execute(client);
				if(clientAdapter) clients.push();
			}
		}

		return Promise.resolve(clients);
	}
} 

