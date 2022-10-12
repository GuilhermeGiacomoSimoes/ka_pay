import {Account} from "../entities/Account";
import {AccountRepositoryInterface} from "../interfaceAdapters/repository/AccountRepositoryInterface";
import {BankRepositoryInterface} from "../interfaceAdapters/repository/BankRepositoryInterface";
import {ClientRepositoryInterface} from "../interfaceAdapters/repository/ClientRepositoryInterface";

export class CreateAccount {
	private readonly repositoryAccount: AccountRepositoryInterface;
	private readonly repositoryClient : ClientRepositoryInterface;
	private readonly repositoryBank : BankRepositoryInterface;

	constructor(repositoryAccount: AccountRepositoryInterface, repositoryClient: ClientRepositoryInterface, repositoryBank: BankRepositoryInterface) {
		this.repositoryAccount = repositoryAccount;
		this.repositoryClient = repositoryClient;
		this.repositoryBank = repositoryBank;
	}

	async execute(account: Account) {
		const accountConsult = await this.repositoryAccount.getAccountById(account.id);
		if(accountConsult) throw new Error('account consult already exist');

		const clientConsult = await this.repositoryClient.getClientById(account.idClient);
		const bankConsult = await this.repositoryBank.getBankById(account.idBank);

		if(!clientConsult || !bankConsult) {
			throw new Error('Client or Bank is not exists');
		}

		this.repositoryAccount.save(account);
	}
}
