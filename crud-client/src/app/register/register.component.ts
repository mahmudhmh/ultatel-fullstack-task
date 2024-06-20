import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-register',
  templateUrl: './register.component.html',
  imports: [FormsModule, RouterModule, CommonModule, HttpClientModule],
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      Swal.fire('Error', 'Passwords do not match', 'error');
      return;
    }

    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
    };
    this.authService.register(userData).subscribe(
      (response) => {
        Swal.fire('Success', 'Registered successfully', 'success');
        this.router.navigate(['/login']);
      },
      (error) => {
        Swal.fire('Error', 'Registration failed', 'error');
      }
    );
  }
}
