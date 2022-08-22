import {CLientResponse} from "src/v1/business/common/client.response";
import {IClientRepository} from "src/v1/business/domain/client-typeorm.repository.interface";
import {ClientTypeORMAdapterRepository} from "src/v1/infrastructure/adapter/typeorm-adapters/client.typeorm.adapter.repository";
import {DataSource, Repository} from "typeorm";
import {ClientTypeORMEntity} from "../entity/client-typeorm-entity";


export class ClientTypeORMRepository implements IClientRepository {

	private readonly dataSource: Repository<ClientTypeORMEntity>;
	constructor(dataSource: DataSource) {
		this.dataSource = dataSource.getRepository(ClientTypeORMEntity);
	}

	async findClientById(id: string): Promise<CLientResponse> {
		const client : ClientTypeORMEntity[] = await this.dataSource.findByIds([id]);
		const clientResponse : CLientResponse = ClientTypeORMAdapterRepository.findById(client[0]);
		return clientResponse;
	}
}
