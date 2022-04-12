import { NextFunction, Request, Response } from 'express';
import { Injectable, Logger, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(`${req.ip} ${req.method} ${req.originalUrl}`);

    res.on('finish', () => {
      this.logger.log(res.statusCode);
    });
    // console.log(req.ip);
    // console.log(req.originalUrl);
    next();
  }
}
