import { Establishment } from 'src/v1/establishment/entities/establishment.entity';
import {ShopKeeper} from 'src/v1/shopkeeper/entities/shopkeeper.entity';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

export const configMySqlLocal: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'ka_pay',
  entities: [Establishment, ShopKeeper],
  migrations: ['src/v1/migrations/*.migration.ts'],
  cli: {
    migrationsDir: 'src/v1/migrations',
    entitiesDir: './src/v1/**/*.entity.ts',
  },
  synchronize: true,
};

export const configMySQLDocker: MysqlConnectionOptions = {
  type: 'mysql',
  host: 'mysql',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'ka_pay',
  synchronize: true,
  entities: [Establishment, ShopKeeper],
  migrations: ['./src/v1/migrations/*.migration.ts'],
  cli: {
    migrationsDir: './src/v1/migrations',
    entitiesDir: './src/v1/**/*.entity.ts',
  },
};
