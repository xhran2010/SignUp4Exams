
SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
 `userID` VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 `email` VARCHAR(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 `activation` BOOLEAN NOT NULL DEFAULT FALSE ,
 `password` CHAR(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 PRIMARY KEY (`userID`, `email`)) ENGINE = InnoDB;

DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
 `userID` VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 `username` VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 `gender` CHAR(1) NOT NULL ,
 `age` TINYINT NOT NULL ,
 `phone` VARCHAR(20) NOT NULL ,
 PRIMARY KEY (`userID`)) ENGINE = InnoDB;

DROP TABLE IF EXISTS `subjects`;
CREATE TABLE `subjects` (
 `subjectID` VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 `subjectName` VARCHAR(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 `subjectCost` DOUBLE NOT NULL ,
 `subjectRule` VARCHAR(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NULL DEFAULT NULL ,
 PRIMARY KEY (`subjectID`)) ENGINE = InnoDB;


INSERT INTO `subjects` (`subjectID`, `subjectName`, `subjectCost`, `subjectRule`) VALUES ('123', '语文', '34.0', NULL);


SET FOREIGN_KEY_CHECKS = 1;