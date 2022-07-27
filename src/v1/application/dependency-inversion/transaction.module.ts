import {Module} from "@nestjs/common";
import {getDataSourceToken} from "@nestjs/typeorm";
import {ITransactionRepository} from "src/v1/business/domain/transaction-typeorm.repository.interface";
import {ListTransactionUseCase} from "src/v1/business/use-case/list-transaction.use-case";
import {TransactionTypeORMEntity} from "src/v1/infrastructure/persistence/typeorm/transaction/entity/transaction-typeorm-entity";
import TransactionTypeORMRepository from "src/v1/infrastructure/persistence/typeorm/transaction/repository/transaction-typeorm.repository";
import {DataSource} from "typeorm";
import TransactionController from "../api/transaction.controller";
import {DatabaseModule} from "./database.module";

@Module({
	providers: [
		{
			inject: [getDataSourceToken()], 
			provide: TransactionTypeORMRepository,
			useFactory(datasource: DataSource)  {
				const baseRepository = datasource.getRepository<any>(TransactionTypeORMEntity);
				return new TransactionTypeORMRepository(baseRepository.target, baseRepository.manager, baseRepository.queryRunner);
			}
		}, 
		{
			provide: ListTransactionUseCase, 
			useFactory(transactionRepository: ITransactionRepository) {
				return new ListTransactionUseCase(transactionRepository);
			},
			inject: [TransactionTypeORMRepository]
		}
	], 
	imports: [DatabaseModule],
	controllers: [TransactionController]
})
export class TransactionModule {}
