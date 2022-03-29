import bcrypt from 'bcrypt';

// function which takes a string as a parameter and hashes it with bcrypt
async function hashPassword(pw: string): Promise<string> {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(pw, saltRounds);

  return hashedPassword;
}

export default hashPassword;
