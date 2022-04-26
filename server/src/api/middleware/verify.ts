import { Request, Response, NextFunction } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import * as helpers from '../helpers';

async function verifyJWT(token: string | undefined): Promise<{ success: boolean; err?: string }> {
  if (!token) return { success: false, err: 'no token provided' };
  const payload: JwtPayload | string = await helpers.verifyToken(token as string);

  return typeof payload === 'string' ? { success: false, err: payload } : { success: true };
}

async function verify(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { success, err } = await verifyJWT(req.headers.authorization);

    if (!success) {
      res.status(401).send(err);
    } else {
      next();
    }
  } catch (err: any) {
    console.log(err);
    res.status(500).send(err);
  }
}

export default verify;
