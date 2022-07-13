import {Controller, Get} from "@nestjs/common";
import {Transaction} from "src/v1/business/domain/entities/transaction.entity";
import {ListTransactionUseCase} from "src/v1/business/domain/use-case/list-transaction.use-case";

@Controller('transaction')
export default class TransactionController {

	constructor(
		private readonly listTransationsUseCases : ListTransactionUseCase,	
	) {}

	@Get()
	async listTransations() : Promise<Transaction> | never {
		return this.listTransationsUseCases.execute();
	}
}
