import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './api/users/users.module';
import { RolesModule } from './api/roles/roles.module';
import { UserRolesModule } from './api/user-roles/user-roles.module';
import { CategoriesModule } from './api/categories/categories.module';
import { MangasModule } from './api/mangas/mangas.module';
import { MangaModule } from './api/manga/manga.module';
import { ChaptersModule } from './api/chapters/chapters.module';
import { MangaPagesModule } from './api/manga-pages/manga-pages.module';
import { MangaesModule } from './api/mangaes/mangaes.module';
import { MangasModule } from './api/mangas/mangas.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/.env.${process.env.PROJECT_ENV}`,
      isGlobal: false,
    }),
    UsersModule,
    RolesModule,
    UserRolesModule,
    CategoriesModule,
    MangasModule,
    ChaptersModule,
    MangaPagesModule,
    MangaesModule,
    MangaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
