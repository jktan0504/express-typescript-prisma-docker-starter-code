import { PrismaClient } from "@prisma/client";

const db = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
    errorFormat: 'pretty',
    datasources: {
        db: {
            url: process.env.DATABASE_URL,
        },
    },
});

db.$on('beforeExit', async () => {
    await db.$disconnect();
});

export default db;