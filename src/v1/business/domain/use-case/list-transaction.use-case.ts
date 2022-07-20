import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import TransactionTypeORMRepository from "src/v1/infrastructure/persistence/typeorm/transaction/repository/transaction-typeorm.repository";
import {ITransactionTypeormRepository} from "src/v1/infrastructure/persistence/typeorm/transaction/repository/transaction-typeorm.repository.interface";
import {TransactionResponse} from "../../common/Transaction.response";
import {IListTransactionUseCase} from "./list-transactions.use-case.interface";

@Injectable()
export class ListTransactionUseCase implements IListTransactionUseCase{

	constructor(
		@InjectRepository(TransactionTypeORMRepository)
		private readonly transactionRepository : ITransactionTypeormRepository 
	) {}

	execute() : Promise<TransactionResponse> {
		return 
	}	
}
