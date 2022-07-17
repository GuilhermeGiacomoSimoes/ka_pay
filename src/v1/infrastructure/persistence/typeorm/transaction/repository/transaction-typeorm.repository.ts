import {TransactionResponse} from "src/v1/business/common/Transaction.response";
import {DataSource, Repository} from "typeorm";
import {TransactionTypeORMEntity} from "../entity/transaction-typeorm-entity";
import {ITransactionTypeormRepository} from "./transaction-typeorm.repository.interface";

export default class TransactionTypeORMRepository implements ITransactionTypeormRepository {

	private readonly ormRepository : Repository<TransactionTypeORMEntity>;

	constructor(private dataSource: DataSource) {
		this.ormRepository = dataSource.getRepository(TransactionTypeORMEntity);
	}

	listTransactions(): Promise<TransactionResponse[]> {
		const transactionsTypeorm : TransactionTypeORMEntity[] = this.ormRepository.find();
		return  transactions;
	}
}
