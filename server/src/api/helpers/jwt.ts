import jwt, { JwtPayload } from 'jsonwebtoken';
import { randomString } from '.';
import * as db from '../models';

async function createToken(sub: string, name: string): Promise<string> {
  const currentTime: number = Math.round(Date.now() / 1000);
  const key: string = await db.getKey();

  const payload: JwtPayload = {
    sub,
    name,
    iat: currentTime,
    exp: currentTime + 15 * 60,
  };

  const token: string = jwt.sign(payload, key);

  return token;
}

async function verifyToken(token: string): Promise<JwtPayload | string> {
  try {
    const key: string = await db.getKey();
    const payload: JwtPayload | string = jwt.verify(token, key);

    return payload;
  } catch (err: any) {
    return err.message;
  }
}

async function updateKey(): Promise<void> {
  const newKey: string = randomString(64);
  await db.updateKey(newKey);
}

updateKey();

export { createToken, verifyToken, updateKey };
