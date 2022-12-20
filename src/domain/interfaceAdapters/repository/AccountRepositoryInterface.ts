import {Account} from "../../entities/Account";

export interface AccountRepositoryInterface {
	save(acoount: Account): any;
	update(acoount: Account) : any;
	getAccountById(uuid: string) : Promise<Account | undefined>;
	listAccounts(): Promise<Account[]>;
}
