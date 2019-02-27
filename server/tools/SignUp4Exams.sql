
SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
 `userID` VARCHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 `email` VARCHAR(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 `activation` BOOLEAN NOT NULL DEFAULT FALSE ,
 `password` CHAR(32) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 PRIMARY KEY (`userID`, `email`)) ENGINE = InnoDB;

DROP TABLE IF EXISTS `userinfo`;
CREATE TABLE `userinfo` (
 `userID` VARCHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 `username` VARCHAR(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 `gender` CHAR(1) NOT NULL ,
 `age` TINYINT NOT NULL ,
 `phone` VARCHAR(20) NOT NULL ,
 PRIMARY KEY (`userID`)) ENGINE = InnoDB;

DROP TABLE IF EXISTS `subjects`;

CREATE TABLE `subjects` ( 
 `subjectID` VARCHAR(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 `subjectName` VARCHAR(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL ,
 `subjectCost` DOUBLE NOT NULL , 
 `registerDeadline` DATETIME NOT NULL , 
 `examTime` DATETIME NOT NULL , 
 `subjectRule` VARCHAR(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL , 
 PRIMARY KEY (`subjectID`)) ENGINE = InnoDB;


INSERT INTO `subjects` (`subjectID`, `subjectName`, `subjectCost`, `registerDeadline`, `examTime`, `subjectRule`) 
VALUES ('123', '语文', '28', '2019-05-01 00:00:00', '2019-06-01 08:00:00', '');


SET FOREIGN_KEY_CHECKS = 1;