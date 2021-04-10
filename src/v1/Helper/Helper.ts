import { createCipheriv, randomBytes } from 'crypto';
import { promisify } from 'util';

async function encrypt(param: string, pass: string) {
  const iv = randomBytes(16);
  const key = (await promisify(scrypt)(pass, 'salt',32)) as Buffer;
  const cipher = createCipheriv('aes-256-ctr', key, iv)

  const encryptedText = Buffer.concat([
    cipher.update(pass),
	cipher.final(),
  ]);
}
