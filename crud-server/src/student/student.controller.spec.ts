import { Test, TestingModule } from '@nestjs/testing';
import { StudentController } from './student.controller';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

const mockStudentService = {
  createStudent: jest.fn(),
  getAllStudents: jest.fn(),
  getStudentById: jest.fn(),
  updateStudent: jest.fn(),
  deleteStudent: jest.fn(),
};

const mockJwtService = {
  sign: jest.fn(),
  verify: jest.fn(),
};

describe('StudentController', () => {
  let controller: StudentController;
  let service: any;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [
        { provide: StudentService, useValue: mockStudentService },
        { provide: JwtService, useValue: mockJwtService },
        {
          provide: AuthGuard,
          useValue: jest.fn().mockImplementation(() => true),
        },
      ],
    }).compile();

    controller = module.get<StudentController>(StudentController);
    service = module.get<StudentService>(StudentService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createStudent', () => {
    it('should create a student', async () => {
      const createStudentDto: CreateStudentDto = {
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        gender: 'male',
        email: 'john.doe@example.com',
        country: 'USA',
      };

      service.createStudent.mockResolvedValue(createStudentDto);

      const result = await controller.createStudent(createStudentDto);
      expect(result).toEqual(createStudentDto);
    });
  });

  describe('getAllStudents', () => {
    it('should return an array of students', async () => {
      const students = [{ id: 1, firstName: 'John', lastName: 'Doe', age: 20 }];
      service.getAllStudents.mockResolvedValue(students);

      const result = await controller.getAllStudents();
      expect(result).toEqual(students);
    });
  });

  describe('getStudentById', () => {
    it('should return a student by id', async () => {
      const student = { id: 1, firstName: 'John', lastName: 'Doe' };
      service.getStudentById.mockResolvedValue(student);

      const result = await controller.getStudentById(1);
      expect(result).toEqual(student);
    });
  });

  describe('updateStudent', () => {
    it('should update a student', async () => {
      const updateStudentDto: UpdateStudentDto = {
        firstName: 'Jane',
        lastName: 'Doe',
      };
      const student = { id: 1, ...updateStudentDto };

      service.updateStudent.mockResolvedValue(student);

      const result = await controller.updateStudent(1, updateStudentDto);
      expect(result).toEqual(student);
    });
  });

  describe('deleteStudent', () => {
    it('should delete a student', async () => {
      service.deleteStudent.mockResolvedValue(undefined);

      await controller.deleteStudent(1);
      expect(service.deleteStudent).toHaveBeenCalledWith(1);
    });
  });
});
