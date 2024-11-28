/*
  Warnings:

  - You are about to drop the column `date` on the `article` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Article_authorId_fkey` ON `article`;

-- AlterTable
ALTER TABLE `article` DROP COLUMN `date`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AddForeignKey
ALTER TABLE `Article` ADD CONSTRAINT `Article_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
