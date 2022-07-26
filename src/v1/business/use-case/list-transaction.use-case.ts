import {Injectable} from "@nestjs/common";
import TransactionTypeORMRepository from "src/v1/infrastructure/persistence/typeorm/transaction/repository/transaction-typeorm.repository";
import {TransactionResponse} from "../common/Transaction.response";
import {IListTransactionUseCase} from "./list-transactions.use-case.interface";

@Injectable()
export class ListTransactionUseCase implements IListTransactionUseCase {

	constructor(
		private readonly transactionRepository : TransactionTypeORMRepository 
	) {}

	execute() : Promise<TransactionResponse[]> {
		return this.transactionRepository.listTransactions(); 
	}
}
