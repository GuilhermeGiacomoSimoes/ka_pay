import {ClientInterfaceMySQLDTO} from "../../../driversAndFrameworks/ClientMySQLDTO";
import {Client} from "../../entities/Client";

export abstract class ClientRepositoryMySQLAdapter {
	static execute(cleintDTO : ClientInterfaceMySQLDTO | undefined) : Client | null {
		if(!cleintDTO) return null;
		const client = new Client(cleintDTO.id,cleintDTO.name,cleintDTO.birth_date, cleintDTO.cpf_cnpj);	
		return client;
	}
}
