import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      name: 'Okeke Francis',
      email: `okeke98@gmail.com`,
      createdAt: new Date(),
    },
    {
      id: 2,
      name: 'Okeke Franc',
      email: 'okeke9@gmail.com',
      createdAt: new Date(),
    },
    {
      id: 3,
      name: 'Okeke Fran',
      email: 'okeke@gmail.com',
      createdAt: new Date(),
    },
  ];

  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
