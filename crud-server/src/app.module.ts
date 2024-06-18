import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from './config/database.config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      ...databaseConfig,
      type: 'mysql',
    }),
    AuthModule,
    UsersModule,
    StudentsModule,
  ],
})
export class AppModule {
  constructor() {
    console.log('JWT_SECRET:', process.env.JWT_SECRET);
  }
}
