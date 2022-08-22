import {CLientResponse} from "../common/client.response";

export interface IClientRepository {
	findClientById(id: string) : Promise<CLientResponse>;
}
