import { QueryResult } from 'pg';
import pool from '../../config/dbconfig';

async function getKey(): Promise<string> {
  const query = 'SELECT * FROM jwtKey';
  const result: QueryResult = await pool.query(query);

  return result.rows[0].key;
}

async function updateKey(newKey: string): Promise<void> {
  const text = 'UPDATE jwtKey SET key = $1';
  const params = [newKey];

  await pool.query(text, params);
}

export { getKey, updateKey };
