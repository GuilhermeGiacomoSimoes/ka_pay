import {Module} from "@nestjs/common";
import TransactionController from "../api/controller/transaction.controller";

@Module({
	controllers: [TransactionController], 
	providers: []
})
export class v1Module {}
