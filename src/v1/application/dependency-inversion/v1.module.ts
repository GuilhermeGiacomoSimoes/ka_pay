import {Module} from "@nestjs/common";
import {RouterModule} from "@nestjs/core";
import {DatabaseModule} from "./database.module";
import {TransactionModule} from "./transaction.module";

const modules = [TransactionModule];

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
