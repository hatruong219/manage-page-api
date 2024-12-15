import { Controller } from '@nestjs/common';
import { MangaPagesService } from './manga-pages.service';

@Controller('manga-pages')
export class MangaPagesController {
  constructor(private readonly mangaPagesService: MangaPagesService) {}
}
