import * as bcrypt from 'bcrypt';

export function hash_transform(param: string): Promise<string> {
  const hash = bcrypt.hash(param, 32);
  return hash;
}

export function hash_cmp(param: string, hash: string): Promise<boolean> {
  const result = bcrypt.compare(param, hash);
  return result;
}
