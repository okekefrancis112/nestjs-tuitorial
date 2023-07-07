import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomer() {
    return {
      id: 1,
      name: 'Okeke Francis',
      email: 'okeke98@gmail.com',
      createdAt: new Date(),
    };
  }
}
