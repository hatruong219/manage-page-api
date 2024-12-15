import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './api/users/users.module';
import { RolesModule } from './api/roles/roles.module';
import { UserRolesModule } from './api/user-roles/user-roles.module';
import { CategoriesModule } from './api/categories/categories.module';
import { MangaModule } from './api/manga/manga.module';
import { ChaptersModule } from './api/chapters/chapters.module';
import { MangaPagesModule } from './api/manga-pages/manga-pages.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.PROJECT_ENV}`,
      isGlobal: false,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      username: 'postgres',
      password: 'postgres',
      port: 5432,
      database: process.env.DB_NAME,
      // extra: {
      //   ssl: process.env.DB_USESSL.includes('true'),
      // },
      synchronize: false,
      entities: ['dist/**/*entity.js']
    }),
    UsersModule,
    RolesModule,
    UserRolesModule,
    CategoriesModule,
    ChaptersModule,
    MangaPagesModule,
    MangaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
