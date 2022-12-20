import {Account} from "../entities/Account";
import {AccountRepositoryMemory} from "../interfaceAdapters/repository/inMemory/AccountRepositoryMemory";
import {TransactionRepositoryMemory} from "../interfaceAdapters/repository/inMemory/TransactionRepositoryMemory";
import {CarryOutTransaction} from "./CarryOutTransaction";

describe('carry out transaction', () => {

	let carryOutTransaction : CarryOutTransaction;
	let account1 : Account;
	let account2 : Account;
	let accountRepository : AccountRepositoryMemory;

	beforeEach(() => {
		const transactionRepository = new TransactionRepositoryMemory();
		accountRepository = new AccountRepositoryMemory();

		account1 = new Account('uuidAccount1', 'uuidClient1', 'uuidBank1', 1000);
		account2 = new Account('uuidAccount2', 'uuidClient2', 'uuidBank1', 5000);
		accountRepository.save(account1);
		accountRepository.save(account2);

		carryOutTransaction = new CarryOutTransaction(transactionRepository, accountRepository);
	});

	const validValues = [
		{value: 100, accountDestination: 'uuidAccount2', accountOrigin: 'uuidAccount1'},
		{value: 50, accountDestination: 'uuidAccount1', accountOrigin: 'uuidAccount2'},
	];
	test.each(validValues)(
		'should complete the transaction without any problmes if carry out transaction with value $value from $accountOrigin to $accountDestination', 
		async ({value, accountDestination, accountOrigin}) => {
				expect(carryOutTransaction.execute(value, accountOrigin, accountDestination)).resolves.not.toThrow();
	});

	const invalidValues = [
		{value: 5001, accountDestination: 'uuidAccount1', accountOrigin: 'uuidAccount2'},
		{value: 1001, accountDestination: 'uuidAccount2', accountOrigin: 'uuidAccount1'},
		{value: 1000, accountDestination: 'uuidAccount3', accountOrigin: 'uuidAccount1'},
		{value: 100, accountDestination: 'uuidAccount2', accountOrigin: 'uuidAccount3'},
	];
	test.each(invalidValues)(
		'should throw if  we pass an amount freater than the source account balance ($value)', 
		async ({value, accountDestination, accountOrigin}) => {
			expect(carryOutTransaction.execute(value, accountOrigin, accountDestination)).rejects.toThrow();
	});

	test('should throw if pass a negative value', async () => {
		expect(carryOutTransaction.execute(-10, 'uuidAccount2', 'uuidAccount1')).rejects.toThrow();
	});

	const expectValues = [
		{value: 100, uuidAccountDestination: 'uuidAccount2', uuidAccountOrigin: 'uuidAccount1', expectMoneyDestination: 5100, expectMoneyOrigin: 900},
		{value: 5000, uuidAccountDestination: 'uuidAccount1', uuidAccountOrigin: 'uuidAccount2', expectMoneyDestination: 6000, expectMoneyOrigin: 0},
		{value: 1000, uuidAccountDestination: 'uuidAccount2', uuidAccountOrigin: 'uuidAccount1', expectMoneyDestination: 6000, expectMoneyOrigin: 0},
	];
	test.each(expectValues)(
	'should withdraw the money from the original account and credit the destination account ($expectMoneyDestination, $expectMoneyOrigin)', 
	async ({value, uuidAccountDestination, uuidAccountOrigin, expectMoneyDestination, expectMoneyOrigin}) => {

		await carryOutTransaction.execute(value, uuidAccountOrigin, uuidAccountDestination).then( async _ => {
			const accountDestination = await accountRepository.getAccountById(uuidAccountDestination); 
			const accountOrigin = await accountRepository.getAccountById(uuidAccountOrigin); 

			expect(accountDestination?.money).toBe(expectMoneyDestination);
			expect(accountOrigin?.money).toBe(expectMoneyOrigin);
		});
	});
});
