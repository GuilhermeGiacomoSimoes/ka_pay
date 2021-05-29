import { createConnection } from 'node:net';

export const databaseProvider = [
  {
    provide: 'DATABSE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test',
        entities: [__dirname + '/../**/*.entities{.ts,.js}'],
        synchronize: true,
      }),
  },
];
