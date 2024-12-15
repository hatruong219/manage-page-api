import { Manga } from 'src/api/manga/entities/manga.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    length: 255,
    type: 'varchar',
    nullable: false,
  })
  name: string;

  @Column({
    length: 255,
    type: 'varchar',
    nullable: true,
  })
  description: string;

  @OneToMany(() => Manga, (manga) => manga.category, { nullable: true })
  mangas: Manga[];
}
