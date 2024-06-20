import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { StudentService } from '../../services/student.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-student-modal',
  templateUrl: './student-modal.component.html',
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    RouterModule,
    HttpClientModule,
  ],
})
export class StudentModalComponent {
  @Input() student: any = {
    firstName: '',
    lastName: '',
    age: null,
    country: '',
    gender: '',
    email: '',
  };

  @Input() countries: string[] = ['Egypt', 'USA', 'UK'];
  @Input() genders: string[] = ['Male', 'Female', 'Other'];

  constructor(
    public activeModal: NgbActiveModal,
    private studentService: StudentService
  ) {}

  dismiss() {
    this.activeModal.dismiss();
  }

  save() {
    if (this.student.id) {
      this.studentService.updateStudent(this.student).subscribe(
        () => {
          Swal.fire('Success', 'Student updated successfully', 'success');
          this.activeModal.close(this.student);
        },
        (error) => {
          Swal.fire('Error', 'Failed to update student', 'error');
        }
      );
    } else {
      this.studentService.createStudent(this.student).subscribe(
        () => {
          Swal.fire('Success', 'Student added successfully', 'success');
          this.activeModal.close(this.student);
        },
        (error) => {
          Swal.fire('Error', 'Failed to add student', 'error');
        }
      );
    }
  }
}
