import {Inject} from "@nestjs/common";
import {TransactionResponse} from "../../common/Transaction.response";

export class ListTransactionUseCase {

	constructor(
		@Inject()
	) {}

	execute() : Promise<TransactionResponse> {
		return [
			{
				id : "",
				valueTransactio : 100,
				clientDestination : {
					name : ,
					email : "",
					birthDate : "",
					cpfCnpj : "",
					money : 100,
				}, 
				clientOrigin : {
					name : "",
					email : "",
					birthDate : "",
					cpfCnpj : "",
					money : 10,
				}
			}
		];
	}
}
