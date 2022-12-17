import {DATA_SOURCES} from "./var.config";
import mysql from 'mysql';

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
		console.log('connect in database');
	});
	
	return true;
}

function end(): boolean {
	connection.end(err => {
		if(err) throw new Error(`End DB: ${err}`);
		console.log('end database');
	});

	return true;
}

export const execute = async <T>(query: string, params: string[] | Object) => {
	if(init()) {
		const queryResult = 
			connection.query(query, params, (err, result) => {
				if(err) return Promise.reject(err);
				else return Promise.resolve(result);
			});

		end();
		return new Promise<T>((resolve, reject) => {queryResult});
	}

	Promise.reject('Error when connect in database');
}


