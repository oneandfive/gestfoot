CREATE DATABASE gest_foot;

USE gest_foot;

CREATE TABLE `gest_foot`.`gest_user` (
  `USER_ID` INT NOT NULL,
  `USER_FIRST_NAME` VARCHAR(45) NOT NULL,
  `USER_LAST_NAME` VARCHAR(100) NOT NULL,
  `USER_EMAIL` VARCHAR(100) NOT NULL,
  `USER_PASSWORD` VARCHAR(80) NOT NULL,
  `USER_PHONE` VARCHAR(10) NULL,
  PRIMARY KEY (`USER_ID`),
  UNIQUE INDEX `USER_ID_UNIQUE` (`USER_ID` ASC) VISIBLE);

  ALTER TABLE `gest_foot`.`gest_user` 
CHANGE COLUMN `USER_ID` `USER_ID` INT NOT NULL AUTO_INCREMENT ;

ALTER TABLE `gest_foot`.`gest_user` 
ADD COLUMN `USER_DATE_CREATE` DATETIME NULL AFTER `USER_PHONE`,
ADD COLUMN `USER_USU_CREATE` INT NULL AFTER `USER_DATE_CREATE`,
ADD COLUMN `USER_DATE_MOD` DATETIME NULL AFTER `USER_USU_CREATE`,
ADD COLUMN `USER_USU_MOD` INT NULL AFTER `USER_DATE_MOD`;

INSERT INTO `gest_foot`.`gest_user` (`USER_ID`, `USER_FIRST_NAME`, `USER_LAST_NAME`, `USER_EMAIL`, `USER_PASSWORD`, `USER_PHONE`) VALUES ('1', 'ADMIN', 'GLOBAL', 'admin@gestfoot.com', '1234', '987456321');

SELECT * FROM GEST_USER;