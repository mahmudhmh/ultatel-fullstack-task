import { Repository } from 'typeorm';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentRepository extends Repository<Student> {
  constructor(@InjectRepository(Student) repository: Repository<Student>) {
    super(repository.target, repository.manager, repository.queryRunner);
  }
}
