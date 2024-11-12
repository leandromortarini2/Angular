import { computed, inject, Injectable, signal } from '@angular/core';
import { IState } from '../interfaces/state';
import { HttpClient } from '@angular/common/http';
import { UserResponse, UsersResponse } from '../interfaces/req-response';
import { delay, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private http = inject(HttpClient);

  // # hace que la variable sea privada en ecmaScript
  #state = signal<IState>({
    users: [],
    loading: false,
  });

  public users = computed(() => this.#state().users);
  public loading = computed(() => this.#state().loading);

  constructor() {
    this.http
      .get<UsersResponse>('https://reqres.in/api/users')
      .pipe(delay(1000))
      .subscribe((res) => {
        this.#state.set({
          loading: false,
          users: res.data,
          // users: res,
        });
      });
  }

  getUserById(id: string) {
    return this.http
      .get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1000),
        map((res) => res.data)
      );
  }
}
