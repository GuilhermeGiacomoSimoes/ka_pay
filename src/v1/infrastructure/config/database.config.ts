import {MySqlDataDourceToken} from "src/v1/application/dependency-inversion/typeorm.decorator";
import {DataSource} from "typeorm";

export const databaseProviders = [
	{
		provide : MySqlDataDourceToken,
		useFactory : async () => {
			const dataSource = new DataSource({
				type: 'mysql',
				host: '127.0.0.1',
				port: 3306,
				username: 'root',
				password: 'root',
				database: 'ka_pay',
				entities : [
					__dirname + '/../**/*.entity{.ts,.js}'
				], 
				synchronize: false  
			}); 

			return dataSource.initialize();
		}
	}
];
