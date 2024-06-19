import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  @ApiProperty({
    example: 'John',
    description: 'The first name of the student',
    required: false,
  })
  firstName?: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The last name of the student',
    required: false,
  })
  lastName?: string;

  @ApiProperty({
    example: 25,
    description: 'The age of the student',
    required: false,
  })
  age?: number;

  @ApiProperty({
    example: 'male',
    description: 'The gender of the student',
    required: false,
  })
  gender?: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email of the student',
    required: false,
  })
  email?: string;

  @ApiProperty({
    example: 'USA',
    description: 'The country of the student',
    required: false,
  })
  country?: string;
}
