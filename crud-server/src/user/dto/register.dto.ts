import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  Matches,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The full name of the user',
  })
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  fullName: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the user',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  password: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password confirmation of the user',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/password/, { message: 'Passwords do not match' })
  confirmPassword: string;
}
