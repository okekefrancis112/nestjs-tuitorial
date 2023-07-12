import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ValidateCustomerAccountMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { valid } = req.headers;
    console.log('ValidateCustomerAccount');
    if (valid) next();
    else {
      return res.status(401).send({ error: 'Account is invalid.' });
    }
  }
}
