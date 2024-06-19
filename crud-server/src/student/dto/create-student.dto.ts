import { IsString, IsInt, IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateStudentDto {
  @ApiProperty({
    example: 'John',
    description: 'The first name of the student',
  })
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({
    example: 'Doe',
    description: 'The last name of the student',
  })
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    example: 25,
    description: 'The age of the student',
  })
  @IsInt()
  age: number;

  @ApiProperty({
    example: 'male',
    description: 'The gender of the student',
  })
  @IsString()
  gender: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: 'The email of the student',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'USA',
    description: 'The country of the student',
  })
  @IsString()
  country: string;
}
