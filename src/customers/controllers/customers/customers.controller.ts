import { Controller, Get } from '@nestjs/common';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get('')
  getCustomer(): { id: number; name: string; email: string; createdAt: Date } {
    return this.customersService.findCustomer();
  }
}
