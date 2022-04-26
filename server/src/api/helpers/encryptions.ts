import bcrypt from 'bcrypt';

// function which takes a string as a parameter and hashes it with bcrypt
async function hashPassword(pw: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(pw, saltRounds);

  return hashedPassword;
}

// function which checks a user's password against the passworwd hash fetched from database
async function checkPassword(pw: string, hash: string): Promise<boolean> {
  const result: boolean = await bcrypt.compare(pw, hash);
  return result;
}

export { hashPassword, checkPassword };
