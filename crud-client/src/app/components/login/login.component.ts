import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, RouterModule, CommonModule, HttpClientModule],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `Welcome ${this.email}, you are logged in!`,
          confirmButtonColor: '#00a2e7',
          confirmButtonText: 'Continue',
          timer: 2000,
        });
        this.router.navigate(['/home']);
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
}
