import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  users: string[] = ['john', 'peter', 'judy'];

  getFirstUser() {
    return this.users[0];
  }
}
