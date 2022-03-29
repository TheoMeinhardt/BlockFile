import { Pool } from 'pg';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const pool = new Pool();

export default pool;
