import {IListTransactionRepository} from "src/v1/infrastructure/persistence/typeorm/transaction/repository/list-transaction.interface.repository";
import {TransactionResponse} from "../../common/Transaction.response";

export class ListTransactionUseCase {

	constructor(
		private readonly transactionRepository : IListTransactionRepository 
	) {}

	execute() : Promise<TransactionResponse> {
	}	
}
