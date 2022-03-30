import { dbuser } from '../types';
import * as db from '../database';

// function which uses id handed over as a parameter to check if a user exists and returns a boolean
async function userExists(id: number): Promise<boolean> {
  const userData: dbuser = await db.getDbuserData(id);

  return userData !== undefined;
}

export default userExists;
