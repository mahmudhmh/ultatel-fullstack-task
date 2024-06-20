import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { StudentTableComponent } from '../student-table/student-table.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  imports: [
    CommonModule,
    StudentTableComponent,
    RouterModule,
    HttpClientModule,
  ],
})
export class HomeComponent {
  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    console.log('user logged out');
  }
}
