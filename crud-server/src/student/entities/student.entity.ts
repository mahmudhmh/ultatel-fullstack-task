import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: 1, description: 'The unique ID of the student' })
  id: number;

  @Column()
  @ApiProperty({
    example: 'John',
    description: 'The first name of the student',
  })
  firstName: string;

  @Column()
  @ApiProperty({ example: 'Doe', description: 'The last name of the student' })
  lastName: string;

  @Column()
  @ApiProperty({ example: 25, description: 'The age of the student' })
  age: number;

  @Column()
  @ApiProperty({ example: 'male', description: 'The gender of the student' })
  gender: string;

  @Column({ unique: true })
  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email of the student',
  })
  email: string;

  @Column()
  @ApiProperty({ example: 'USA', description: 'The country of the student' })
  country: string;
}
