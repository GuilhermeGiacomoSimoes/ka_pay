import {Inject, Injectable} from "@nestjs/common";
import {TransactionResponse} from "../common/Transaction.response";
import {ITransactionRepository} from "../domain/transaction-typeorm.repository.interface";
import {IListTransactionUseCase} from "./list-transactions.use-case.interface";
import {TransactionRepositoryToken} from "../../application/dependency-inversion/tokens";

@Injectable()
export class ListTransactionUseCase implements IListTransactionUseCase {

	constructor(
		@Inject(TransactionRepositoryToken)
		private readonly transactionRepository : ITransactionRepository 
	) {}

	execute() : Promise<TransactionResponse[]> {
		return this.transactionRepository.listTransactions(); 
	}
}
