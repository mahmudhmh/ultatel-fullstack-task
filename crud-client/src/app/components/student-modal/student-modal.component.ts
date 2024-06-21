import { Component, Input, ViewEncapsulation } from '@angular/core';
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
  styleUrls: ['./student-modal.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    RouterModule,
    HttpClientModule,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class StudentModalComponent {
  @Input() student: any = {
    firstName: '',
    lastName: '',
    age: '',
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

  ngOnInit() {
    this.showOverlay();
  }

  ngOnDestroy() {
    this.hideOverlay();
  }

  private showOverlay() {
    const overlay = document.querySelector('.modal-overlay') as HTMLElement;
    if (overlay) {
      overlay.style.display = 'block';
      document.body.classList.add('modal-open');
    }
  }

  private hideOverlay() {
    const overlay = document.querySelector('.modal-overlay') as HTMLElement;
    if (overlay) {
      overlay.style.display = 'none';
      document.body.classList.remove('modal-open');
    }
  }

  dismiss() {
    this.hideOverlay();
    this.activeModal.dismiss();
  }

  save() {
    if (this.student.id) {
      this.studentService.updateStudent(this.student).subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: `Student: ${
              this.student.firstName + ' ' + this.student.lastName
            } Saved Successfully, Happy Editing!`,
            confirmButtonColor: '#00a2e7',
            confirmButtonText: 'Continue',
            timer: 3000,
          });
          this.activeModal.close(this.student);
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `Student: ${
              this.student.firstName + ' ' + this.student.lastName
            } Cannot be edited, Try Again!`,
            confirmButtonColor: '#ff0000',
            confirmButtonText: 'Try again',
            timer: 2000,
          });
        }
      );
    } else {
      this.studentService.createStudent(this.student).subscribe(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: `Student: ${
              this.student.firstName + ' ' + this.student.lastName
            } Added Successfully, Add More Love More!`,
            confirmButtonColor: '#00a2e7',
            confirmButtonText: 'Continue',
            timer: 3000,
          });
          this.activeModal.close(this.student);
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: `Student: ${
              this.student.firstName + ' ' + this.student.lastName
            } Cannot be Added, Try Again!`,
            confirmButtonColor: '#ff0000',
            confirmButtonText: 'Try again',
            timer: 2000,
          });
        }
      );
    }
    this.hideOverlay();
  }
}
