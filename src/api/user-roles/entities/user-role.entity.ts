import { Role } from 'src/api/roles/entities/role.entity';
import { User } from 'src/api/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserRole {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @ManyToOne(() => User, (user) => user.userRoles, { nullable: false })
  @JoinColumn({name: 'user_id'})
  user!: User;

  @ManyToOne(() => Role, (role) => role.userRoles, { nullable: false })
  @JoinColumn({name: 'role_id'})
  role!: Role;
}
