import {Client} from "src/v1/business/domain/entities/client.entity";
import {CLientResponse} from "./client.response";

export class TransactionResponse {
	id : string;
	valueTransaction : number;
	clientDestination : CLientResponse;
	clientOrigin : ClientResponse;
}
