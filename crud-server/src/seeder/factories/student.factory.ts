// src/seeder/factories/student.factory.ts
import { define } from 'typeorm-seeding';
import { Student } from '../../student/entities/student.entity';
import { faker } from '@faker-js/faker';
import { random } from 'faker';

define(Student, () => {
  const student = new Student();
  student.firstName = faker.name.firstName();
  student.lastName = faker.name.lastName();
  student.age = faker.datatype.number({ min: 18, max: 30 });
  student.gender = random.arrayElement(['male', 'female']);
  student.email = faker.internet.email();
  student.country = faker.address.country();
  return student;
});
