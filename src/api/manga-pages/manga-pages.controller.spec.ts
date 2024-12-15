import { Test, TestingModule } from '@nestjs/testing';
import { MangaPagesController } from './manga-pages.controller';
import { MangaPagesService } from './manga-pages.service';

describe('MangaPagesController', () => {
  let controller: MangaPagesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MangaPagesController],
      providers: [MangaPagesService],
    }).compile();

    controller = module.get<MangaPagesController>(MangaPagesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
