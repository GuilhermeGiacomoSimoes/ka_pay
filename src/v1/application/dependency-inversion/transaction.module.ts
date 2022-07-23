import {Module} from "@nestjs/common";
import {ITransactionRepository} from "src/v1/business/domain/transaction-typeorm.repository.interface";
import {ListTransactionUseCase} from "src/v1/business/use-case/list-transaction.use-case";
import TransactionController from "../api/transaction.controller";
import {DatabaseModule} from "./database.module";

@Module({
	providers: [
		{
			provide: ListTransactionUseCase, 
			useFactory(transactionRepository: ITransactionRepository) {
				return new ListTransactionUseCase(transactionRepository);
			} 
		}
	], 
	imports: [DatabaseModule],
	controllers: [TransactionController]
})
export class TransactionModule {}
