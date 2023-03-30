import { AccountRepositoryInterface } from "../../interfaceAdapters/interfaces/repository/AccountRepositoryInterface";

export async function getAccountById(uuid: string, repository: AccountRepositoryInterface) {
    const account = repository.getAccountById(uuid);
	if(account == undefined || account == null) throw new Error('Account not found');
    return account;
}