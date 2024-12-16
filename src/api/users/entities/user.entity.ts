import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { USER_STATUS } from '../constant';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name!: string;

  @Column({
    name: 'user_name',
    type: 'varchar',
    length: 255,
  })
  userName: string;

  @Column({
    type: 'varchar',
    length: 128,
    nullable: false,
  })
  password!: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    default: '',
  })
  email!: string;

  @Column({
    name: 'avatar_url',
    type: 'varchar',
    length: 255,
  })
  avatarUrl: string;

  @Column({
    type: 'enum',
    enum: USER_STATUS,
    nullable: false,
    default: USER_STATUS.ACTIVE,
  })
  status!: USER_STATUS;
}
