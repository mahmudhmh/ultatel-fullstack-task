import { Test, TestingModule } from '@nestjs/testing';
import { StudentService } from './student.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';

// Mock repository with necessary functions
const mockStudentRepository = {
  create: jest.fn(),
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

describe('StudentService', () => {
  let service: StudentService;
  let repository: jest.Mocked<Repository<Student>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        StudentService,
        {
          provide: getRepositoryToken(Student),
          useValue: mockStudentRepository,
        },
      ],
    }).compile();

    service = module.get<StudentService>(StudentService);
    repository = module.get(getRepositoryToken(Student)) as jest.Mocked<
      Repository<Student>
    >;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createStudent', () => {
    it('should successfully create a student', async () => {
      const createStudentDto = {
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        gender: 'male',
        email: 'john.doe@example.com',
        country: 'USA',
      };

      const createdStudent: Student = {
        id: 1,
        ...createStudentDto,
      };

      repository.create.mockReturnValue(createdStudent);
      repository.save.mockResolvedValue(createdStudent);

      const result = await service.createStudent(createStudentDto as any);
      expect(result).toEqual(createdStudent);
      expect(repository.create).toHaveBeenCalledWith(createStudentDto);
      expect(repository.save).toHaveBeenCalledWith(createdStudent);
    });
  });

  describe('getAllStudents', () => {
    it('should return an array of students', async () => {
      const students: Student[] = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          age: 20,
          gender: 'male',
          email: 'john.doe@example.com',
          country: 'USA',
        },
      ];

      repository.find.mockResolvedValue(students);

      const result = await service.getAllStudents();
      expect(result).toEqual(students);
      expect(repository.find).toHaveBeenCalled();
    });
  });

  describe('getStudentById', () => {
    it('should return a student by id', async () => {
      const student: Student = {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        age: 20,
        gender: 'male',
        email: 'john.doe@example.com',
        country: 'USA',
      };

      repository.findOne.mockResolvedValue(student);

      const result = await service.getStudentById(1);
      expect(result).toEqual(student);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw a NotFoundException if student not found', async () => {
      repository.findOne.mockResolvedValue(null);

      await expect(service.getStudentById(1)).rejects.toThrow(
        NotFoundException,
      );
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });
  });

  describe('updateStudent', () => {
    it('should update a student', async () => {
      const updateStudentDto = { firstName: 'Jane', lastName: 'Doe' };
      const updatedStudent: Student = {
        id: 1,
        ...updateStudentDto,
        age: 21,
        gender: 'female',
        email: 'jane.doe@example.com',
        country: 'USA',
      };

      const mockUpdateResult = {
        affected: 1,
        raw: [],
        generatedMaps: [],
      };

      repository.update.mockResolvedValue(mockUpdateResult as any);
      repository.findOne.mockResolvedValue(updatedStudent);

      const result = await service.updateStudent(1, updateStudentDto as any);
      expect(result).toEqual(updatedStudent);
      expect(repository.update).toHaveBeenCalledWith(1, updateStudentDto);
      expect(repository.findOne).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should throw a NotFoundException if student not found', async () => {
      const mockUpdateResult = {
        affected: 0,
        raw: [],
        generatedMaps: [],
      };

      repository.update.mockResolvedValue(mockUpdateResult as any);

      await expect(service.updateStudent(1, {} as any)).rejects.toThrow(
        NotFoundException,
      );
      expect(repository.update).toHaveBeenCalledWith(1, {});
    });
  });

  describe('deleteStudent', () => {
    it('should delete a student', async () => {
      const mockDeleteResult = {
        affected: 1,
        raw: [],
      };

      repository.delete.mockResolvedValue(mockDeleteResult as any);

      await service.deleteStudent(1);
      expect(repository.delete).toHaveBeenCalledWith(1);
    });

    it('should throw a NotFoundException if student not found', async () => {
      const mockDeleteResult = {
        affected: 0,
        raw: [],
      };

      repository.delete.mockResolvedValue(mockDeleteResult as any);

      await expect(service.deleteStudent(1)).rejects.toThrow(NotFoundException);
      expect(repository.delete).toHaveBeenCalledWith(1);
    });
  });
});
