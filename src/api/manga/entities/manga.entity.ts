import { Category } from 'src/api/categories/entities/category.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MANGA_STATUS } from '../constant';
import { User } from 'src/api/users/entities/user.entity';
import { Chapter } from 'src/api/chapters/entities/chapter.entity';

@Entity()
export class Manga {
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
    nullable: false,
  })
  description: string;

  @Column({
    name: 'image_url',
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  imageUrl: string;

  @Column({
    type: 'enum',
    enum: MANGA_STATUS,
    default: MANGA_STATUS.ONGOING,
    nullable: false,
  })
  status!: MANGA_STATUS;

  @ManyToOne(() => Category, (category) => category.mangas, { nullable: false })
  @JoinColumn({ name: 'category_id' })
  category!: Category;

  @OneToMany(() => Chapter, (chapter) => chapter.manga, { nullable: true })
  chapters: Chapter[];
}
