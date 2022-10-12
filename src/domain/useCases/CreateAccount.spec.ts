import {Account} from "../entities/Account";
import {AccountRepositoryMemory} from "../interfaceAdapters/repository/inMemory/AccountRepositoryMemory";
import {CreateAccount} from "./CreateAccount";

describe('useCase - CreateAccount', () => {
	let createAccount : CreateAccount;
	beforeEach(() => {
		const repository = new AccountRepositoryMemory();
		createAccount = new CreateAccount(repository);
	});

	test('create account not throw', async () => {
		const account = new Account('id', 'id_client', 'id_bank', 100);
		expect(createAccount.execute(account)).resolves.not.toThrow();
	});

	test('create account throw if parse a client nonexistent', async () => {
		const account = new Account('id', 'id_client_nonexistent', 'id_bank', 100);
		expect(createAccount.execute(account)).resolves.not.toThrow();
	});

	test('create account throw if parse a bank nonexistent', async () => {
		const account = new Account('id', 'id_client', 'id_bank_nonexistent', 100);
		expect(createAccount.execute(account)).resolves.not.toThrow();
	});
});
