import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.Port,
  database_url: process.env.DBURL,
  default_password : process.env.Default_Password,
  bycript_salt : process.env.BCRYPT_SLAT
};
