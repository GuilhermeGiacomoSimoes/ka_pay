import {Module} from "@nestjs/common";
import {RouterModule} from "@nestjs/core";
import TransactionTypeORMRepository from "src/v1/infrastructure/persistence/typeorm/transaction/repository/transaction-typeorm.repository";
import {DatabaseModule} from "./database.module";
import {TransactionModule} from "./transaction.module";

const modules = [
	TransactionModule.forCustomRepository([TransactionTypeORMRepository])
];

@Module({
	imports : [
		RouterModule.register([
			{
				path: 'v1',
				children: modules
			}
		]), 
		DatabaseModule,
		...modules
	],
})
export class v1Module {}
