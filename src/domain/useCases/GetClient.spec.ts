import { ClientRepositoryMemory } from "../interfaceAdapters/adapters/inMemory/ClientRepositoryMemory";
import { GetClient } from "./GetClient";
import { Client } from '../entities/Client';
import { ClientRepositoryInterface } from "../interfaceAdapters/interfaces/repository/ClientRepositoryInterface";

describe('', () => {

    const repository: ClientRepositoryInterface = new ClientRepositoryMemory();
    let useCase : GetClient;
    beforeEach(() => {
        useCase = new GetClient(repository);
    });

    it('test if return exists client', async () => {
        const client = new Client(
            '1234',
            'taylor',
	        '30/11/2022',
	        '555555555555' 
        );
        await repository.save(client);

        expect(await useCase.execute('1234')).toEqual({
            _id: '1234',
            _name: 'taylor',
	        _birthDate:  '30/11/2022',
	        _cpfCnpj: '555555555555' 
        });
    });

    it('test if return non exists client', async () => {
        expect(await useCase.execute('123')).toEqual(null);
    });

});