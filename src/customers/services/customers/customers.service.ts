import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomers.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'Okeke Francis',
      email: `okeke98@gmail.com`,
    },
    {
      id: 2,
      name: 'Okeke Franc',
      email: 'okeke9@gmail.com',
    },
    {
      id: 3,
      name: 'Okeke Fran',
      email: 'okeke@gmail.com',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((user) => user.id === id);
  }

  createCustomer(customerDto: CreateCustomerDto) {
    this.customers.push(customerDto);
  }
}
