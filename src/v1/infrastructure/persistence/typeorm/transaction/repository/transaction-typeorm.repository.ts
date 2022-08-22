import {Injectable} from "@nestjs/common";
import {TransactionResponse} from "src/v1/business/common/Transaction.response";
import {ITransactionRepository} from "src/v1/business/domain/transaction-typeorm.repository.interface";
import {TransactionTypeormAdapterRepository} from "src/v1/infrastructure/adapter/typeorm-adapters/transaction.typeorm.adapter.repository";
import {DataSource, Repository} from "typeorm";
import {TransactionTypeORMEntity} from "../entity/transaction-typeorm-entity";

@Injectable()
export class TransactionTypeORMRepository implements ITransactionRepository {

	private readonly dataSource: Repository<TransactionTypeORMEntity>;
	constructor(dataSource: DataSource) {
		this.dataSource = dataSource.getRepository(TransactionTypeORMEntity) 
	}

	async listTransactions(): Promise<TransactionResponse[]> {
		const transactionsTypeorm : TransactionTypeORMEntity[] = await this.dataSource.find();
		const transactionAdapter = new TransactionTypeormAdapterRepository();
		let transactions = transactionAdapter.listTransactionsAdapter(transactionsTypeorm);
		return  transactions;
	}
}
