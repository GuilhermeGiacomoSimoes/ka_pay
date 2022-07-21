import {CLientResponse} from "./client.response";

export class TransactionResponse {
	id : string;
	valueTransaction : number;
	clientDestination : CLientResponse;
	clientOrigin : CLientResponse;
}
