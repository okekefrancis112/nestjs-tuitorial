import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomers.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
  constructor(private customersService: CustomersService) {}
  @Get(':id')
  getCustomer(
    @Param('id', ParseIntPipe) id: number,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) {
      res.send(customer);
    } else {
      res.status(404).send({ message: 'Customer not found' });
    }
  }

  @Get('/search/:id')
  searchCustomerById(@Param('id', ParseIntPipe) id: number) {
    const customer = this.customersService.findCustomerById(id);
    if (customer) return customer;
    else throw new HttpException('Customer not found', HttpStatus.BAD_REQUEST);
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
    this.customersService.createCustomer(createCustomerDto);
  }
}
