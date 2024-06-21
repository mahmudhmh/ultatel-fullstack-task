import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  imports: [FormsModule, RouterModule, CommonModule, HttpClientModule],
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  showTooltip: boolean = false;
  strengthLevel: string = '';

  requirements = [
    { text: 'At least 8 characters', regex: /.{8,}/, isValid: false },
    { text: 'Contains 1 number', regex: /\d/, isValid: false },
    { text: 'Contains 1 uppercase letter', regex: /[A-Z]/, isValid: false },
    { text: 'Contains 1 lowercase letter', regex: /[a-z]/, isValid: false },
    { text: 'Contains 1 special character', regex: /[\W]/, isValid: false },
  ];

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Password Does Not Match',
        confirmButtonColor: '#ff0000',
        confirmButtonText: 'Try again',
        timer: 4000,
      });
      return;
    }

    const userData = {
      fullName: this.fullName,
      email: this.email,
      password: this.password,
    };

    this.authService.register(userData).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `Welcome ${userData.fullName}, you registered successfully!`,
          confirmButtonColor: '#00a2e7',
          confirmButtonText: 'Continue',
          timer: 2000,
        });
        this.router.navigate(['/login']);
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Invalid email or password',
          confirmButtonColor: '#ff0000',
          confirmButtonText: 'Try again',
          timer: 2000,
        });
      }
    );
  }

  checkPasswordStrength() {
    let score = 0;
    this.requirements.forEach((req) => {
      req.isValid = req.regex.test(this.password);
      if (req.isValid) score++;
    });

    switch (score) {
      case 5:
        this.strengthLevel = 'Strong';
        break;
      case 4:
        this.strengthLevel = 'Medium';
        break;
      case 3:
        this.strengthLevel = 'Weak';
        break;
      case 2:
        this.strengthLevel = 'Very Weak';
        break;
      default:
        break;
    }
  }
}
