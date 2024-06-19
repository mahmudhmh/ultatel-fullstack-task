// src/seeder/seeds/student.seeder.ts
import { Factory, Seeder } from 'typeorm-seeding';
import { Student } from '../../student/entities/student.entity';

export default class CreateStudents implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(Student)().createMany(10);
  }
}
