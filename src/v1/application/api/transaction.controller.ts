import {Controller, Get, Inject} from "@nestjs/common";
import {TransactionResponse} from "src/v1/business/common/Transaction.response";
import {ListTransactionUseCase} from "src/v1/business/domain/use-case/list-transaction.use-case";
import {IListTransactionUseCase} from "src/v1/business/domain/use-case/list-transactions.use-case.interface";

@Controller('transaction')
export default class TransactionController {

	constructor(
		@Inject(ListTransactionUseCase)
		private readonly listTransationsUseCases : IListTransactionUseCase,	
	) {}

	@Get()
	async listTransations() : Promise<TransactionResponse[]> {
		return this.listTransationsUseCases.execute();
	}
}
