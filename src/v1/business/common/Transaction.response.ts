import {Client} from "src/v1/business/domain/entities/client.entity";

export class TransactionResponse {
	id : string;
	valueTransactio : number;
	clientDestination : Client;
	clientOrigin : Client;
}
