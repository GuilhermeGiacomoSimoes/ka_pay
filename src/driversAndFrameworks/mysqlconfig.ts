import {DATA_SOURCES} from "./var.config";
import mysql from "mysql2";

const dataSource = DATA_SOURCES.mySqlDataSource;

const connection = mysql.createConnection({
	host: dataSource.DB_HOST,
	user: dataSource.DB_USER,
	password: dataSource.DB_PASSWORD,
	database: dataSource.DB_DATABASE
});

function init() : boolean {
	connection.connect(err => {
		if(err) throw new Error(`Open DB: ${err}`);
	});
	
	return true;
}

function end(): boolean {
	connection.end(err => {
		if(err) throw new Error(`End DB: ${err}`);
	});

	return true;
}

export async function execute<T>(query: string, params: string[]) : Promise<T> {
	if(init()) {
		const queryResult = 
			connection.query(query, params, (err, result) => {
				end();
				return err ? Promise.reject(err) : Promise.resolve(result);
			});

		return new Promise<T>((resolve, reject) => queryResult);
	}

	return Promise.reject('Error when connect in database');
}