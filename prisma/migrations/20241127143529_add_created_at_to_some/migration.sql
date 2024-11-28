/*
  Warnings:

  - The primary key for the `article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `authorId` on the `article` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `article` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Article` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Article_authorId_fkey` ON `article`;

-- AlterTable
ALTER TABLE `article` DROP PRIMARY KEY,
    DROP COLUMN `authorId`,
    DROP COLUMN `color`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);
