import {Module} from "@nestjs/common";
import {ListTransactionUseCase} from "src/v1/business/domain/use-case/list-transaction.use-case";
import {ITransactionTypeormRepository} from "src/v1/infrastructure/persistence/typeorm/transaction/repository/transaction-typeorm.repository.interface";
import TransactionController from "../api/transaction.controller";
import {DatabaseModule} from "./database.module";

@Module({
	providers: [
		{
			provide: ListTransactionUseCase, 
			useFactory(transactionRepository: ITransactionTypeormRepository) {
				return new ListTransactionUseCase(transactionRepository);
			} 
		}
	], 
	imports: [DatabaseModule],
	controllers: [TransactionController]
})
export class TransactionModule {}
