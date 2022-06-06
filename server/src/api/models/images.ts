import { QueryResult } from 'pg';
import pool from '../../config/dbconfig';

async function getImage(id: number, imageHash: string): Promise<string> {
  const text: string = 'SELECT hash FROM image_hash WHERE uid = $1 AND hash = $2';
  const params: string[] = [String(id), imageHash];

  const result: QueryResult = await pool.query(text, params);
  return result.rows[0];
}

async function getImageHashes(id: number): Promise<string[]> {
  const text: string = 'SELECT * FROM image_hash WHERE uid = $1';
  const params: number[] = [id];

  const result: QueryResult = await pool.query(text, params);
  return result.rows;
}

async function saveImage(id: number, imageHash: string): Promise<void> {
  const text: string = 'INSERT INTO image_hash (uid, hash) VALUES ($1, $2)';
  const params: string[] = [String(id), imageHash];

  await pool.query(text, params);
}

export { getImage, getImageHashes, saveImage };
