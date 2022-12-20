import {Account} from "../entities/Account";
import {Transaction} from "../entities/Transaction";
import {AccountRepositoryInterface} from "../interfaceAdapters/repository/AccountRepositoryInterface";
import {TransactionRepositoryInterface} from "../interfaceAdapters/repository/TransactionRepositoryInterface";

export class CarryOutTransaction {
	private readonly transactionRepository: TransactionRepositoryInterface
	private readonly accountRepository: AccountRepositoryInterface

	constructor(transactionRepository: TransactionRepositoryInterface, accountRepository: AccountRepositoryInterface) {
		this.transactionRepository =  transactionRepository;
		this.accountRepository =  accountRepository;
	}

	async execute(value: number, accountOriginUUID: string, accountDestinationUUID: string) {
		if(value < 0) {
			throw new Error("Value is not valid");
		}

		const accountOriginDatabase = await this.accountRepository.getAccountById(accountOriginUUID);
		const accountDestinationDatabase = await this.accountRepository.getAccountById(accountDestinationUUID);

		if(accountOriginDatabase == undefined || accountDestinationDatabase == undefined) {
			throw new Error("Not find account");
		}

		if(accountOriginDatabase.money - value < 0) {
			throw new Error("Value is greater than the balance");
		}

		const accountOrigin = new Account(
			accountOriginDatabase.id, accountOriginDatabase.idClient, accountOriginDatabase.idBank, accountOriginDatabase.money - value
		);
		const accountDestination = new Account(
			accountDestinationDatabase.id, accountDestinationDatabase.idClient, accountDestinationDatabase.idBank, accountDestinationDatabase.money + value
		);

		this.accountRepository.update(accountOrigin);
		this.accountRepository.update(accountDestination);

		const transaction: Transaction = new Transaction('', value, accountDestinationUUID, accountOriginUUID);
		this.transactionRepository.save(transaction);
	}
}
