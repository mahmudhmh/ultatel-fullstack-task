import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { StudentService } from './services/student.service';
import { NgSelectModule } from '@ng-select/ng-select';
@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterModule,
    CommonModule,
    HttpClientModule,
    RouterOutlet,
    NgSelectModule,
  ],
  providers: [AuthService, AuthGuard, StudentService],
})
export class AppComponent {
  title = 'ultatel-frontend';

  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
