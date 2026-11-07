import { config } from 'dotenv';

// Gunakan backtick (`) untuk template string dan tambahkan .local di akhir (sesuai video)
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const { PORT, NODE_ENV, DB_URI } = process.env;