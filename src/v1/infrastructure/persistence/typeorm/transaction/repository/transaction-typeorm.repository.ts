import {Injectable} from "@nestjs/common";
import {TransactionResponse} from "src/v1/business/common/Transaction.response";
import {ITransactionRepository} from "src/v1/business/domain/transaction-typeorm.repository.interface";
import {TransactionTypeormAdapterRepository} from "src/v1/infrastructure/adapter/typeorm-adapters/transaction.typeorm.adapter.repository";
import { Repository} from "typeorm";
import {TransactionTypeORMEntity} from "../entity/transaction-typeorm-entity";

@Injectable()
export default class TransactionTypeORMRepository extends Repository<TransactionTypeORMEntity> implements ITransactionRepository {

	async listTransactions(): Promise<TransactionResponse[]> {
		const transactionsTypeorm : TransactionTypeORMEntity[] = await this.find();
		const transactionAdapter = new TransactionTypeormAdapterRepository();
		let transactions = transactionAdapter.listTransactionsAdapter(transactionsTypeorm);
		return  transactions;
	}
}
