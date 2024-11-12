import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { TitleComponent } from '../../../shared/title/title.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, TitleComponent, RouterModule],
  templateUrl: './users.component.html',
})
export default class UsersComponent {
  // INJECT hace que se inyecte el servicio como si fuera en el constructor
  public usersService = inject(UserService);
}
