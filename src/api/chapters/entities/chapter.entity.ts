import { MangaPage } from 'src/api/manga-pages/entities/manga-page.entity';
import { Manga } from 'src/api/manga/entities/manga.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Chapter {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  description: string;

  @ManyToOne(() => Manga, (manga) => manga.chapters, { nullable: false })
  @JoinColumn({ name: 'manga_id' })
  manga: Manga;

  @OneToMany(() => MangaPage, (mangaPage) => mangaPage.chapter, {
    nullable: true,
  })
  mangaPages: MangaPage[];
}
