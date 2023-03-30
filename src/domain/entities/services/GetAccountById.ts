import { AccountRepositoryInterface } from "../../interfaceAdapters/interfaces/repository/AccountRepositoryInterface";

export async function getAccountById(uuid: string, repository: AccountRepositoryInterface) {
    const account = repository.getAccountById(uuid);
	if(!account) throw new Error('Account not found');
    return account;
}