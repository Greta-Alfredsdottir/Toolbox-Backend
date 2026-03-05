import { PrismaClient } from "@prisma/client/extension";
// autocomplite because of prisma
console.log(PrismaClient);

const prisma = new PrismaClient({
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});
console.log(prisma);

const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("DB Connected via Prisma");
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    process.exit(1);
  }
};

const disconnectDB = async () => {
  await prisma.$connect();
};

export { prisma, connectDB, disconnectDB };
