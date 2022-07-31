import {DynamicModule, Provider} from "@nestjs/common";
import {getDataSourceToken} from "@nestjs/typeorm";
import {ITransactionRepository} from "src/v1/business/domain/transaction-typeorm.repository.interface";
import {ListTransactionUseCase} from "src/v1/business/use-case/list-transaction.use-case";
import TransactionTypeORMRepository from "src/v1/infrastructure/persistence/typeorm/transaction/repository/transaction-typeorm.repository";
import {DataSource} from "typeorm";
import TransactionController from "../api/transaction.controller";
import {DatabaseModule} from "./database.module";
import {TYPEORM_CUSTOM_REPOSITORY} from "./typeorm.decorator";

export class TransactionModule {
	public static forCustomRepository<T extends new (...args: any[]) => any>(repositories: T[]): DynamicModule {

		const providers: Provider[] = [];

		for(const repository of repositories) {
			const entity = Reflect.getMetadata(TYPEORM_CUSTOM_REPOSITORY, repository)
			if(!entity) {
				continue;
			}

			providers.push({
				inject: [getDataSourceToken()], 
				provide: repository,
				useFactory: (dataSource: DataSource) => {
					const baseRepository = dataSource.getRepository<any>(entity);
					return new repository(baseRepository.target, baseRepository.manager, baseRepository.queryRunner);
				}
			})	
		}

		return {
			exports: [...providers, {
				provide: ListTransactionUseCase, 
				useFactory(transactionRepository: ITransactionRepository) {
					return new ListTransactionUseCase(transactionRepository);
				},
				inject: [TransactionTypeORMRepository]
			}],
			imports: [DatabaseModule],
			controllers: [TransactionController], 
			module: TransactionModule,
			providers: [...providers, {
				provide: ListTransactionUseCase, 
				useFactory(transactionRepository: ITransactionRepository) {
					return new ListTransactionUseCase(transactionRepository);
				},
				inject: [TransactionTypeORMRepository]
			}],
		}
	}
}
