import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
  private users: User[] = [
    { id: 1, username: 'admin', password: 'password' },
    { id: 2, username: 'password', password: 'admin' },
    { id: 3, username: 'user', password: 'password' },
    { id: 4, username: 'test', password: 'password' },
  ];

  // getUsers() {
  //   return this.users.map((user) => plainToClass(SerializedUser, user));
  // }

  getUsers() {
    return this.users.map((user) => new SerializedUser(user));
  }

  getUserByUsername(username: string) {
    return this.users.find((user) => user.username === username);
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
