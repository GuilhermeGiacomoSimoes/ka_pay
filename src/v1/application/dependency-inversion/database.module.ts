import {Module} from "@nestjs/common";
import {databaseProviders} from "src/v1/infrastructure/config/database.config";

@Module({
	providers: [... databaseProviders],
	exports: [... databaseProviders]
})
export class DatabaseModule {}
