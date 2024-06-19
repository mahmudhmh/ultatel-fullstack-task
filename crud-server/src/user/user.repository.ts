import { EntityRepository } from 'typeorm';
// src/user/user.repository.ts
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  constructor(@InjectRepository(User) repository: Repository<User>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }

  async createUser(
    email: string,
    password: string,
    fullName: string,
  ): Promise<User> {
    const user = this.create({ email, password, fullName });
    await this.save(user);
    return user;
  }
}
