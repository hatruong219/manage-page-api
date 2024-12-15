import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { USER_STATUS } from '../constant';
import { UserRole } from 'src/api/user-roles/entities/user-role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({
    type: 'varchar',
    length: 255,
  })
  name: string;

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

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles: UserRole[];
}
