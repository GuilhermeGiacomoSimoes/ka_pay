import {Controller, Get, Inject} from "@nestjs/common";
import {TransactionResponse} from "src/v1/business/common/Transaction.response";
import {ListTransactionUseCase} from "src/v1/business/domain/use-case/list-transaction.use-case";

@Controller('transaction')
export default class TransactionController {

	constructor(
		@Inject()
		private readonly listTransationsUseCases : ListTransactionUseCase,	
	) {}

	@Get()
	async listTransations() : Promise<TransactionResponse> {
		return this.listTransationsUseCases.execute();
	}
}
