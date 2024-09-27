import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Maria Doe' }
  ];

  constructor() {}

  getUsers() {
    return of(this.users);
  }
}
