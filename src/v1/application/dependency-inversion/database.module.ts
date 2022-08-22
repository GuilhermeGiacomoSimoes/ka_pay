import {Inject, Module} from "@nestjs/common";
import {databaseProviders} from "src/v1/infrastructure/config/database.config";
import {DataSource} from "typeorm";
import { MySqlDataDourceToken} from "./tokens";

@Module({
	providers: [... databaseProviders],
	exports: [... databaseProviders]
})
export class DatabaseModule {
	constructor(
		@Inject(MySqlDataDourceToken) private dataSource: DataSource
	) {}

	async onModuleInit() {
		await this.dataSource?.initialize();
	}

	async onModuleDestroy() {
		await this.dataSource?.destroy();
	}
}
