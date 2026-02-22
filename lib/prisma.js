import { PrismaClient } from "@prisma/client";
import { DATABASE_URL } from "../utils/config";
export const prisma = new PrismaClient({
    datasources: {
        db: {
            url: DATABASE_URL
        }
    }
});
