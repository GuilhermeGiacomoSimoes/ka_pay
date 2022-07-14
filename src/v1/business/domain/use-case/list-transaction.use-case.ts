import {Inject} from "@nestjs/common";
import {TransactionResponse} from "src/v1/application/api/request/Transaction.response";

export class ListTransactionUseCase {

	constructor(
		private readonly 
	) {}

	execute() : Promise<TransactionResponse> {
		return this.listTransactionUseCase.execute();
	}
}
