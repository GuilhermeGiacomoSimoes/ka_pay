import {Account} from "../entities/Account";
import {Bank} from "../entities/Bank";
import {Client} from "../entities/Client";
import {AccountRepositoryMemory} from "../interfaceAdapters/adapters/inMemory/AccountRepositoryMemory";
import {BankRepositoryMemory} from "../interfaceAdapters/adapters/inMemory/BankRepositoryMemory";
import {ClientRepositoryMemory} from "../interfaceAdapters/adapters/inMemory/ClientRepositoryMemory";
import {CreateAccount} from "./CreateAccount";

describe('useCase - CreateAccount', () => {
	let createAccount : CreateAccount;
	beforeEach(() => {
		const clientRepository = new ClientRepositoryMemory();
		const client = new Client('id_client', 'guilherme', '15/01/1996', '43398765478');
		clientRepository.save(client);

		const bankRepository = new BankRepositoryMemory();
		const bank = new Bank('id_bank', 'itau');
		bankRepository.save(bank);

		const repository = new AccountRepositoryMemory();
		createAccount = new CreateAccount(repository, clientRepository, bankRepository);
	});

	test('create account not throw', async () => {
		const account = new Account('id', 'id_client', 'id_bank', 100);
		expect(createAccount.execute(account)).resolves.not.toThrow();
	});

	test('create account throw if parse a client nonexistent', async () => {
		const account = new Account('id', 'id_client_nonexistent', 'id_bank', 100);
		expect(createAccount.execute(account)).rejects.toThrow();
	});

	test('create account throw if parse a bank nonexistent', async () => {
		const account = new Account('id', 'id_client', 'id_bank_nonexistent', 100);
		expect(createAccount.execute(account)).rejects.toThrow();
	});
});
