import { randomBytes } from 'crypto';

function randomString(length: number): string {
  return randomBytes(Math.ceil(length / 2))
    .toString('hex')
    .slice(0, length);
}

export default randomString;
