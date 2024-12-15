import { DataSource } from 'typeorm';

const connectionSource: DataSource = new DataSource({
  type: 'postgres',
  host: '127.0.0.1',
  username: 'postgres',
  password: 'postgres',
  port: 5432,
  database: 'manga_page_api',
  // extra: {
  //   ssl: process.env.DB_USESSL.includes('true'),
  // },
  synchronize: false,
  entities: ['dist/api/**/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  migrationsTableName: 'migrations',
});

export default connectionSource;

