/*
  Warnings:

  - Added the required column `sprintId` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sprintNumber` to the `cards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "sprintId" TEXT NOT NULL,
ADD COLUMN     "sprintNumber" INTEGER NOT NULL;
