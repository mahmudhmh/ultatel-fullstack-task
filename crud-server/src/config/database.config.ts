export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'student_management',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
