import {Client} from "./client.entity";

export class Transaction {
	private _id : string;
	private _valueTransactio : number;
	private _clientDestination : Client;
	private _clientsOrigin : Client;
}
