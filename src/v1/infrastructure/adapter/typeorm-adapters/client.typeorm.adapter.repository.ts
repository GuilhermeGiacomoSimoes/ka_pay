import {CLientResponse} from "src/v1/business/common/client.response";
import {ClientTypeORMEntity} from "../../persistence/typeorm/client/entity/client-typeorm-entity";

export abstract class ClientTypeORMAdapterRepository {
	static findById(clientRepositoryTypeorm: ClientTypeORMEntity): CLientResponse {
		let client : CLientResponse = new CLientResponse();
		return client;
	}
}
