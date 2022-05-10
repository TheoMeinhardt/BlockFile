import { dbuser } from '../types';
import * as db from '../models';

// function which uses id handed over as a parameter to check if a user exists and returns a boolean
async function userExists(id: number): Promise<boolean> {
  const userData: dbuser = await db.getDbuserData(id);

  return userData !== undefined;
}

// function which uses email handed over as a parameter to check if a user exists and returns a boolean
async function emailExists(email: string): Promise<boolean> {
  const userData: dbuser = await db.getDbuserDataByEmail(email);

  return userData !== undefined;
}

export { userExists, emailExists };
