import {Module} from "@nestjs/common";
import {ListTransactionUseCase} from "src/v1/business/domain/use-case/list-transaction.use-case";
import TransactionController from "../api/controller/transaction.controller";
import {DatabaseModule} from "./database.module";

@Module({
	controllers: [TransactionController], 
	providers: [ListTransactionUseCase], 
	imports : [DatabaseModule]
})
export class v1Module {}
