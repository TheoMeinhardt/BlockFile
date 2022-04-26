import jwt, { JwtPayload } from 'jsonwebtoken';

function createToken(sub: string, name: string): string {
  const currentTime: number = Math.round(Date.now() / 1000);

  const payload: JwtPayload = {
    sub,
    name,
    iat: currentTime,
    exp: currentTime + 15 * 60,
  };

  const token: string = jwt.sign(payload, 'test');

  return token;
}

function verifyToken(token: string): JwtPayload | string {
  try {
    const payload = jwt.verify(token, 'test');
    return payload;
  } catch (err) {
    return 'Invalid token';
  }
}

export { createToken, verifyToken };
