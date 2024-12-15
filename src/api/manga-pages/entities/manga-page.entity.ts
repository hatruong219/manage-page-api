import { Chapter } from 'src/api/chapters/entities/chapter.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('manga_page')
export class MangaPage {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    name: 'page_number',
    type: 'int',
    nullable: false,
  })
  pageNumber: number;

  @Column({
    name: 'image_url',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  imageUrl: string;

  @ManyToOne(() => Chapter, (chapter) => chapter.mangaPages, {
    nullable: false,
  })
  @JoinColumn({ name: 'chapter_id' })
  chapter: Chapter;
}
