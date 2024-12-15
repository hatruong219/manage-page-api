import { Module } from '@nestjs/common';
import { MangaPagesService } from './manga-pages.service';
import { MangaPagesController } from './manga-pages.controller';

@Module({
  controllers: [MangaPagesController],
  providers: [MangaPagesService],
})
export class MangaPagesModule {}
