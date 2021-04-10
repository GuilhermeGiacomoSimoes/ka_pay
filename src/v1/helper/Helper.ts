import * as bcrypt from 'bcrypt';

export async function encrypt(param: string) {
  const saltOrRounds = 10;
  const hash = await bcrypt.hash(param, saltOrRounds);

  return hash;
}
