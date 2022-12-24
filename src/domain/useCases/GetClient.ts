import { Client } from "../entities/Client";
import { ClientRepositoryInterface } from "../interfaceAdapters/repository/ClientRepositoryInterface";

export class GetClient {
    private readonly repository: ClientRepositoryInterface;
    constructor(repository: ClientRepositoryInterface) {
        this.repository = repository;
    }

    async execute(id: string): Promise<Client | null> {
        return await this.repository.getClientById(id);
    }
}