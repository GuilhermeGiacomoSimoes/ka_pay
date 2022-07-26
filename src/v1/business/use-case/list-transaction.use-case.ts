import {Inject, Injectable} from "@nestjs/common";
import TransactionTypeORMRepository from "src/v1/infrastructure/persistence/typeorm/transaction/repository/transaction-typeorm.repository";
import {TransactionResponse} from "../common/Transaction.response";
import {ITransactionRepository} from "../domain/transaction-typeorm.repository.interface";
import {ITransactionUseCase} from "./transactions.use-case.interface";

@Injectable()
export class ListTransactionUseCase implements ITransactionUseCase {

	constructor(
		@Inject(TransactionTypeORMRepository)
		private readonly transactionRepository : ITransactionRepository 
	) {}

	execute() : Promise<TransactionResponse[]> {
		return this.transactionRepository.listTransactions(); 
	}	
}
