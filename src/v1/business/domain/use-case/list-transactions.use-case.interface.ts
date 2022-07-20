import {TransactionResponse} from "../../common/Transaction.response";

export interface IListTransactionUseCase {
	execute(): Promise<TransactionResponse[]>;
}
