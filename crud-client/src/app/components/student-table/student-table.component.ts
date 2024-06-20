import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from '../../services/student.service';
import Swal from 'sweetalert2';
import { StudentModalComponent } from '../student-modal/student-modal.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    RouterModule,
    HttpClientModule,
    NgbPaginationModule,
  ],
})
export class StudentTableComponent implements OnInit {
  students: any[] = [];
  paginatedStudents: any[] = [];
  currentPage = 1;
  pageSize = 10;
  filters = { name: '', age: null, country: '', gender: '' };
  sortField = '';
  sortOrder = '';

  countries = ['Egypt', 'USA', 'UK'];
  genders = ['Male', 'Female'];

  constructor(
    private studentService: StudentService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.loadStudents();
    this.paginate();
  }

  loadStudents() {
    this.studentService.getStudents().subscribe(
      (data) => (this.students = data),
      (error) => Swal.fire('Error', 'Failed to load students', 'error')
    );
  }

  search() {
    this.paginate();
  }

  resetFilters() {
    this.filters = {
      name: '',
      age: null,
      country: '',
      gender: '',
    };
    this.loadStudents();
    this.search();
  }
  sort(field: string) {
    if (this.sortField === field) {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortField = field;
      this.sortOrder = 'asc';
    }
    this.paginate();
  }

  paginate() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    const filteredStudents = this.students.filter((student) => {
      return (
        (!this.filters.name ||
          student.firstName
            .toLowerCase()
            .includes(this.filters.name.toLowerCase())) &&
        (!this.filters.age || student.age === this.filters.age) &&
        (!this.filters.country || student.country === this.filters.country) &&
        (!this.filters.gender || student.gender === this.filters.gender)
      );
    });

    this.paginatedStudents = filteredStudents
      .sort((a, b) => {
        if (!this.sortField) return 0;
        const valueA = a[this.sortField];
        const valueB = b[this.sortField];
        return (valueA < valueB ? -1 : 1) * (this.sortOrder === 'asc' ? 1 : -1);
      })
      .slice(start, end);
  }

  openStudentModal(student: any = null) {
    const modalRef = this.modalService.open(StudentModalComponent, {
      size: 'lg',
    });
    modalRef.componentInstance.student = student
      ? { ...student }
      : {
          firstName: '',
          lastName: '',
          age: null,
          country: '',
          gender: '',
          email: '',
        };
    modalRef.componentInstance.countries = this.countries;
    modalRef.componentInstance.genders = this.genders;
    modalRef.result
      .then((result) => {
        if (result) {
          if (student) {
            Object.assign(student, result);
          } else {
            result.id = this.students.length + 1;
            this.students.push(result);
          }
          this.paginate();
        }
      })
      .catch((error) => {});
  }

  deleteStudent(studentId: number) {
    // Call studentService to delete student and refresh table
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this student!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.studentService.deleteStudent(studentId).subscribe(
          () => {
            this.loadStudents();
            this.paginate();
            Swal.fire('Deleted!', 'Student has been deleted.', 'success');
          },
          (error) => {
            Swal.fire('Error', 'Failed to delete student', 'error');
          }
        );
      }
    });
  }
}
