import {Module} from "@nestjs/common";
import {ITransactionRepository} from "src/v1/business/domain/transaction-typeorm.repository.interface";
import {ListTransactionUseCase} from "src/v1/business/use-case/list-transaction.use-case";
import TransactionTypeORMRepository from "src/v1/infrastructure/persistence/typeorm/transaction/repository/transaction-typeorm.repository";
import {DataSource} from "typeorm";
import TransactionController from "../api/transaction.controller";
import {DatabaseModule} from "./database.module";
import {ListTransactionUseCaseToken, MySqlDataDourceToken, TransactionRepositoryToken} from "./typeorm.decorator";

@Module({
	providers: [
		{
			provide: ListTransactionUseCaseToken,
			useFactory: async (transactionRepository: ITransactionRepository) => {
				return new ListTransactionUseCase(transactionRepository)	
			},
			inject: [TransactionRepositoryToken]
		}, 
		{
			provide: TransactionRepositoryToken,
			useFactory: async (dataSource: DataSource) => {
				return new TransactionTypeORMRepository(dataSource)	
			},
			inject: [MySqlDataDourceToken]
		}
	],
	imports: [DatabaseModule],
	controllers: [TransactionController]
})
export class TransactionModule {}
