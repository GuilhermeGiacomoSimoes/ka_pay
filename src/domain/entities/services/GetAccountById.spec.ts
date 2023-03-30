import { AccountRepositoryMemory } from "../../interfaceAdapters/adapters/inMemory/AccountRepositoryMemory";
import {AccountRepositoryInterface} from "../../interfaceAdapters/interfaces/repository/AccountRepositoryInterface";
import { getAccountById } from "./GetAccountById";
import { Account } from '../Account';

describe('get account by id', () => {

    test('verify throw if return account null', async () => {
        const repository = new AccountRepositoryMemory();
        const uuid = 'uuid-unknow';
        await expect(getAccountById(uuid, repository)).rejects.toThrow();
    });

    test('verify nor throw if return valid value', async () => {
        const repository = new AccountRepositoryMemory();

        const uuid = 'uuid-acount-test-null';
        const uuidClient = 'uuid-client-test-null';
        const uuidBank = 'uuid-bank-test-null';
        const money = 100;

        await repository.save(new Account(uuid, uuidClient, uuidBank, 100));
        await expect(getAccountById(uuid, repository)).resolves.not.toThrow();
    });
});