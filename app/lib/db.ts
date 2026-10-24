import postgres from 'postgres';

// Localy, we can deactivate or make the SSL optionnal since we are using a local postgre database
export const sql = postgres(process.env.POSTGRES_URL!, { ssl: false });
// export const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });