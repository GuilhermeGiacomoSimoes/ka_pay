import {Module} from "@nestjs/common";
import {ListTransactionUseCase} from "src/v1/business/domain/use-case/list-transaction.use-case";
import TransactionController from "../api/controller/transaction.controller";

@Module({
	controllers: [TransactionController], 
	providers: [ListTransactionUseCase]
})
export class v1Module {}
