import { Request, Response, NextFunction } from 'express';

// eslint-disable-next-line no-unused-vars
function notFoundHandler(req: Request, res: Response, next: NextFunction): void {
  res.status(404).send('Route not found!');
}

export default notFoundHandler;
