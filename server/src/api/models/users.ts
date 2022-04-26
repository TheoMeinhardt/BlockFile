import { QueryResult } from 'pg';
import pool from '../../config/dbconfig';
import { dbuser } from '../types';

async function getDbuserData(uid: number): Promise<dbuser> {
  const text: string = 'SELECT * FROM blockfileuser WHERE uid = $1';
  const params: number[] = [uid];

  const data: QueryResult<dbuser> = await pool.query(text, params);
  const rows: dbuser = data.rows[0];

  return rows;
}

async function getAllUsers(): Promise<dbuser[]> {
  const text: string = 'SELECT * FROM blockfileuser';
  const { rows } = await pool.query(text, []);

  return rows;
}

async function postDbuserData(user: dbuser): Promise<any[]> {
  const text: string = 'INSERT INTO blockfileuser (uid, firstname, lastname, password, email) VALUES (default, $1, $2, $3, $4);';
  const params: string[] = [user.firstname, user.lastname, user.password, user.email];

  const { rows } = await pool.query(text, params);

  return rows;
}

async function patchDbUser(uid: number, user: dbuser): Promise<any[]> {
  const text: string = 'UPDATE blockfileuser SET firstname = $1, lastname = $2, password = $3, email = $4 WHERE uid = $5';
  const params: string[] = [user.firstname, user.lastname, user.password, user.email, String(uid)];

  const { rows } = await pool.query(text, params);

  return rows;
}

async function delDbuser(uid: number): Promise<any[]> {
  const text: string = 'DELETE FROM blockfileuser WHERE uid = $1';
  const params: number[] = [uid];

  const { rows } = await pool.query(text, params);

  return rows;
}

export { getDbuserData, getAllUsers, delDbuser, postDbuserData, patchDbUser };
