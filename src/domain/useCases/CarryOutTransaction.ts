import {AccountRepositoryInterface} from "../interfaceAdapters/repository/AccountRepositoryInterface";
import {TransactionRepositoryInterface} from "../interfaceAdapters/repository/TransactionRepositoryInterface";

export class CarryOutTransaction {
	private readonly transactionRepository: TransactionRepositoryInterface
	private readonly accountRepository: AccountRepositoryInterface

	constructor(transactionRepository: TransactionRepositoryInterface, accountRepository: AccountRepositoryInterface) {
		this.transactionRepository =  transactionRepository;
		this.accountRepository =  accountRepository;
	}

	execute(value: number, accountorigin: string, accountDestination: string) {

	}
}
