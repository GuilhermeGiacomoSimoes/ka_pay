import { AccountRepositoryInterface } from "../../interfaceAdapters/interfaces/repository/AccountRepositoryInterface";
import { Account } from "../Account";

export async function getAccountById(uuid: string, repository: AccountRepositoryInterface): Promise<Account> {
    const account = await repository.getAccountById(uuid);
	if(account == undefined || account == null) throw new Error('Account not found');
    return account;
}