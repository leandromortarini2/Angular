import { UserService } from './../../../services/user.service';
import { Component, computed, inject, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../../interfaces/req-response';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    @if (user()) {
    <app-title [title]="titleLabel()"></app-title>
    <section class="">
      <img [srcset]="user()!.avatar" alt="user()!.first_name" />

      <p class="text-2xl font-semibold">
        {{ user()!.first_name }} {{ user()!.last_name }}
      </p>
      <p class="text-lg">{{ user()!.email }}</p>
    </section>
    }@else {
    <p>Cargando...</p>
    }
  `,
})
export default class UserComponent {
  private route = inject(ActivatedRoute);

  private UsersService = inject(UserService);
  // public user = signal<User | undefined>(undefined);

  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.UsersService.getUserById(id))
    )
  );

  // titleLabel= Informacion del usuario: Tracy Ramos

  public titleLabel = computed(
    () =>
      `Informacion del usuario: ${this.user()?.first_name} ${
        this.user()?.last_name
      }`
  );
}
