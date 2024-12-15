import { Injectable } from '@nestjs/common';
import { CreateMangaPageDto } from './dto/create-manga-page.dto';
import { UpdateMangaPageDto } from './dto/update-manga-page.dto';

@Injectable()
export class MangaPagesService {
  create(createMangaPageDto: CreateMangaPageDto) {
    return 'This action adds a new mangaPage';
  }

  findAll() {
    return `This action returns all mangaPages`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mangaPage`;
  }

  update(id: number, updateMangaPageDto: UpdateMangaPageDto) {
    return `This action updates a #${id} mangaPage`;
  }

  remove(id: number) {
    return `This action removes a #${id} mangaPage`;
  }
}
