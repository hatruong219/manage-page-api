import { Test, TestingModule } from '@nestjs/testing';
import { MangaPagesService } from './manga-pages.service';

describe('MangaPagesService', () => {
  let service: MangaPagesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MangaPagesService],
    }).compile();

    service = module.get<MangaPagesService>(MangaPagesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
