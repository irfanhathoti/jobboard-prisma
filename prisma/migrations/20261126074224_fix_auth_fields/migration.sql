/*
  Warnings:

  - You are about to drop the column `expire_at` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `emailVarified` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Account" DROP COLUMN "expire_at",
ADD COLUMN     "expires_at" INTEGER;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "emailVarified",
ADD COLUMN     "emailVerified" TIMESTAMP(3);
