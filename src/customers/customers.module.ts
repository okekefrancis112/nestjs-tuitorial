import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { CustomersService } from './services/customers/customers.service';
import { ValidateCustomerMiddleware } from './services/middlewares/validate-customer.middleware';
import { ValidateCustomerAccountMiddleware } from './services/middlewares/validate-customer-account.middleware';
import { NextFunction, Request, Response } from 'express';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        ValidateCustomerMiddleware,
        ValidateCustomerAccountMiddleware,
        (req: Request, res: Response, next: NextFunction) => {
          console.log('Last Middleware');
          next();
        },
      )
      .forRoutes(
        CustomersController,
        // {
        //   path: 'customers/search/:id',
        //   method: RequestMethod.GET,
        // },
        // {
        //   path: 'customers/:id',
        //   method: RequestMethod.GET,
        // },
      );
  }
}

export class CustomerssModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValidateCustomerMiddleware)
      .exclude(
        {
          path: 'api/customers/create',
          method: RequestMethod.POST,
        },
        {
          path: 'api/customers',
          method: RequestMethod.GET,
        },
      )
      .forRoutes(
        CustomersController,
        // {
        //   path: 'customers/search/:id',
        //   method: RequestMethod.GET,
        // },
        // {
        //   path: 'customers/:id',
        //   method: RequestMethod.GET,
        // },
      );
  }
}
