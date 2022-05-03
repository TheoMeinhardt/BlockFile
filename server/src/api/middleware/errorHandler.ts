import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line no-unused-vars
function errorHandler(err: any, req: Request, res: Response, next: NextFunction): void {
  console.error(err);
  res.status(500).send(err.message);
}

export default errorHandler;
