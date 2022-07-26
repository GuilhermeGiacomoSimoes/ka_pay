import {Injectable} from "@nestjs/common";
import {TransactionResponse} from "../common/Transaction.response";
import {ITransactionRepository} from "../domain/transaction-typeorm.repository.interface";
import {IListTransactionUseCase} from "./list-transactions.use-case.interface";

@Injectable()
export class ListTransactionUseCase implements IListTransactionUseCase {

	constructor(
		private readonly transactionRepository : ITransactionRepository 
	) {}

	execute() : Promise<TransactionResponse[]> {
		return this.transactionRepository.listTransactions(); 
	}
}
