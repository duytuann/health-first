-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: health_first
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.22.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `activity`
--

DROP TABLE IF EXISTS `activity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity` (
  `id` int NOT NULL AUTO_INCREMENT,
  `facility_id` int DEFAULT NULL,
  `plan_id` int DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  `result_id` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_user_id` int DEFAULT NULL,
  `started_date` date DEFAULT NULL,
  `ended_date` date DEFAULT NULL,
  `conclusion` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_plan_name` (`name`),
  UNIQUE KEY `uni_activity_name` (`name`),
  KEY `fk_activity_facility` (`facility_id`),
  KEY `fk_activity_plan` (`plan_id`),
  KEY `fk_activity_state` (`state_id`),
  KEY `fk_activity_result` (`result_id`),
  KEY `FKss0ejfxdpxuomgbo6kejqcdqr` (`created_user_id`),
  CONSTRAINT `FK14v6823dev8ixlgoe9hb2i0i7` FOREIGN KEY (`plan_id`) REFERENCES `plan` (`id`),
  CONSTRAINT `fk_activity_facility` FOREIGN KEY (`facility_id`) REFERENCES `facility` (`id`),
  CONSTRAINT `fk_activity_result` FOREIGN KEY (`result_id`) REFERENCES `activity_result` (`id`),
  CONSTRAINT `fk_activity_state` FOREIGN KEY (`state_id`) REFERENCES `activity_state` (`id`),
  CONSTRAINT `FKss0ejfxdpxuomgbo6kejqcdqr` FOREIGN KEY (`created_user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity`
--

LOCK TABLES `activity` WRITE;
/*!40000 ALTER TABLE `activity` DISABLE KEYS */;
INSERT INTO `activity` VALUES (1,1,1,1,1,'Activity A','2022-05-20',1,'2022-05-30','2022-06-30','This facility is qualified'),(3,9,1,1,1,'Activity B','2022-05-25',1,'2022-05-21','2022-05-25','This facility needs extra consideration');
/*!40000 ALTER TABLE `activity` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activity_result`
--

DROP TABLE IF EXISTS `activity_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity_result` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_activity_result_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_result`
--

LOCK TABLES `activity_result` WRITE;
/*!40000 ALTER TABLE `activity_result` DISABLE KEYS */;
INSERT INTO `activity_result` VALUES (1,'approved'),(2,'disapproved');
/*!40000 ALTER TABLE `activity_result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `activity_state`
--

DROP TABLE IF EXISTS `activity_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activity_state` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_activity_state_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activity_state`
--

LOCK TABLES `activity_state` WRITE;
/*!40000 ALTER TABLE `activity_state` DISABLE KEYS */;
INSERT INTO `activity_state` VALUES (1,'active'),(2,'inactive');
/*!40000 ALTER TABLE `activity_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `ward_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKq7vspx6bqxq5lawbv2calw5lb` (`ward_id`),
  CONSTRAINT `FKq7vspx6bqxq5lawbv2calw5lb` FOREIGN KEY (`ward_id`) REFERENCES `ward` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
INSERT INTO `address` VALUES (1,'108 Ngoc Trao TP Thanh Hoa',1),(2,'117 Nguyen Van Giap',2),(3,'594 Duong Lang',2),(4,'30 Tran Huu Duc',1),(5,'30 Tran Huu Duc',13),(7,'108 Nguyen Van Troi',1),(11,'108 Nguyen Van Troi',1),(14,'108 Nguyen Van Troi',1),(17,'108 Nguyen Van Troi',1),(19,'30 Tran Huu Duc',13),(20,'30 Tran Huu Duc',13),(21,'30 Tran Huu Duc',13),(22,'31 Tran Huu Duc',18),(23,'31 Tran Huu Duc',18),(24,'31 Tran Huu Duc',18),(25,'32 Tran Huu Duc',18),(26,'32 Tran Huu Duc',18);
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `business_type`
--

DROP TABLE IF EXISTS `business_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `business_type` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_business_type` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `business_type`
--

LOCK TABLES `business_type` WRITE;
/*!40000 ALTER TABLE `business_type` DISABLE KEYS */;
INSERT INTO `business_type` VALUES (2,'Drink'),(1,'Food');
/*!40000 ALTER TABLE `business_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `certificate`
--

DROP TABLE IF EXISTS `certificate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certificate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `facility_id` int DEFAULT NULL,
  `certificate_number` varchar(255) DEFAULT NULL,
  `published_date` date DEFAULT NULL,
  `expired_date` date DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_certificate_code` (`certificate_number`),
  KEY `fk_certificate_facility` (`facility_id`),
  KEY `fk_certificate_state` (`state_id`),
  CONSTRAINT `fk_certificate_facility` FOREIGN KEY (`facility_id`) REFERENCES `facility` (`id`),
  CONSTRAINT `fk_certificate_state` FOREIGN KEY (`state_id`) REFERENCES `certificate_state` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificate`
--

LOCK TABLES `certificate` WRITE;
/*!40000 ALTER TABLE `certificate` DISABLE KEYS */;
INSERT INTO `certificate` VALUES (1,9,'CERT-001','2022-05-22','2022-06-08',2),(2,9,'CERT-002','2022-05-20','2022-05-25',2),(3,10,'CERT-003','2022-05-21','2022-07-30',1),(5,1,'CERT-004','2022-05-21','2022-05-25',1),(7,1,'CERT-006','2020-01-01','2021-01-01',1);
/*!40000 ALTER TABLE `certificate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `certificate_state`
--

DROP TABLE IF EXISTS `certificate_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certificate_state` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_certificate_state` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificate_state`
--

LOCK TABLES `certificate_state` WRITE;
/*!40000 ALTER TABLE `certificate_state` DISABLE KEYS */;
INSERT INTO `certificate_state` VALUES (2,'active'),(1,'inative'),(3,'withdrawed');
/*!40000 ALTER TABLE `certificate_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `district`
--

DROP TABLE IF EXISTS `district`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `district` (
  `id` int NOT NULL AUTO_INCREMENT,
  `province_id` int DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_district_province` (`province_id`),
  CONSTRAINT `fk_district_province` FOREIGN KEY (`province_id`) REFERENCES `province` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=692 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `district`
--

LOCK TABLES `district` WRITE;
/*!40000 ALTER TABLE `district` DISABLE KEYS */;
INSERT INTO `district` VALUES (1,1,'Quận Ba Đình'),(2,1,'Quận Hoàn Kiếm'),(3,1,'Quận Tây Hồ'),(4,1,'Quận Long Biên'),(5,1,'Quận Cầu Giấy'),(6,1,'Quận Đống Đa'),(7,1,'Quận Hai Bà Trưng'),(8,1,'Quận Hoàng Mai'),(9,1,'Quận Thanh Xuân'),(10,1,'Huyện Sóc Sơn'),(11,1,'Huyện Đông Anh'),(12,1,'Huyện Gia Lâm'),(13,1,'Quận Nam Từ Liêm'),(14,1,'Huyện Thanh Trì'),(15,1,'Quận Bắc Từ Liêm'),(16,1,'Huyện Mê Linh'),(17,1,'Quận Hà Đông'),(18,1,'Thị xã Sơn Tây'),(19,1,'Huyện Ba Vì'),(20,1,'Huyện Phúc Thọ'),(21,1,'Huyện Đan Phượng'),(22,1,'Huyện Hoài Đức'),(23,1,'Huyện Quốc Oai'),(24,1,'Huyện Thạch Thất'),(25,1,'Huyện Chương Mỹ'),(26,1,'Huyện Thanh Oai'),(27,1,'Huyện Thường Tín'),(28,1,'Huyện Phú Xuyên'),(29,1,'Huyện Ứng Hòa'),(30,1,'Huyện Mỹ Đức'),(31,2,'Thành phố Hà Giang'),(32,2,'Huyện Đồng Văn'),(33,2,'Huyện Mèo Vạc'),(34,2,'Huyện Yên Minh'),(35,2,'Huyện Quản Bạ'),(36,2,'Huyện Vị Xuyên'),(37,2,'Huyện Bắc Mê'),(38,2,'Huyện Hoàng Su Phì'),(39,2,'Huyện Xín Mần'),(40,2,'Huyện Bắc Quang'),(41,2,'Huyện Quang Bình'),(42,4,'Thành phố Cao Bằng'),(43,4,'Huyện Bảo Lâm'),(44,4,'Huyện Bảo Lạc'),(45,4,'Huyện Hà Quảng'),(46,4,'Huyện Trùng Khánh'),(47,4,'Huyện Hạ Lang'),(48,4,'Huyện Quảng Hòa'),(49,4,'Huyện Hoà An'),(50,4,'Huyện Nguyên Bình'),(51,4,'Huyện Thạch An'),(52,6,'Thành Phố Bắc Kạn'),(53,6,'Huyện Pác Nặm'),(54,6,'Huyện Ba Bể'),(55,6,'Huyện Ngân Sơn'),(56,6,'Huyện Bạch Thông'),(57,6,'Huyện Chợ Đồn'),(58,6,'Huyện Chợ Mới'),(59,6,'Huyện Na Rì'),(60,8,'Thành phố Tuyên Quang'),(61,8,'Huyện Lâm Bình'),(62,8,'Huyện Na Hang'),(63,8,'Huyện Chiêm Hóa'),(64,8,'Huyện Hàm Yên'),(65,8,'Huyện Yên Sơn'),(66,8,'Huyện Sơn Dương'),(67,10,'Thành phố Lào Cai'),(68,10,'Huyện Bát Xát'),(69,10,'Huyện Mường Khương'),(70,10,'Huyện Si Ma Cai'),(71,10,'Huyện Bắc Hà'),(72,10,'Huyện Bảo Thắng'),(73,10,'Huyện Bảo Yên'),(74,10,'Thị xã Sa Pa'),(75,10,'Huyện Văn Bàn'),(76,11,'Thành phố Điện Biên Phủ'),(77,11,'Thị Xã Mường Lay'),(78,11,'Huyện Mường Nhé'),(79,11,'Huyện Mường Chà'),(80,11,'Huyện Tủa Chùa'),(81,11,'Huyện Tuần Giáo'),(82,11,'Huyện Điện Biên'),(83,11,'Huyện Điện Biên Đông'),(84,11,'Huyện Mường Ảng'),(85,11,'Huyện Nậm Pồ'),(86,12,'Thành phố Lai Châu'),(87,12,'Huyện Tam Đường'),(88,12,'Huyện Mường Tè'),(89,12,'Huyện Sìn Hồ'),(90,12,'Huyện Phong Thổ'),(91,12,'Huyện Than Uyên'),(92,12,'Huyện Tân Uyên'),(93,12,'Huyện Nậm Nhùn'),(94,14,'Thành phố Sơn La'),(95,14,'Huyện Quỳnh Nhai'),(96,14,'Huyện Thuận Châu'),(97,14,'Huyện Mường La'),(98,14,'Huyện Bắc Yên'),(99,14,'Huyện Phù Yên'),(100,14,'Huyện Mộc Châu'),(101,14,'Huyện Yên Châu'),(102,14,'Huyện Mai Sơn'),(103,14,'Huyện Sông Mã'),(104,14,'Huyện Sốp Cộp'),(105,14,'Huyện Vân Hồ'),(106,15,'Thành phố Yên Bái'),(107,15,'Thị xã Nghĩa Lộ'),(108,15,'Huyện Lục Yên'),(109,15,'Huyện Văn Yên'),(110,15,'Huyện Mù Căng Chải'),(111,15,'Huyện Trấn Yên'),(112,15,'Huyện Trạm Tấu'),(113,15,'Huyện Văn Chấn'),(114,15,'Huyện Yên Bình'),(115,17,'Thành phố Hòa Bình'),(116,17,'Huyện Đà Bắc'),(117,17,'Huyện Lương Sơn'),(118,17,'Huyện Kim Bôi'),(119,17,'Huyện Cao Phong'),(120,17,'Huyện Tân Lạc'),(121,17,'Huyện Mai Châu'),(122,17,'Huyện Lạc Sơn'),(123,17,'Huyện Yên Thủy'),(124,17,'Huyện Lạc Thủy'),(125,19,'Thành phố Thái Nguyên'),(126,19,'Thành phố Sông Công'),(127,19,'Huyện Định Hóa'),(128,19,'Huyện Phú Lương'),(129,19,'Huyện Đồng Hỷ'),(130,19,'Huyện Võ Nhai'),(131,19,'Huyện Đại Từ'),(132,19,'Thành phố Phổ Yên'),(133,19,'Huyện Phú Bình'),(134,20,'Thành phố Lạng Sơn'),(135,20,'Huyện Tràng Định'),(136,20,'Huyện Bình Gia'),(137,20,'Huyện Văn Lãng'),(138,20,'Huyện Cao Lộc'),(139,20,'Huyện Văn Quan'),(140,20,'Huyện Bắc Sơn'),(141,20,'Huyện Hữu Lũng'),(142,20,'Huyện Chi Lăng'),(143,20,'Huyện Lộc Bình'),(144,20,'Huyện Đình Lập'),(145,22,'Thành phố Hạ Long'),(146,22,'Thành phố Móng Cái'),(147,22,'Thành phố Cẩm Phả'),(148,22,'Thành phố Uông Bí'),(149,22,'Huyện Bình Liêu'),(150,22,'Huyện Tiên Yên'),(151,22,'Huyện Đầm Hà'),(152,22,'Huyện Hải Hà'),(153,22,'Huyện Ba Chẽ'),(154,22,'Huyện Vân Đồn'),(155,22,'Thị xã Đông Triều'),(156,22,'Thị xã Quảng Yên'),(157,22,'Huyện Cô Tô'),(158,24,'Thành phố Bắc Giang'),(159,24,'Huyện Yên Thế'),(160,24,'Huyện Tân Yên'),(161,24,'Huyện Lạng Giang'),(162,24,'Huyện Lục Nam'),(163,24,'Huyện Lục Ngạn'),(164,24,'Huyện Sơn Động'),(165,24,'Huyện Yên Dũng'),(166,24,'Huyện Việt Yên'),(167,24,'Huyện Hiệp Hòa'),(168,25,'Thành phố Việt Trì'),(169,25,'Thị xã Phú Thọ'),(170,25,'Huyện Đoan Hùng'),(171,25,'Huyện Hạ Hoà'),(172,25,'Huyện Thanh Ba'),(173,25,'Huyện Phù Ninh'),(174,25,'Huyện Yên Lập'),(175,25,'Huyện Cẩm Khê'),(176,25,'Huyện Tam Nông'),(177,25,'Huyện Lâm Thao'),(178,25,'Huyện Thanh Sơn'),(179,25,'Huyện Thanh Thuỷ'),(180,25,'Huyện Tân Sơn'),(181,26,'Thành phố Vĩnh Yên'),(182,26,'Thành phố Phúc Yên'),(183,26,'Huyện Lập Thạch'),(184,26,'Huyện Tam Dương'),(185,26,'Huyện Tam Đảo'),(186,26,'Huyện Bình Xuyên'),(187,26,'Huyện Yên Lạc'),(188,26,'Huyện Vĩnh Tường'),(189,26,'Huyện Sông Lô'),(190,27,'Thành phố Bắc Ninh'),(191,27,'Huyện Yên Phong'),(192,27,'Huyện Quế Võ'),(193,27,'Huyện Tiên Du'),(194,27,'Thành phố Từ Sơn'),(195,27,'Huyện Thuận Thành'),(196,27,'Huyện Gia Bình'),(197,27,'Huyện Lương Tài'),(198,30,'Thành phố Hải Dương'),(199,30,'Thành phố Chí Linh'),(200,30,'Huyện Nam Sách'),(201,30,'Thị xã Kinh Môn'),(202,30,'Huyện Kim Thành'),(203,30,'Huyện Thanh Hà'),(204,30,'Huyện Cẩm Giàng'),(205,30,'Huyện Bình Giang'),(206,30,'Huyện Gia Lộc'),(207,30,'Huyện Tứ Kỳ'),(208,30,'Huyện Ninh Giang'),(209,30,'Huyện Thanh Miện'),(210,31,'Quận Hồng Bàng'),(211,31,'Quận Ngô Quyền'),(212,31,'Quận Lê Chân'),(213,31,'Quận Hải An'),(214,31,'Quận Kiến An'),(215,31,'Quận Đồ Sơn'),(216,31,'Quận Dương Kinh'),(217,31,'Huyện Thuỷ Nguyên'),(218,31,'Huyện An Dương'),(219,31,'Huyện An Lão'),(220,31,'Huyện Kiến Thuỵ'),(221,31,'Huyện Tiên Lãng'),(222,31,'Huyện Vĩnh Bảo'),(223,31,'Huyện Cát Hải'),(224,31,'Huyện Bạch Long Vĩ'),(225,33,'Thành phố Hưng Yên'),(226,33,'Huyện Văn Lâm'),(227,33,'Huyện Văn Giang'),(228,33,'Huyện Yên Mỹ'),(229,33,'Thị xã Mỹ Hào'),(230,33,'Huyện Ân Thi'),(231,33,'Huyện Khoái Châu'),(232,33,'Huyện Kim Động'),(233,33,'Huyện Tiên Lữ'),(234,33,'Huyện Phù Cừ'),(235,34,'Thành phố Thái Bình'),(236,34,'Huyện Quỳnh Phụ'),(237,34,'Huyện Hưng Hà'),(238,34,'Huyện Đông Hưng'),(239,34,'Huyện Thái Thụy'),(240,34,'Huyện Tiền Hải'),(241,34,'Huyện Kiến Xương'),(242,34,'Huyện Vũ Thư'),(243,35,'Thành phố Phủ Lý'),(244,35,'Thị xã Duy Tiên'),(245,35,'Huyện Kim Bảng'),(246,35,'Huyện Thanh Liêm'),(247,35,'Huyện Bình Lục'),(248,35,'Huyện Lý Nhân'),(249,36,'Thành phố Nam Định'),(250,36,'Huyện Mỹ Lộc'),(251,36,'Huyện Vụ Bản'),(252,36,'Huyện Ý Yên'),(253,36,'Huyện Nghĩa Hưng'),(254,36,'Huyện Nam Trực'),(255,36,'Huyện Trực Ninh'),(256,36,'Huyện Xuân Trường'),(257,36,'Huyện Giao Thủy'),(258,36,'Huyện Hải Hậu'),(259,37,'Thành phố Ninh Bình'),(260,37,'Thành phố Tam Điệp'),(261,37,'Huyện Nho Quan'),(262,37,'Huyện Gia Viễn'),(263,37,'Huyện Hoa Lư'),(264,37,'Huyện Yên Khánh'),(265,37,'Huyện Kim Sơn'),(266,37,'Huyện Yên Mô'),(267,38,'Thành phố Thanh Hóa'),(268,38,'Thị xã Bỉm Sơn'),(269,38,'Thành phố Sầm Sơn'),(270,38,'Huyện Mường Lát'),(271,38,'Huyện Quan Hóa'),(272,38,'Huyện Bá Thước'),(273,38,'Huyện Quan Sơn'),(274,38,'Huyện Lang Chánh'),(275,38,'Huyện Ngọc Lặc'),(276,38,'Huyện Cẩm Thủy'),(277,38,'Huyện Thạch Thành'),(278,38,'Huyện Hà Trung'),(279,38,'Huyện Vĩnh Lộc'),(280,38,'Huyện Yên Định'),(281,38,'Huyện Thọ Xuân'),(282,38,'Huyện Thường Xuân'),(283,38,'Huyện Triệu Sơn'),(284,38,'Huyện Thiệu Hóa'),(285,38,'Huyện Hoằng Hóa'),(286,38,'Huyện Hậu Lộc'),(287,38,'Huyện Nga Sơn'),(288,38,'Huyện Như Xuân'),(289,38,'Huyện Như Thanh'),(290,38,'Huyện Nông Cống'),(291,38,'Huyện Đông Sơn'),(292,38,'Huyện Quảng Xương'),(293,38,'Thị xã Nghi Sơn'),(294,40,'Thành phố Vinh'),(295,40,'Thị xã Cửa Lò'),(296,40,'Thị xã Thái Hoà'),(297,40,'Huyện Quế Phong'),(298,40,'Huyện Quỳ Châu'),(299,40,'Huyện Kỳ Sơn'),(300,40,'Huyện Tương Dương'),(301,40,'Huyện Nghĩa Đàn'),(302,40,'Huyện Quỳ Hợp'),(303,40,'Huyện Quỳnh Lưu'),(304,40,'Huyện Con Cuông'),(305,40,'Huyện Tân Kỳ'),(306,40,'Huyện Anh Sơn'),(307,40,'Huyện Diễn Châu'),(308,40,'Huyện Yên Thành'),(309,40,'Huyện Đô Lương'),(310,40,'Huyện Thanh Chương'),(311,40,'Huyện Nghi Lộc'),(312,40,'Huyện Nam Đàn'),(313,40,'Huyện Hưng Nguyên'),(314,40,'Thị xã Hoàng Mai'),(315,42,'Thành phố Hà Tĩnh'),(316,42,'Thị xã Hồng Lĩnh'),(317,42,'Huyện Hương Sơn'),(318,42,'Huyện Đức Thọ'),(319,42,'Huyện Vũ Quang'),(320,42,'Huyện Nghi Xuân'),(321,42,'Huyện Can Lộc'),(322,42,'Huyện Hương Khê'),(323,42,'Huyện Thạch Hà'),(324,42,'Huyện Cẩm Xuyên'),(325,42,'Huyện Kỳ Anh'),(326,42,'Huyện Lộc Hà'),(327,42,'Thị xã Kỳ Anh'),(328,44,'Thành Phố Đồng Hới'),(329,44,'Huyện Minh Hóa'),(330,44,'Huyện Tuyên Hóa'),(331,44,'Huyện Quảng Trạch'),(332,44,'Huyện Bố Trạch'),(333,44,'Huyện Quảng Ninh'),(334,44,'Huyện Lệ Thủy'),(335,44,'Thị xã Ba Đồn'),(336,45,'Thành phố Đông Hà'),(337,45,'Thị xã Quảng Trị'),(338,45,'Huyện Vĩnh Linh'),(339,45,'Huyện Hướng Hóa'),(340,45,'Huyện Gio Linh'),(341,45,'Huyện Đa Krông'),(342,45,'Huyện Cam Lộ'),(343,45,'Huyện Triệu Phong'),(344,45,'Huyện Hải Lăng'),(345,45,'Huyện Cồn Cỏ'),(346,46,'Thành phố Huế'),(347,46,'Huyện Phong Điền'),(348,46,'Huyện Quảng Điền'),(349,46,'Huyện Phú Vang'),(350,46,'Thị xã Hương Thủy'),(351,46,'Thị xã Hương Trà'),(352,46,'Huyện A Lưới'),(353,46,'Huyện Phú Lộc'),(354,46,'Huyện Nam Đông'),(355,48,'Quận Liên Chiểu'),(356,48,'Quận Thanh Khê'),(357,48,'Quận Hải Châu'),(358,48,'Quận Sơn Trà'),(359,48,'Quận Ngũ Hành Sơn'),(360,48,'Quận Cẩm Lệ'),(361,48,'Huyện Hòa Vang'),(362,48,'Huyện Hoàng Sa'),(363,49,'Thành phố Tam Kỳ'),(364,49,'Thành phố Hội An'),(365,49,'Huyện Tây Giang'),(366,49,'Huyện Đông Giang'),(367,49,'Huyện Đại Lộc'),(368,49,'Thị xã Điện Bàn'),(369,49,'Huyện Duy Xuyên'),(370,49,'Huyện Quế Sơn'),(371,49,'Huyện Nam Giang'),(372,49,'Huyện Phước Sơn'),(373,49,'Huyện Hiệp Đức'),(374,49,'Huyện Thăng Bình'),(375,49,'Huyện Tiên Phước'),(376,49,'Huyện Bắc Trà My'),(377,49,'Huyện Nam Trà My'),(378,49,'Huyện Núi Thành'),(379,49,'Huyện Phú Ninh'),(380,49,'Huyện Nông Sơn'),(381,51,'Thành phố Quảng Ngãi'),(382,51,'Huyện Bình Sơn'),(383,51,'Huyện Trà Bồng'),(384,51,'Huyện Sơn Tịnh'),(385,51,'Huyện Tư Nghĩa'),(386,51,'Huyện Sơn Hà'),(387,51,'Huyện Sơn Tây'),(388,51,'Huyện Minh Long'),(389,51,'Huyện Nghĩa Hành'),(390,51,'Huyện Mộ Đức'),(391,51,'Thị xã Đức Phổ'),(392,51,'Huyện Ba Tơ'),(393,51,'Huyện Lý Sơn'),(394,52,'Thành phố Quy Nhơn'),(395,52,'Thị xã Hoài Nhơn'),(396,52,'Huyện Hoài Ân'),(397,52,'Huyện Phù Mỹ'),(398,52,'Huyện Vĩnh Thạnh'),(399,52,'Huyện Tây Sơn'),(400,52,'Huyện Phù Cát'),(401,52,'Thị xã An Nhơn'),(402,52,'Huyện Tuy Phước'),(403,52,'Huyện Vân Canh'),(404,54,'Thành phố Tuy Hoà'),(405,54,'Thị xã Sông Cầu'),(406,54,'Huyện Đồng Xuân'),(407,54,'Huyện Tuy An'),(408,54,'Huyện Sơn Hòa'),(409,54,'Huyện Sông Hinh'),(410,54,'Huyện Tây Hoà'),(411,54,'Huyện Phú Hoà'),(412,54,'Thị xã Đông Hòa'),(413,56,'Thành phố Nha Trang'),(414,56,'Thành phố Cam Ranh'),(415,56,'Huyện Cam Lâm'),(416,56,'Huyện Vạn Ninh'),(417,56,'Thị xã Ninh Hòa'),(418,56,'Huyện Khánh Vĩnh'),(419,56,'Huyện Diên Khánh'),(420,56,'Huyện Khánh Sơn'),(421,56,'Huyện Trường Sa'),(422,58,'Thành phố Phan Rang-Tháp Chàm'),(423,58,'Huyện Bác Ái'),(424,58,'Huyện Ninh Sơn'),(425,58,'Huyện Ninh Hải'),(426,58,'Huyện Ninh Phước'),(427,58,'Huyện Thuận Bắc'),(428,58,'Huyện Thuận Nam'),(429,60,'Thành phố Phan Thiết'),(430,60,'Thị xã La Gi'),(431,60,'Huyện Tuy Phong'),(432,60,'Huyện Bắc Bình'),(433,60,'Huyện Hàm Thuận Bắc'),(434,60,'Huyện Hàm Thuận Nam'),(435,60,'Huyện Tánh Linh'),(436,60,'Huyện Đức Linh'),(437,60,'Huyện Hàm Tân'),(438,60,'Huyện Phú Quí'),(439,62,'Thành phố Kon Tum'),(440,62,'Huyện Đắk Glei'),(441,62,'Huyện Ngọc Hồi'),(442,62,'Huyện Đắk Tô'),(443,62,'Huyện Kon Plông'),(444,62,'Huyện Kon Rẫy'),(445,62,'Huyện Đắk Hà'),(446,62,'Huyện Sa Thầy'),(447,62,'Huyện Tu Mơ Rông'),(448,62,'Huyện Ia H\' Drai'),(449,64,'Thành phố Pleiku'),(450,64,'Thị xã An Khê'),(451,64,'Thị xã Ayun Pa'),(452,64,'Huyện KBang'),(453,64,'Huyện Đăk Đoa'),(454,64,'Huyện Chư Păh'),(455,64,'Huyện Ia Grai'),(456,64,'Huyện Mang Yang'),(457,64,'Huyện Kông Chro'),(458,64,'Huyện Đức Cơ'),(459,64,'Huyện Chư Prông'),(460,64,'Huyện Chư Sê'),(461,64,'Huyện Đăk Pơ'),(462,64,'Huyện Ia Pa'),(463,64,'Huyện Krông Pa'),(464,64,'Huyện Phú Thiện'),(465,64,'Huyện Chư Pưh'),(466,66,'Thành phố Buôn Ma Thuột'),(467,66,'Thị Xã Buôn Hồ'),(468,66,'Huyện Ea H\'leo'),(469,66,'Huyện Ea Súp'),(470,66,'Huyện Buôn Đôn'),(471,66,'Huyện Cư M\'gar'),(472,66,'Huyện Krông Búk'),(473,66,'Huyện Krông Năng'),(474,66,'Huyện Ea Kar'),(475,66,'Huyện M\'Đrắk'),(476,66,'Huyện Krông Bông'),(477,66,'Huyện Krông Pắc'),(478,66,'Huyện Krông A Na'),(479,66,'Huyện Lắk'),(480,66,'Huyện Cư Kuin'),(481,67,'Thành phố Gia Nghĩa'),(482,67,'Huyện Đăk Glong'),(483,67,'Huyện Cư Jút'),(484,67,'Huyện Đắk Mil'),(485,67,'Huyện Krông Nô'),(486,67,'Huyện Đắk Song'),(487,67,'Huyện Đắk R\'Lấp'),(488,67,'Huyện Tuy Đức'),(489,68,'Thành phố Đà Lạt'),(490,68,'Thành phố Bảo Lộc'),(491,68,'Huyện Đam Rông'),(492,68,'Huyện Lạc Dương'),(493,68,'Huyện Lâm Hà'),(494,68,'Huyện Đơn Dương'),(495,68,'Huyện Đức Trọng'),(496,68,'Huyện Di Linh'),(497,68,'Huyện Đạ Huoai'),(498,68,'Huyện Đạ Tẻh'),(499,68,'Huyện Cát Tiên'),(500,70,'Thị xã Phước Long'),(501,70,'Thành phố Đồng Xoài'),(502,70,'Thị xã Bình Long'),(503,70,'Huyện Bù Gia Mập'),(504,70,'Huyện Lộc Ninh'),(505,70,'Huyện Bù Đốp'),(506,70,'Huyện Hớn Quản'),(507,70,'Huyện Đồng Phú'),(508,70,'Huyện Bù Đăng'),(509,70,'Huyện Chơn Thành'),(510,70,'Huyện Phú Riềng'),(511,72,'Thành phố Tây Ninh'),(512,72,'Huyện Tân Biên'),(513,72,'Huyện Tân Châu'),(514,72,'Huyện Dương Minh Châu'),(515,72,'Huyện Châu Thành'),(516,72,'Thị xã Hòa Thành'),(517,72,'Huyện Gò Dầu'),(518,72,'Huyện Bến Cầu'),(519,72,'Thị xã Trảng Bàng'),(520,74,'Thành phố Thủ Dầu Một'),(521,74,'Huyện Bàu Bàng'),(522,74,'Huyện Dầu Tiếng'),(523,74,'Thị xã Bến Cát'),(524,74,'Huyện Phú Giáo'),(525,74,'Thị xã Tân Uyên'),(526,75,'Thành phố Dĩ An'),(527,75,'Thành phố Thuận An'),(528,75,'Huyện Bắc Tân Uyên'),(529,75,'Thành phố Biên Hòa'),(530,75,'Thành phố Long Khánh'),(531,75,'Huyện Tân Phú'),(532,75,'Huyện Vĩnh Cửu'),(533,75,'Huyện Định Quán'),(534,75,'Huyện Trảng Bom'),(535,75,'Huyện Thống Nhất'),(536,75,'Huyện Cẩm Mỹ'),(537,75,'Huyện Long Thành'),(538,75,'Huyện Xuân Lộc'),(539,75,'Huyện Nhơn Trạch'),(540,77,'Thành phố Vũng Tàu'),(541,77,'Thành phố Bà Rịa'),(542,77,'Huyện Châu Đức'),(543,77,'Huyện Xuyên Mộc'),(544,77,'Huyện Long Điền'),(545,77,'Huyện Đất Đỏ'),(546,77,'Thị xã Phú Mỹ'),(547,77,'Huyện Côn Đảo'),(548,79,'Quận 1'),(549,79,'Quận 12'),(550,79,'Quận Gò Vấp'),(551,79,'Quận Bình Thạnh'),(552,79,'Quận Tân Bình'),(553,79,'Quận Tân Phú'),(554,79,'Quận Phú Nhuận'),(555,79,'Thành phố Thủ Đức'),(556,79,'Quận 3'),(557,79,'Quận 10'),(558,79,'Quận 11'),(559,79,'Quận 4'),(560,79,'Quận 5'),(561,79,'Quận 6'),(562,79,'Quận 8'),(563,79,'Quận Bình Tân'),(564,79,'Quận 7'),(565,79,'Huyện Củ Chi'),(566,79,'Huyện Hóc Môn'),(567,79,'Huyện Bình Chánh'),(568,79,'Huyện Nhà Bè'),(569,79,'Huyện Cần Giờ'),(570,80,'Thành phố Tân An'),(571,80,'Thị xã Kiến Tường'),(572,80,'Huyện Tân Hưng'),(573,80,'Huyện Vĩnh Hưng'),(574,80,'Huyện Mộc Hóa'),(575,80,'Huyện Tân Thạnh'),(576,80,'Huyện Thạnh Hóa'),(577,80,'Huyện Đức Huệ'),(578,80,'Huyện Đức Hòa'),(579,80,'Huyện Bến Lức'),(580,80,'Huyện Thủ Thừa'),(581,80,'Huyện Tân Trụ'),(582,80,'Huyện Cần Đước'),(583,80,'Huyện Cần Giuộc'),(584,80,'Huyện Châu Thành'),(585,82,'Thành phố Mỹ Tho'),(586,82,'Thị xã Gò Công'),(587,82,'Thị xã Cai Lậy'),(588,82,'Huyện Tân Phước'),(589,82,'Huyện Cái Bè'),(590,82,'Huyện Cai Lậy'),(591,82,'Huyện Chợ Gạo'),(592,82,'Huyện Gò Công Tây'),(593,82,'Huyện Gò Công Đông'),(594,82,'Huyện Tân Phú Đông'),(595,83,'Thành phố Bến Tre'),(596,83,'Huyện Chợ Lách'),(597,83,'Huyện Mỏ Cày Nam'),(598,83,'Huyện Giồng Trôm'),(599,83,'Huyện Bình Đại'),(600,83,'Huyện Ba Tri'),(601,83,'Huyện Thạnh Phú'),(602,83,'Huyện Mỏ Cày Bắc'),(603,84,'Thành phố Trà Vinh'),(604,84,'Huyện Càng Long'),(605,84,'Huyện Cầu Kè'),(606,84,'Huyện Tiểu Cần'),(607,84,'Huyện Cầu Ngang'),(608,84,'Huyện Trà Cú'),(609,84,'Huyện Duyên Hải'),(610,84,'Thị xã Duyên Hải'),(611,86,'Thành phố Vĩnh Long'),(612,86,'Huyện Long Hồ'),(613,86,'Huyện Mang Thít'),(614,86,'Huyện  Vũng Liêm'),(615,86,'Huyện Tam Bình'),(616,86,'Thị xã Bình Minh'),(617,86,'Huyện Trà Ôn'),(618,86,'Huyện Bình Tân'),(619,87,'Thành phố Cao Lãnh'),(620,87,'Thành phố Sa Đéc'),(621,87,'Thành phố Hồng Ngự'),(622,87,'Huyện Tân Hồng'),(623,87,'Huyện Hồng Ngự'),(624,87,'Huyện Tháp Mười'),(625,87,'Huyện Cao Lãnh'),(626,87,'Huyện Thanh Bình'),(627,87,'Huyện Lấp Vò'),(628,87,'Huyện Lai Vung'),(629,87,'Huyện Châu Thành'),(630,89,'Thành phố Long Xuyên'),(631,89,'Thành phố Châu Đốc'),(632,89,'Huyện An Phú'),(633,89,'Thị xã Tân Châu'),(634,89,'Huyện Phú Tân'),(635,89,'Huyện Châu Phú'),(636,89,'Huyện Tịnh Biên'),(637,89,'Huyện Tri Tôn'),(638,89,'Huyện Thoại Sơn'),(639,91,'Thành phố Rạch Giá'),(640,91,'Thành phố Hà Tiên'),(641,91,'Huyện Kiên Lương'),(642,91,'Huyện Hòn Đất'),(643,91,'Huyện Tân Hiệp'),(644,91,'Huyện Giồng Riềng'),(645,91,'Huyện Gò Quao'),(646,91,'Huyện An Biên'),(647,91,'Huyện An Minh'),(648,91,'Huyện Vĩnh Thuận'),(649,91,'Thành phố Phú Quốc'),(650,91,'Huyện Kiên Hải'),(651,91,'Huyện U Minh Thượng'),(652,91,'Huyện Giang Thành'),(653,93,'Quận Ninh Kiều'),(654,93,'Quận Ô Môn'),(655,93,'Quận Bình Thuỷ'),(656,93,'Quận Cái Răng'),(657,93,'Quận Thốt Nốt'),(658,93,'Huyện Cờ Đỏ'),(659,93,'Huyện Thới Lai'),(660,93,'Thành phố Vị Thanh'),(661,93,'Thành phố Ngã Bảy'),(662,93,'Huyện Châu Thành A'),(663,93,'Huyện Phụng Hiệp'),(664,93,'Huyện Vị Thuỷ'),(665,93,'Huyện Long Mỹ'),(666,93,'Thị xã Long Mỹ'),(667,94,'Thành phố Sóc Trăng'),(668,94,'Huyện Kế Sách'),(669,94,'Huyện Mỹ Tú'),(670,94,'Huyện Cù Lao Dung'),(671,94,'Huyện Long Phú'),(672,94,'Huyện Mỹ Xuyên'),(673,94,'Thị xã Ngã Năm'),(674,94,'Huyện Thạnh Trị'),(675,94,'Thị xã Vĩnh Châu'),(676,94,'Huyện Trần Đề'),(677,95,'Thành phố Bạc Liêu'),(678,95,'Huyện Hồng Dân'),(679,95,'Huyện Phước Long'),(680,95,'Huyện Vĩnh Lợi'),(681,95,'Thị xã Giá Rai'),(682,95,'Huyện Đông Hải'),(683,95,'Huyện Hoà Bình'),(684,96,'Thành phố Cà Mau'),(685,96,'Huyện U Minh'),(686,96,'Huyện Thới Bình'),(687,96,'Huyện Trần Văn Thời'),(688,96,'Huyện Cái Nước'),(689,96,'Huyện Đầm Dơi'),(690,96,'Huyện Năm Căn'),(691,96,'Huyện Ngọc Hiển');
/*!40000 ALTER TABLE `district` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facility`
--

DROP TABLE IF EXISTS `facility`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facility` (
  `id` int NOT NULL AUTO_INCREMENT,
  `facility_code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address_id` int DEFAULT NULL,
  `business_type_id` int DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_facility_name` (`name`),
  KEY `fk_facility_address` (`address_id`),
  KEY `fk_facility_business_type` (`business_type_id`),
  KEY `fk_facility_state` (`state_id`),
  CONSTRAINT `fk_facility_address` FOREIGN KEY (`address_id`) REFERENCES `address` (`id`),
  CONSTRAINT `fk_facility_business_type` FOREIGN KEY (`business_type_id`) REFERENCES `business_type` (`id`),
  CONSTRAINT `fk_facility_state` FOREIGN KEY (`state_id`) REFERENCES `facility_state` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facility`
--

LOCK TABLES `facility` WRITE;
/*!40000 ALTER TABLE `facility` DISABLE KEYS */;
INSERT INTO `facility` VALUES (1,'FAC-002','The Coffee House',3,1,1),(9,'FAC-001','Highlands',2,1,2),(10,'FAC-003','PhucLong Coffee&Tea',1,1,1),(18,'FAC-004','All Day Coffee',20,1,1),(20,'FAC-0T19','Tuấn Coffee',22,1,1),(23,'FAC-0T21','Tuấn Coffee 2',25,1,1),(24,'FAC-0T24','Tuấn Coffee 3',26,1,1);
/*!40000 ALTER TABLE `facility` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `facility_state`
--

DROP TABLE IF EXISTS `facility_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `facility_state` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_facility_state` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `facility_state`
--

LOCK TABLES `facility_state` WRITE;
/*!40000 ALTER TABLE `facility_state` DISABLE KEYS */;
INSERT INTO `facility_state` VALUES (2,'active'),(1,'inative');
/*!40000 ALTER TABLE `facility_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food`
--

DROP TABLE IF EXISTS `food`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_food_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food`
--

LOCK TABLES `food` WRITE;
/*!40000 ALTER TABLE `food` DISABLE KEYS */;
INSERT INTO `food` VALUES (1,'apple',NULL),(2,'banana',NULL);
/*!40000 ALTER TABLE `food` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inspection_unit`
--

DROP TABLE IF EXISTS `inspection_unit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inspection_unit` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_inspection_unit_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inspection_unit`
--

LOCK TABLES `inspection_unit` WRITE;
/*!40000 ALTER TABLE `inspection_unit` DISABLE KEYS */;
INSERT INTO `inspection_unit` VALUES (1,'unit 1');
/*!40000 ALTER TABLE `inspection_unit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan`
--

DROP TABLE IF EXISTS `plan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `created_user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_plan_name` (`name`),
  KEY `pk_plan_state` (`state_id`),
  KEY `fk_plan_created_user` (`created_user_id`),
  CONSTRAINT `fk_plan_created_user` FOREIGN KEY (`created_user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `pk_plan_state` FOREIGN KEY (`state_id`) REFERENCES `plan_state` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan`
--

LOCK TABLES `plan` WRITE;
/*!40000 ALTER TABLE `plan` DISABLE KEYS */;
INSERT INTO `plan` VALUES (1,'Plan A Plus','Apply for facilities in Hanoi',1,'2022-05-20',1),(4,'Plan B','Apply for facilities in Hanoi',1,'2022-05-25',1);
/*!40000 ALTER TABLE `plan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plan_state`
--

DROP TABLE IF EXISTS `plan_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plan_state` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_plan_state_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plan_state`
--

LOCK TABLES `plan_state` WRITE;
/*!40000 ALTER TABLE `plan_state` DISABLE KEYS */;
INSERT INTO `plan_state` VALUES (1,'active'),(2,'inactive');
/*!40000 ALTER TABLE `plan_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `province`
--

DROP TABLE IF EXISTS `province`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `province` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_provinceName` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=97 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `province`
--

LOCK TABLES `province` WRITE;
/*!40000 ALTER TABLE `province` DISABLE KEYS */;
INSERT INTO `province` VALUES (92,'Thành phố Cần Thơ'),(48,'Thành phố Đà Nẵng'),(1,'Thành phố Hà Nội'),(31,'Thành phố Hải Phòng'),(79,'Thành phố Hồ Chí Minh'),(89,'Tỉnh An Giang'),(77,'Tỉnh Bà Rịa - Vũng Tàu'),(24,'Tỉnh Bắc Giang'),(6,'Tỉnh Bắc Kạn'),(95,'Tỉnh Bạc Liêu'),(27,'Tỉnh Bắc Ninh'),(83,'Tỉnh Bến Tre'),(52,'Tỉnh Bình Định'),(74,'Tỉnh Bình Dương'),(70,'Tỉnh Bình Phước'),(60,'Tỉnh Bình Thuận'),(96,'Tỉnh Cà Mau'),(4,'Tỉnh Cao Bằng'),(66,'Tỉnh Đắk Lắk'),(67,'Tỉnh Đắk Nông'),(11,'Tỉnh Điện Biên'),(75,'Tỉnh Đồng Nai'),(87,'Tỉnh Đồng Tháp'),(64,'Tỉnh Gia Lai'),(2,'Tỉnh Hà Giang'),(35,'Tỉnh Hà Nam'),(42,'Tỉnh Hà Tĩnh'),(30,'Tỉnh Hải Dương'),(93,'Tỉnh Hậu Giang'),(17,'Tỉnh Hoà Bình'),(33,'Tỉnh Hưng Yên'),(56,'Tỉnh Khánh Hòa'),(91,'Tỉnh Kiên Giang'),(62,'Tỉnh Kon Tum'),(12,'Tỉnh Lai Châu'),(68,'Tỉnh Lâm Đồng'),(20,'Tỉnh Lạng Sơn'),(10,'Tỉnh Lào Cai'),(80,'Tỉnh Long An'),(36,'Tỉnh Nam Định'),(40,'Tỉnh Nghệ An'),(37,'Tỉnh Ninh Bình'),(58,'Tỉnh Ninh Thuận'),(25,'Tỉnh Phú Thọ'),(54,'Tỉnh Phú Yên'),(44,'Tỉnh Quảng Bình'),(49,'Tỉnh Quảng Nam'),(51,'Tỉnh Quảng Ngãi'),(22,'Tỉnh Quảng Ninh'),(45,'Tỉnh Quảng Trị'),(94,'Tỉnh Sóc Trăng'),(14,'Tỉnh Sơn La'),(72,'Tỉnh Tây Ninh'),(34,'Tỉnh Thái Bình'),(19,'Tỉnh Thái Nguyên'),(38,'Tỉnh Thanh Hóa'),(46,'Tỉnh Thừa Thiên Huế'),(82,'Tỉnh Tiền Giang'),(84,'Tỉnh Trà Vinh'),(8,'Tỉnh Tuyên Quang'),(86,'Tỉnh Vĩnh Long'),(26,'Tỉnh Vĩnh Phúc'),(15,'Tỉnh Yên Bái');
/*!40000 ALTER TABLE `province` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_role` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (2,'ROLE_ADMIN'),(4,'ROLE_MANAGER'),(1,'ROLE_SUPER_ADMIN'),(3,'ROLE_USER');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sample`
--

DROP TABLE IF EXISTS `sample`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sample` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sample_code` varchar(255) DEFAULT NULL,
  `food_id` int DEFAULT NULL,
  `activity_id` int DEFAULT NULL,
  `state_id` int DEFAULT NULL,
  `result_id` int DEFAULT NULL,
  `inspection_unit_id` int DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  `resulted_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_sample_code` (`sample_code`),
  KEY `fk_sample_food` (`food_id`),
  KEY `fk_sample_state` (`state_id`),
  KEY `fk_sample_result` (`result_id`),
  KEY `FKkfm6ya6ss2eln2w0sb4ximjlo` (`activity_id`),
  KEY `FKl0tn4gg89611co1yghjvw7qms` (`inspection_unit_id`),
  CONSTRAINT `fk_sample_activity` FOREIGN KEY (`activity_id`) REFERENCES `activity` (`id`),
  CONSTRAINT `fk_sample_food` FOREIGN KEY (`food_id`) REFERENCES `food` (`id`),
  CONSTRAINT `fk_sample_inspection_unit` FOREIGN KEY (`inspection_unit_id`) REFERENCES `user` (`id`),
  CONSTRAINT `fk_sample_result` FOREIGN KEY (`result_id`) REFERENCES `sample_result` (`id`),
  CONSTRAINT `fk_sample_state` FOREIGN KEY (`state_id`) REFERENCES `sample_state` (`id`),
  CONSTRAINT `FKl0tn4gg89611co1yghjvw7qms` FOREIGN KEY (`inspection_unit_id`) REFERENCES `inspection_unit` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sample`
--

LOCK TABLES `sample` WRITE;
/*!40000 ALTER TABLE `sample` DISABLE KEYS */;
INSERT INTO `sample` VALUES (1,'SC001',1,1,1,1,1,'2022-05-05','2022-05-30'),(2,'SC-001',1,1,1,1,1,'2022-05-30',NULL),(3,'SC-003',1,1,1,1,1,'2022-05-30','2022-06-30'),(4,'SPC-04',1,1,1,1,1,'2022-05-25','2022-06-30'),(5,'SPC-05',2,1,1,1,1,'2022-05-25','2022-06-30'),(6,'SPC-0A6',2,1,1,1,1,'2022-05-25','2022-06-30');
/*!40000 ALTER TABLE `sample` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sample_result`
--

DROP TABLE IF EXISTS `sample_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sample_result` (
  `id` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sample_result`
--

LOCK TABLES `sample_result` WRITE;
/*!40000 ALTER TABLE `sample_result` DISABLE KEYS */;
INSERT INTO `sample_result` VALUES (1,'qualified'),(2,'disqualified');
/*!40000 ALTER TABLE `sample_result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sample_state`
--

DROP TABLE IF EXISTS `sample_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sample_state` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_sample_state_name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sample_state`
--

LOCK TABLES `sample_state` WRITE;
/*!40000 ALTER TABLE `sample_state` DISABLE KEYS */;
INSERT INTO `sample_state` VALUES (2,'done'),(1,'pending');
/*!40000 ALTER TABLE `sample_state` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `display_name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `created_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uni_username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Thanh Tung','tt-tung261','$2a$10$f6sGdPoSNcb1TrCrVrqMs.Eldh0.j5beMqdeQmWe3IB03e2FiLVIu','tt.tung261@gmail.com','0942694085','2022-04-20'),(2,'Duy Tuan','duytuan208','$2a$10$3R.VdJU4nDkJwXonZ5BDEedmRt9GISSZ/9bZwf89ZCJ81BNbX6tOq','duytuan@gmail.com','0914828312','2022-05-21'),(3,'Thanh Tung','tt-tung2612002','$2a$10$E/u6lW0zf8WCraQkjEzL9.gLu.bX1avR5oCRSxAW/8pSshPeEXUR6','tt.tung2612002@gmail.com','09426934086','2022-05-15'),(4,'Thanh Tung','tt-tung2612003','$2a$10$4dkxtClIhXmDY7032eB/MuVKyHHyeu.gw8MMBVigW7LKsDH7kwMX.','tt.tung2612002@gmail.com','09412731212','2022-04-22'),(7,'Thanh Tung','tt-tung2612005','$2a$10$rqmqA0YzfB3pdGKusfFWXeXDWOaybTSNKwBR8u.v6aOedy86tSGfW','tt.tung2612002@gmail.com','0942694085','2022-05-25');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_region_management`
--

DROP TABLE IF EXISTS `user_region_management`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_region_management` (
  `user_id` int NOT NULL,
  `ward_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`ward_id`),
  KEY `FK65441kevkcemks7xalvibc84v` (`ward_id`),
  CONSTRAINT `FK65441kevkcemks7xalvibc84v` FOREIGN KEY (`ward_id`) REFERENCES `ward` (`id`),
  CONSTRAINT `FKl44b2fllkrw389qvbfacih1ji` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_region_management`
--

LOCK TABLES `user_region_management` WRITE;
/*!40000 ALTER TABLE `user_region_management` DISABLE KEYS */;
INSERT INTO `user_region_management` VALUES (1,2),(1,13),(1,15),(1,18);
/*!40000 ALTER TABLE `user_region_management` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_role` (
  `user_id` int NOT NULL,
  `role_id` int NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `fk_user_role_role` (`role_id`),
  CONSTRAINT `fk_user_role_role` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
  CONSTRAINT `fk_user_role_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,2),(2,2),(1,3),(2,3);
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_type`
--

DROP TABLE IF EXISTS `user_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_type`
--

LOCK TABLES `user_type` WRITE;
/*!40000 ALTER TABLE `user_type` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ward`
--

DROP TABLE IF EXISTS `ward`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ward` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `district_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_ward_district` (`district_id`),
  CONSTRAINT `fk_ward_district` FOREIGN KEY (`district_id`) REFERENCES `district` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3488 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ward`
--

LOCK TABLES `ward` WRITE;
/*!40000 ALTER TABLE `ward` DISABLE KEYS */;
INSERT INTO `ward` VALUES (1,'Phường Phúc Xá',1),(2,'Phường Trúc Bạch',1),(3,'Phường Vĩnh Phúc',1),(4,'Phường Cống Vị',1),(5,'Phường Liễu Giai',1),(6,'Phường Nguyễn Trung Trực',1),(7,'Phường Quán Thánh',1),(8,'Phường Ngọc Hà',1),(9,'Phường Điện Biên',1),(10,'Phường Đội Cấn',1),(11,'Phường Ngọc Khánh',1),(12,'Phường Kim Mã',1),(13,'Phường Giảng Võ',1),(14,'Phường Thành Công',1),(15,'Phường Phúc Tân',2),(16,'Phường Đồng Xuân',2),(17,'Phường Hàng Mã',2),(18,'Phường Hàng Buồm',2),(19,'Phường Hàng Đào',2),(20,'Phường Hàng Bồ',2),(21,'Phường Cửa Đông',2),(22,'Phường Lý Thái Tổ',2),(23,'Phường Hàng Bạc',2),(24,'Phường Hàng Gai',2),(25,'Phường Chương Dương',2),(26,'Phường Hàng Trống',2),(27,'Phường Cửa Nam',2),(28,'Phường Hàng Bông',2),(29,'Phường Tràng Tiền',2),(30,'Phường Trần Hưng Đạo',2),(31,'Phường Phan Chu Trinh',2),(32,'Phường Hàng Bài',2),(33,'Phường Phú Thượng',3),(34,'Phường Nhật Tân',3),(35,'Phường Tứ Liên',3),(36,'Phường Quảng An',3),(37,'Phường Xuân La',3),(38,'Phường Yên Phụ',3),(39,'Phường Bưởi',3),(40,'Phường Thụy Khuê',3),(41,'Phường Thượng Thanh',4),(42,'Phường Ngọc Thụy',4),(43,'Phường Giang Biên',4),(44,'Phường Đức Giang',4),(45,'Phường Việt Hưng',4),(46,'Phường Gia Thụy',4),(47,'Phường Ngọc Lâm',4),(48,'Phường Phúc Lợi',4),(49,'Phường Bồ Đề',4),(50,'Phường Sài Đồng',4),(51,'Phường Long Biên',4),(52,'Phường Thạch Bàn',4),(53,'Phường Phúc Đồng',4),(54,'Phường Cự Khối',4),(55,'Phường Nghĩa Đô',5),(56,'Phường Nghĩa Tân',5),(57,'Phường Mai Dịch',5),(58,'Phường Dịch Vọng',5),(59,'Phường Dịch Vọng Hậu',5),(60,'Phường Quan Hoa',5),(61,'Phường Yên Hoà',5),(62,'Phường Trung Hoà',5),(63,'Phường Cát Linh',6),(64,'Phường Văn Miếu',6),(65,'Phường Quốc Tử Giám',6),(66,'Phường Láng Thượng',6),(67,'Phường Ô Chợ Dừa',6),(68,'Phường Văn Chương',6),(69,'Phường Hàng Bột',6),(70,'Phường Láng Hạ',6),(71,'Phường Khâm Thiên',6),(72,'Phường Thổ Quan',6),(73,'Phường Nam Đồng',6),(74,'Phường Trung Phụng',6),(75,'Phường Quang Trung',6),(76,'Phường Trung Liệt',6),(77,'Phường Phương Liên',6),(78,'Phường Thịnh Quang',6),(79,'Phường Trung Tự',6),(80,'Phường Kim Liên',6),(81,'Phường Phương Mai',6),(82,'Phường Ngã Tư Sở',6),(83,'Phường Khương Thượng',6),(84,'Phường Nguyễn Du',7),(85,'Phường Bạch Đằng',7),(86,'Phường Phạm Đình Hổ',7),(87,'Phường Lê Đại Hành',7),(88,'Phường Đồng Nhân',7),(89,'Phường Phố Huế',7),(90,'Phường Đống Mác',7),(91,'Phường Thanh Lương',7),(92,'Phường Thanh Nhàn',7),(93,'Phường Cầu Dền',7),(94,'Phường Bách Khoa',7),(95,'Phường Đồng Tâm',7),(96,'Phường Vĩnh Tuy',7),(97,'Phường Bạch Mai',7),(98,'Phường Quỳnh Mai',7),(99,'Phường Quỳnh Lôi',7),(100,'Phường Minh Khai',7),(101,'Phường Trương Định',7),(102,'Phường Thanh Trì',8),(103,'Phường Vĩnh Hưng',8),(104,'Phường Định Công',8),(105,'Phường Mai Động',8),(106,'Phường Tương Mai',8),(107,'Phường Đại Kim',8),(108,'Phường Tân Mai',8),(109,'Phường Hoàng Văn Thụ',8),(110,'Phường Giáp Bát',8),(111,'Phường Lĩnh Nam',8),(112,'Phường Thịnh Liệt',8),(113,'Phường Trần Phú',8),(114,'Phường Hoàng Liệt',8),(115,'Phường Yên Sở',8),(116,'Phường Nhân Chính',9),(117,'Phường Thượng Đình',9),(118,'Phường Khương Trung',9),(119,'Phường Khương Mai',9),(120,'Phường Thanh Xuân Trung',9),(121,'Phường Phương Liệt',9),(122,'Phường Hạ Đình',9),(123,'Phường Khương Đình',9),(124,'Phường Thanh Xuân Bắc',9),(125,'Phường Thanh Xuân Nam',9),(126,'Phường Kim Giang',9),(127,'Thị trấn Sóc Sơn',10),(128,'Xã Bắc Sơn',10),(129,'Xã Minh Trí',10),(130,'Xã Hồng Kỳ',10),(131,'Xã Nam Sơn',10),(132,'Xã Trung Giã',10),(133,'Xã Tân Hưng',10),(134,'Xã Minh Phú',10),(135,'Xã Phù Linh',10),(136,'Xã Bắc Phú',10),(137,'Xã Tân Minh',10),(138,'Xã Quang Tiến',10),(139,'Xã Hiền Ninh',10),(140,'Xã Tân Dân',10),(141,'Xã Tiên Dược',10),(142,'Xã Việt Long',10),(143,'Xã Xuân Giang',10),(144,'Xã Mai Đình',10),(145,'Xã Đức Hoà',10),(146,'Xã Thanh Xuân',10),(147,'Xã Đông Xuân',10),(148,'Xã Kim Lũ',10),(149,'Xã Phú Cường',10),(150,'Xã Phú Minh',10),(151,'Xã Phù Lỗ',10),(152,'Xã Xuân Thu',10),(153,'Thị trấn Đông Anh',11),(154,'Xã Xuân Nộn',11),(155,'Xã Thuỵ Lâm',11),(156,'Xã Bắc Hồng',11),(157,'Xã Nguyên Khê',11),(158,'Xã Nam Hồng',11),(159,'Xã Tiên Dương',11),(160,'Xã Vân Hà',11),(161,'Xã Uy Nỗ',11),(162,'Xã Vân Nội',11),(163,'Xã Liên Hà',11),(164,'Xã Việt Hùng',11),(165,'Xã Kim Nỗ',11),(166,'Xã Kim Chung',11),(167,'Xã Dục Tú',11),(168,'Xã Đại Mạch',11),(169,'Xã Vĩnh Ngọc',11),(170,'Xã Cổ Loa',11),(171,'Xã Hải Bối',11),(172,'Xã Xuân Canh',11),(173,'Xã Võng La',11),(174,'Xã Tàm Xá',11),(175,'Xã Mai Lâm',11),(176,'Xã Đông Hội',11),(177,'Thị trấn Yên Viên',12),(178,'Xã Yên Thường',12),(179,'Xã Yên Viên',12),(180,'Xã Ninh Hiệp',12),(181,'Xã Đình Xuyên',12),(182,'Xã Dương Hà',12),(183,'Xã Phù Đổng',12),(184,'Xã Trung Mầu',12),(185,'Xã Lệ Chi',12),(186,'Xã Cổ Bi',12),(187,'Xã Đặng Xá',12),(188,'Xã Phú Thị',12),(189,'Xã Kim Sơn',12),(190,'Thị trấn Trâu Quỳ',12),(191,'Xã Dương Quang',12),(192,'Xã Dương Xá',12),(193,'Xã Đông Dư',12),(194,'Xã Đa Tốn',12),(195,'Xã Kiêu Kỵ',12),(196,'Xã Bát Tràng',12),(197,'Xã Kim Lan',12),(198,'Xã Văn Đức',12),(199,'Phường Cầu Diễn',13),(200,'Phường Xuân Phương',13),(201,'Phường Phương Canh',13),(202,'Phường Mỹ Đình 1',13),(203,'Phường Mỹ Đình 2',13),(204,'Phường Tây Mỗ',13),(205,'Phường Mễ Trì',13),(206,'Phường Phú Đô',13),(207,'Phường Đại Mỗ',13),(208,'Phường Trung Văn',13),(209,'Thị trấn Văn Điển',14),(210,'Xã Tân Triều',14),(211,'Xã Thanh Liệt',14),(212,'Xã Tả Thanh Oai',14),(213,'Xã Hữu Hoà',14),(214,'Xã Tam Hiệp',14),(215,'Xã Tứ Hiệp',14),(216,'Xã Yên Mỹ',14),(217,'Xã Vĩnh Quỳnh',14),(218,'Xã Ngũ Hiệp',14),(219,'Xã Duyên Hà',14),(220,'Xã Ngọc Hồi',14),(221,'Xã Vạn Phúc',14),(222,'Xã Đại áng',14),(223,'Xã Liên Ninh',14),(224,'Xã Đông Mỹ',14),(225,'Phường Thượng Cát',15),(226,'Phường Liên Mạc',15),(227,'Phường Đông Ngạc',15),(228,'Phường Đức Thắng',15),(229,'Phường Thụy Phương',15),(230,'Phường Tây Tựu',15),(231,'Phường Xuân Đỉnh',15),(232,'Phường Xuân Tảo',15),(233,'Phường Minh Khai',15),(234,'Phường Cổ Nhuế 1',15),(235,'Phường Cổ Nhuế 2',15),(236,'Phường Phú Diễn',15),(237,'Phường Phúc Diễn',15),(238,'Thị trấn Chi Đông',16),(239,'Xã Đại Thịnh',16),(240,'Xã Kim Hoa',16),(241,'Xã Thạch Đà',16),(242,'Xã Tiến Thắng',16),(243,'Xã Tự Lập',16),(244,'Thị trấn Quang Minh',16),(245,'Xã Thanh Lâm',16),(246,'Xã Tam Đồng',16),(247,'Xã Liên Mạc',16),(248,'Xã Vạn Yên',16),(249,'Xã Chu Phan',16),(250,'Xã Tiến Thịnh',16),(251,'Xã Mê Linh',16),(252,'Xã Văn Khê',16),(253,'Xã Hoàng Kim',16),(254,'Xã Tiền Phong',16),(255,'Xã Tráng Việt',16),(256,'Phường Nguyễn Trãi',17),(257,'Phường Mộ Lao',17),(258,'Phường Văn Quán',17),(259,'Phường Vạn Phúc',17),(260,'Phường Yết Kiêu',17),(261,'Phường Quang Trung',17),(262,'Phường La Khê',17),(263,'Phường Phú La',17),(264,'Phường Phúc La',17),(265,'Phường Hà Cầu',17),(266,'Phường Yên Nghĩa',17),(267,'Phường Kiến Hưng',17),(268,'Phường Phú Lãm',17),(269,'Phường Phú Lương',17),(270,'Phường Dương Nội',17),(271,'Phường Đồng Mai',17),(272,'Phường Biên Giang',17),(273,'Phường Lê Lợi',18),(274,'Phường Phú Thịnh',18),(275,'Phường Ngô Quyền',18),(276,'Phường Quang Trung',18),(277,'Phường Sơn Lộc',18),(278,'Phường Xuân Khanh',18),(279,'Xã Đường Lâm',18),(280,'Phường Viên Sơn',18),(281,'Xã Xuân Sơn',18),(282,'Phường Trung Hưng',18),(283,'Xã Thanh Mỹ',18),(284,'Phường Trung Sơn Trầm',18),(285,'Xã Kim Sơn',18),(286,'Xã Sơn Đông',18),(287,'Xã Cổ Đông',18),(288,'Thị trấn Tây Đằng',19),(289,'Xã Phú Cường',19),(290,'Xã Cổ Đô',19),(291,'Xã Tản Hồng',19),(292,'Xã Vạn Thắng',19),(293,'Xã Châu Sơn',19),(294,'Xã Phong Vân',19),(295,'Xã Phú Đông',19),(296,'Xã Phú Phương',19),(297,'Xã Phú Châu',19),(298,'Xã Thái Hòa',19),(299,'Xã Đồng Thái',19),(300,'Xã Phú Sơn',19),(301,'Xã Minh Châu',19),(302,'Xã Vật Lại',19),(303,'Xã Chu Minh',19),(304,'Xã Tòng Bạt',19),(305,'Xã Cẩm Lĩnh',19),(306,'Xã Sơn Đà',19),(307,'Xã Đông Quang',19),(308,'Xã Tiên Phong',19),(309,'Xã Thụy An',19),(310,'Xã Cam Thượng',19),(311,'Xã Thuần Mỹ',19),(312,'Xã Tản Lĩnh',19),(313,'Xã Ba Trại',19),(314,'Xã Minh Quang',19),(315,'Xã Ba Vì',19),(316,'Xã Vân Hòa',19),(317,'Xã Yên Bài',19),(318,'Xã Khánh Thượng',19),(319,'Thị trấn Phúc Thọ',20),(320,'Xã Vân Hà',20),(321,'Xã Vân Phúc',20),(322,'Xã Vân Nam',20),(323,'Xã Xuân Đình',20),(324,'Xã Sen Phương',20),(325,'Xã Võng Xuyên',20),(326,'Xã Thọ Lộc',20),(327,'Xã Long Xuyên',20),(328,'Xã Thượng Cốc',20),(329,'Xã Hát Môn',20),(330,'Xã Tích Giang',20),(331,'Xã Thanh Đa',20),(332,'Xã Trạch Mỹ Lộc',20),(333,'Xã Phúc Hòa',20),(334,'Xã Ngọc Tảo',20),(335,'Xã Phụng Thượng',20),(336,'Xã Tam Thuấn',20),(337,'Xã Tam Hiệp',20),(338,'Xã Hiệp Thuận',20),(339,'Xã Liên Hiệp',20),(340,'Thị trấn Phùng',21),(341,'Xã Trung Châu',21),(342,'Xã Thọ An',21),(343,'Xã Thọ Xuân',21),(344,'Xã Hồng Hà',21),(345,'Xã Liên Hồng',21),(346,'Xã Liên Hà',21),(347,'Xã Hạ Mỗ',21),(348,'Xã Liên Trung',21),(349,'Xã Phương Đình',21),(350,'Xã Thượng Mỗ',21),(351,'Xã Tân Hội',21),(352,'Xã Tân Lập',21),(353,'Xã Đan Phượng',21),(354,'Xã Đồng Tháp',21),(355,'Xã Song Phượng',21),(356,'Thị trấn Trạm Trôi',22),(357,'Xã Đức Thượng',22),(358,'Xã Minh Khai',22),(359,'Xã Dương Liễu',22),(360,'Xã Di Trạch',22),(361,'Xã Đức Giang',22),(362,'Xã Cát Quế',22),(363,'Xã Kim Chung',22),(364,'Xã Yên Sở',22),(365,'Xã Sơn Đồng',22),(366,'Xã Vân Canh',22),(367,'Xã Đắc Sở',22),(368,'Xã Lại Yên',22),(369,'Xã Tiền Yên',22),(370,'Xã Song Phương',22),(371,'Xã An Khánh',22),(372,'Xã An Thượng',22),(373,'Xã Vân Côn',22),(374,'Xã La Phù',22),(375,'Xã Đông La',22),(376,'Xã Đông Xuân',23),(377,'Thị trấn Quốc Oai',23),(378,'Xã Sài Sơn',23),(379,'Xã Phượng Cách',23),(380,'Xã Yên Sơn',23),(381,'Xã Ngọc Liệp',23),(382,'Xã Ngọc Mỹ',23),(383,'Xã Liệp Tuyết',23),(384,'Xã Thạch Thán',23),(385,'Xã Đồng Quang',23),(386,'Xã Phú Cát',23),(387,'Xã Tuyết Nghĩa',23),(388,'Xã Nghĩa Hương',23),(389,'Xã Cộng Hòa',23),(390,'Xã Tân Phú',23),(391,'Xã Đại Thành',23),(392,'Xã Phú Mãn',23),(393,'Xã Cấn Hữu',23),(394,'Xã Tân Hòa',23),(395,'Xã Hòa Thạch',23),(396,'Xã Đông Yên',23),(397,'Xã Yên Trung',24),(398,'Xã Yên Bình',24),(399,'Xã Tiến Xuân',24),(400,'Thị trấn Liên Quan',24),(401,'Xã Đại Đồng',24),(402,'Xã Cẩm Yên',24),(403,'Xã Lại Thượng',24),(404,'Xã Phú Kim',24),(405,'Xã Hương Ngải',24),(406,'Xã Canh Nậu',24),(407,'Xã Kim Quan',24),(408,'Xã Dị Nậu',24),(409,'Xã Bình Yên',24),(410,'Xã Chàng Sơn',24),(411,'Xã Thạch Hoà',24),(412,'Xã Cần Kiệm',24),(413,'Xã Hữu Bằng',24),(414,'Xã Phùng Xá',24),(415,'Xã Tân Xã',24),(416,'Xã Thạch Xá',24),(417,'Xã Bình Phú',24),(418,'Xã Hạ Bằng',24),(419,'Xã Đồng Trúc',24),(420,'Thị trấn Chúc Sơn',25),(421,'Thị trấn Xuân Mai',25),(422,'Xã Phụng Châu',25),(423,'Xã Tiên Phương',25),(424,'Xã Đông Sơn',25),(425,'Xã Đông Phương Yên',25),(426,'Xã Phú Nghĩa',25),(427,'Xã Trường Yên',25),(428,'Xã Ngọc Hòa',25),(429,'Xã Thủy Xuân Tiên',25),(430,'Xã Thanh Bình',25),(431,'Xã Trung Hòa',25),(432,'Xã Đại Yên',25),(433,'Xã Thụy Hương',25),(434,'Xã Tốt Động',25),(435,'Xã Lam Điền',25),(436,'Xã Tân Tiến',25),(437,'Xã Nam Phương Tiến',25),(438,'Xã Hợp Đồng',25),(439,'Xã Hoàng Văn Thụ',25),(440,'Xã Hoàng Diệu',25),(441,'Xã Hữu Văn',25),(442,'Xã Quảng Bị',25),(443,'Xã Mỹ Lương',25),(444,'Xã Thượng Vực',25),(445,'Xã Hồng Phong',25),(446,'Xã Đồng Phú',25),(447,'Xã Trần Phú',25),(448,'Xã Văn Võ',25),(449,'Xã Đồng Lạc',25),(450,'Xã Hòa Chính',25),(451,'Xã Phú Nam An',25),(452,'Thị trấn Kim Bài',26),(453,'Xã Cự Khê',26),(454,'Xã Bích Hòa',26),(455,'Xã Mỹ Hưng',26),(456,'Xã Cao Viên',26),(457,'Xã Bình Minh',26),(458,'Xã Tam Hưng',26),(459,'Xã Thanh Cao',26),(460,'Xã Thanh Thùy',26),(461,'Xã Thanh Mai',26),(462,'Xã Thanh Văn',26),(463,'Xã Đỗ Động',26),(464,'Xã Kim An',26),(465,'Xã Kim Thư',26),(466,'Xã Phương Trung',26),(467,'Xã Tân Ước',26),(468,'Xã Dân Hòa',26),(469,'Xã Liên Châu',26),(470,'Xã Cao Dương',26),(471,'Xã Xuân Dương',26),(472,'Xã Hồng Dương',26),(473,'Thị trấn Thường Tín',27),(474,'Xã Ninh Sở',27),(475,'Xã Nhị Khê',27),(476,'Xã Duyên Thái',27),(477,'Xã Khánh Hà',27),(478,'Xã Hòa Bình',27),(479,'Xã Văn Bình',27),(480,'Xã Hiền Giang',27),(481,'Xã Hồng Vân',27),(482,'Xã Vân Tảo',27),(483,'Xã Liên Phương',27),(484,'Xã Văn Phú',27),(485,'Xã Tự Nhiên',27),(486,'Xã Tiền Phong',27),(487,'Xã Hà Hồi',27),(488,'Xã Thư Phú',27),(489,'Xã Nguyễn Trãi',27),(490,'Xã Quất Động',27),(491,'Xã Chương Dương',27),(492,'Xã Tân Minh',27),(493,'Xã Lê Lợi',27),(494,'Xã Thắng Lợi',27),(495,'Xã Dũng Tiến',27),(496,'Xã Thống Nhất',27),(497,'Xã Nghiêm Xuyên',27),(498,'Xã Tô Hiệu',27),(499,'Xã Văn Tự',27),(500,'Xã Vạn Điểm',27),(501,'Xã Minh Cường',27),(502,'Thị trấn Phú Minh',28),(503,'Thị trấn Phú Xuyên',28),(504,'Xã Hồng Minh',28),(505,'Xã Phượng Dực',28),(506,'Xã Nam Tiến',28),(507,'Xã Tri Trung',28),(508,'Xã Đại Thắng',28),(509,'Xã Phú Túc',28),(510,'Xã Văn Hoàng',28),(511,'Xã Hồng Thái',28),(512,'Xã Hoàng Long',28),(513,'Xã Quang Trung',28),(514,'Xã Nam Phong',28),(515,'Xã Nam Triều',28),(516,'Xã Tân Dân',28),(517,'Xã Sơn Hà',28),(518,'Xã Chuyên Mỹ',28),(519,'Xã Khai Thái',28),(520,'Xã Phúc Tiến',28),(521,'Xã Vân Từ',28),(522,'Xã Tri Thủy',28),(523,'Xã Đại Xuyên',28),(524,'Xã Phú Yên',28),(525,'Xã Bạch Hạ',28),(526,'Xã Quang Lãng',28),(527,'Xã Châu Can',28),(528,'Xã Minh Tân',28),(529,'Thị trấn Vân Đình',29),(530,'Xã Viên An',29),(531,'Xã Viên Nội',29),(532,'Xã Hoa Sơn',29),(533,'Xã Quảng Phú Cầu',29),(534,'Xã Trường Thịnh',29),(535,'Xã Cao Thành',29),(536,'Xã Liên Bạt',29),(537,'Xã Sơn Công',29),(538,'Xã Đồng Tiến',29),(539,'Xã Phương Tú',29),(540,'Xã Trung Tú',29),(541,'Xã Đồng Tân',29),(542,'Xã Tảo Dương Văn',29),(543,'Xã Vạn Thái',29),(544,'Xã Minh Đức',29),(545,'Xã Hòa Lâm',29),(546,'Xã Hòa Xá',29),(547,'Xã Trầm Lộng',29),(548,'Xã Kim Đường',29),(549,'Xã Hòa Nam',29),(550,'Xã Hòa Phú',29),(551,'Xã Đội Bình',29),(552,'Xã Đại Hùng',29),(553,'Xã Đông Lỗ',29),(554,'Xã Phù Lưu',29),(555,'Xã Đại Cường',29),(556,'Xã Lưu Hoàng',29),(557,'Xã Hồng Quang',29),(558,'Thị trấn Đại Nghĩa',30),(559,'Xã Đồng Tâm',30),(560,'Xã Thượng Lâm',30),(561,'Xã Tuy Lai',30),(562,'Xã Phúc Lâm',30),(563,'Xã Mỹ Thành',30),(564,'Xã Bột Xuyên',30),(565,'Xã An Mỹ',30),(566,'Xã Hồng Sơn',30),(567,'Xã Lê Thanh',30),(568,'Xã Xuy Xá',30),(569,'Xã Phùng Xá',30),(570,'Xã Phù Lưu Tế',30),(571,'Xã Đại Hưng',30),(572,'Xã Vạn Kim',30),(573,'Xã Đốc Tín',30),(574,'Xã Hương Sơn',30),(575,'Xã Hùng Tiến',30),(576,'Xã An Tiến',30),(577,'Xã Hợp Tiến',30),(578,'Xã Hợp Thanh',30),(579,'Xã An Phú',30),(580,'Phường Quang Trung',31),(581,'Phường Trần Phú',31),(582,'Phường Ngọc Hà',31),(583,'Phường Nguyễn Trãi',31),(584,'Phường Minh Khai',31),(585,'Xã Ngọc Đường',31),(586,'Xã Phương Độ',31),(587,'Xã Phương Thiện',31),(588,'Thị trấn Phó Bảng',32),(589,'Xã Lũng Cú',32),(590,'Xã Má Lé',32),(591,'Thị trấn Đồng Văn',32),(592,'Xã Lũng Táo',32),(593,'Xã Phố Là',32),(594,'Xã Thài Phìn Tủng',32),(595,'Xã Sủng Là',32),(596,'Xã Xà Phìn',32),(597,'Xã Tả Phìn',32),(598,'Xã Tả Lủng',32),(599,'Xã Phố Cáo',32),(600,'Xã Sính Lủng',32),(601,'Xã Sảng Tủng',32),(602,'Xã Lũng Thầu',32),(603,'Xã Hố Quáng Phìn',32),(604,'Xã Vần Chải',32),(605,'Xã Lũng Phìn',32),(606,'Xã Sủng Trái',32),(607,'Thị trấn Mèo Vạc',33),(608,'Xã Thượng Phùng',33),(609,'Xã Pải Lủng',33),(610,'Xã Xín Cái',33),(611,'Xã Pả Vi',33),(612,'Xã Giàng Chu Phìn',33),(613,'Xã Sủng Trà',33),(614,'Xã Sủng Máng',33),(615,'Xã Sơn Vĩ',33),(616,'Xã Tả Lủng',33),(617,'Xã Cán Chu Phìn',33),(618,'Xã Lũng Pù',33),(619,'Xã Lũng Chinh',33),(620,'Xã Tát Ngà',33),(621,'Xã Nậm Ban',33),(622,'Xã Khâu Vai',33),(623,'Xã Niêm Tòng',33),(624,'Xã Niêm Sơn',33),(625,'Thị trấn Yên Minh',34),(626,'Xã Thắng Mố',34),(627,'Xã Phú Lũng',34),(628,'Xã Sủng Tráng',34),(629,'Xã Bạch Đích',34),(630,'Xã Na Khê',34),(631,'Xã Sủng Thài',34),(632,'Xã Hữu Vinh',34),(633,'Xã Lao Và Chải',34),(634,'Xã Mậu Duệ',34),(635,'Xã Đông Minh',34),(636,'Xã Mậu Long',34),(637,'Xã Ngam La',34),(638,'Xã Ngọc Long',34),(639,'Xã Đường Thượng',34),(640,'Xã Lũng Hồ',34),(641,'Xã Du Tiến',34),(642,'Xã Du Già',34),(643,'Thị trấn Tam Sơn',35),(644,'Xã Bát Đại Sơn',35),(645,'Xã Nghĩa Thuận',35),(646,'Xã Cán Tỷ',35),(647,'Xã Cao Mã Pờ',35),(648,'Xã Thanh Vân',35),(649,'Xã Tùng Vài',35),(650,'Xã Đông Hà',35),(651,'Xã Quản Bạ',35),(652,'Xã Lùng Tám',35),(653,'Xã Quyết Tiến',35),(654,'Xã Tả Ván',35),(655,'Xã Thái An',35),(656,'Xã Kim Thạch',36),(657,'Xã Phú Linh',36),(658,'Xã Kim Linh',36),(659,'Thị trấn Vị Xuyên',36),(660,'Thị trấn Nông Trường Việt Lâm',36),(661,'Xã Minh Tân',36),(662,'Xã Thuận Hoà',36),(663,'Xã Tùng Bá',36),(664,'Xã Thanh Thủy',36),(665,'Xã Thanh Đức',36),(666,'Xã Phong Quang',36),(667,'Xã Xín Chải',36),(668,'Xã Phương Tiến',36),(669,'Xã Lao Chải',36),(670,'Xã Cao Bồ',36),(671,'Xã Đạo Đức',36),(672,'Xã Thượng Sơn',36),(673,'Xã Linh Hồ',36),(674,'Xã Quảng Ngần',36),(675,'Xã Việt Lâm',36),(676,'Xã Ngọc Linh',36),(677,'Xã Ngọc Minh',36),(678,'Xã Bạch Ngọc',36),(679,'Xã Trung Thành',36),(680,'Xã Minh Sơn',37),(681,'Xã Giáp Trung',37),(682,'Xã Yên Định',37),(683,'Thị trấn Yên Phú',37),(684,'Xã Minh Ngọc',37),(685,'Xã Yên Phong',37),(686,'Xã Lạc Nông',37),(687,'Xã Phú Nam',37),(688,'Xã Yên Cường',37),(689,'Xã Thượng Tân',37),(690,'Xã Đường Âm',37),(691,'Xã Đường Hồng',37),(692,'Xã Phiêng Luông',37),(693,'Thị trấn Vinh Quang',38),(694,'Xã Bản Máy',38),(695,'Xã Thàng Tín',38),(696,'Xã Thèn Chu Phìn',38),(697,'Xã Pố Lồ',38),(698,'Xã Bản Phùng',38),(699,'Xã Túng Sán',38),(700,'Xã Chiến Phố',38),(701,'Xã Đản Ván',38),(702,'Xã Tụ Nhân',38),(703,'Xã Tân Tiến',38),(704,'Xã Nàng Đôn',38),(705,'Xã Pờ Ly Ngài',38),(706,'Xã Sán Xả Hồ',38),(707,'Xã Bản Luốc',38),(708,'Xã Ngàm Đăng Vài',38),(709,'Xã Bản Nhùng',38),(710,'Xã Tả Sử Choóng',38),(711,'Xã Nậm Dịch',38),(712,'Xã Hồ Thầu',38),(713,'Xã Nam Sơn',38),(714,'Xã Nậm Tỵ',38),(715,'Xã Thông Nguyên',38),(716,'Xã Nậm Khòa',38),(717,'Thị trấn Cốc Pài',39),(718,'Xã Nàn Xỉn',39),(719,'Xã Bản Díu',39),(720,'Xã Chí Cà',39),(721,'Xã Xín Mần',39),(722,'Xã Thèn Phàng',39),(723,'Xã Trung Thịnh',39),(724,'Xã Pà Vầy Sủ',39),(725,'Xã Cốc Rế',39),(726,'Xã Thu Tà',39),(727,'Xã Nàn Ma',39),(728,'Xã Tả Nhìu',39),(729,'Xã Bản Ngò',39),(730,'Xã Chế Là',39),(731,'Xã Nấm Dẩn',39),(732,'Xã Quảng Nguyên',39),(733,'Xã Nà Chì',39),(734,'Xã Khuôn Lùng',39),(735,'Thị trấn Việt Quang',40),(736,'Thị trấn Vĩnh Tuy',40),(737,'Xã Tân Lập',40),(738,'Xã Tân Thành',40),(739,'Xã Đồng Tiến',40),(740,'Xã Đồng Tâm',40),(741,'Xã Tân Quang',40),(742,'Xã Thượng Bình',40),(743,'Xã Hữu Sản',40),(744,'Xã Kim Ngọc',40),(745,'Xã Việt Vinh',40),(746,'Xã Bằng Hành',40),(747,'Xã Quang Minh',40),(748,'Xã Liên Hiệp',40),(749,'Xã Vô Điếm',40),(750,'Xã Việt Hồng',40),(751,'Xã Hùng An',40),(752,'Xã Đức Xuân',40),(753,'Xã Tiên Kiều',40),(754,'Xã Vĩnh Hảo',40),(755,'Xã Vĩnh Phúc',40),(756,'Xã Đồng Yên',40),(757,'Xã Đông Thành',40),(758,'Xã Xuân Minh',41),(759,'Xã Tiên Nguyên',41),(760,'Xã Tân Nam',41),(761,'Xã Bản Rịa',41),(762,'Xã Yên Thành',41),(763,'Thị trấn Yên Bình',41),(764,'Xã Tân Trịnh',41),(765,'Xã Tân Bắc',41),(766,'Xã Bằng Lang',41),(767,'Xã Yên Hà',41),(768,'Xã Hương Sơn',41),(769,'Xã Xuân Giang',41),(770,'Xã Nà Khương',41),(771,'Xã Tiên Yên',41),(772,'Xã Vĩ Thượng',41),(773,'Phường Sông Hiến',42),(774,'Phường Sông Bằng',42),(775,'Phường Hợp Giang',42),(776,'Phường Tân Giang',42),(777,'Phường Ngọc Xuân',42),(778,'Phường Đề Thám',42),(779,'Phường Hoà Chung',42),(780,'Phường Duyệt Trung',42),(781,'Xã Vĩnh Quang',42),(782,'Xã Hưng Đạo',42),(783,'Xã Chu Trinh',42),(784,'Thị trấn Pác Miầu',43),(785,'Xã Đức Hạnh',43),(786,'Xã Lý Bôn',43),(787,'Xã Nam Cao',43),(788,'Xã Nam Quang',43),(789,'Xã Vĩnh Quang',43),(790,'Xã Quảng Lâm',43),(791,'Xã Thạch Lâm',43),(792,'Xã Vĩnh Phong',43),(793,'Xã Mông Ân',43),(794,'Xã Thái Học',43),(795,'Xã Thái Sơn',43),(796,'Xã Yên Thổ',43),(797,'Thị trấn Bảo Lạc',44),(798,'Xã Cốc Pàng',44),(799,'Xã Thượng Hà',44),(800,'Xã Cô Ba',44),(801,'Xã Bảo Toàn',44),(802,'Xã Khánh Xuân',44),(803,'Xã Xuân Trường',44),(804,'Xã Hồng Trị',44),(805,'Xã Kim Cúc',44),(806,'Xã Phan Thanh',44),(807,'Xã Hồng An',44),(808,'Xã Hưng Đạo',44),(809,'Xã Hưng Thịnh',44),(810,'Xã Huy Giáp',44),(811,'Xã Đình Phùng',44),(812,'Xã Sơn Lập',44),(813,'Xã Sơn Lộ',44),(814,'Thị trấn Thông Nông',45),(815,'Xã Cần Yên',45),(816,'Xã Cần Nông',45),(817,'Xã Lương Thông',45),(818,'Xã Đa Thông',45),(819,'Xã Ngọc Động',45),(820,'Xã Yên Sơn',45),(821,'Xã Lương Can',45),(822,'Xã Thanh Long',45),(823,'Thị trấn Xuân Hòa',45),(824,'Xã Lũng Nặm',45),(825,'Xã Trường Hà',45),(826,'Xã Cải Viên',45),(827,'Xã Nội Thôn',45),(828,'Xã Tổng Cọt',45),(829,'Xã Sóc Hà',45),(830,'Xã Thượng Thôn',45),(831,'Xã Hồng Sỹ',45),(832,'Xã Quý Quân',45),(833,'Xã Mã Ba',45),(834,'Xã Ngọc Đào',45),(835,'Thị trấn Trà Lĩnh',46),(836,'Xã Tri Phương',46),(837,'Xã Quang Hán',46),(838,'Xã Xuân Nội',46),(839,'Xã Quang Trung',46),(840,'Xã Quang Vinh',46),(841,'Xã Cao Chương',46),(842,'Thị trấn Trùng Khánh',46),(843,'Xã Ngọc Khê',46),(844,'Xã Ngọc Côn',46),(845,'Xã Phong Nậm',46),(846,'Xã Đình Phong',46),(847,'Xã Đàm Thuỷ',46),(848,'Xã Khâm Thành',46),(849,'Xã Chí Viễn',46),(850,'Xã Lăng Hiếu',46),(851,'Xã Phong Châu',46),(852,'Xã Trung Phúc',46),(853,'Xã Cao Thăng',46),(854,'Xã Đức Hồng',46),(855,'Xã Đoài Dương',46),(856,'Xã Minh Long',47),(857,'Xã Lý Quốc',47),(858,'Xã Thắng Lợi',47),(859,'Xã Đồng Loan',47),(860,'Xã Đức Quang',47),(861,'Xã Kim Loan',47),(862,'Xã Quang Long',47),(863,'Xã An Lạc',47),(864,'Thị trấn Thanh Nhật',47),(865,'Xã Vinh Quý',47),(866,'Xã Thống Nhất',47),(867,'Xã Cô Ngân',47),(868,'Xã Thị Hoa',47),(869,'Xã Quốc Toản',48),(870,'Thị trấn Quảng Uyên',48),(871,'Xã Phi Hải',48),(872,'Xã Quảng Hưng',48),(873,'Xã Độc Lập',48),(874,'Xã Cai Bộ',48),(875,'Xã Phúc Sen',48),(876,'Xã Chí Thảo',48),(877,'Xã Tự Do',48),(878,'Xã Hồng Quang',48),(879,'Xã Ngọc Động',48),(880,'Xã Hạnh Phúc',48),(881,'Thị trấn Tà Lùng',48),(882,'Xã Bế Văn Đàn',48),(883,'Xã Cách Linh',48),(884,'Xã Đại Sơn',48),(885,'Xã Tiên Thành',48),(886,'Thị trấn Hoà Thuận',48),(887,'Xã Mỹ Hưng',48),(888,'Thị trấn Nước Hai',49),(889,'Xã Dân Chủ',49),(890,'Xã Nam Tuấn',49),(891,'Xã Đại Tiến',49),(892,'Xã Đức Long',49),(893,'Xã Ngũ Lão',49),(894,'Xã Trương Lương',49),(895,'Xã Hồng Việt',49),(896,'Xã Hoàng Tung',49),(897,'Xã Nguyễn Huệ',49),(898,'Xã Quang Trung',49),(899,'Xã Bạch Đằng',49),(900,'Xã Bình Dương',49),(901,'Xã Lê Chung',49),(902,'Xã Hồng Nam',49),(903,'Thị trấn Nguyên Bình',50),(904,'Thị trấn Tĩnh Túc',50),(905,'Xã Yên Lạc',50),(906,'Xã Triệu Nguyên',50),(907,'Xã Ca Thành',50),(908,'Xã Vũ Nông',50),(909,'Xã Minh Tâm',50),(910,'Xã Thể Dục',50),(911,'Xã Mai Long',50),(912,'Xã Vũ Minh',50),(913,'Xã Hoa Thám',50),(914,'Xã Phan Thanh',50),(915,'Xã Quang Thành',50),(916,'Xã Tam Kim',50),(917,'Xã Thành Công',50),(918,'Xã Thịnh Vượng',50),(919,'Xã Hưng Đạo',50),(920,'Thị trấn Đông Khê',51),(921,'Xã Canh Tân',51),(922,'Xã Kim Đồng',51),(923,'Xã Minh Khai',51),(924,'Xã Đức Thông',51),(925,'Xã Thái Cường',51),(926,'Xã Vân Trình',51),(927,'Xã Thụy Hùng',51),(928,'Xã Quang Trọng',51),(929,'Xã Trọng Con',51),(930,'Xã Lê Lai',51),(931,'Xã Đức Long',51),(932,'Xã Lê Lợi',51),(933,'Xã Đức Xuân',51),(934,'Phường Nguyễn Thị Minh Khai',52),(935,'Phường Sông Cầu',52),(936,'Phường Đức Xuân',52),(937,'Phường Phùng Chí Kiên',52),(938,'Phường Huyền Tụng',52),(939,'Xã Dương Quang',52),(940,'Xã Nông Thượng',52),(941,'Phường Xuất Hóa',52),(942,'Xã Bằng Thành',53),(943,'Xã Nhạn Môn',53),(944,'Xã Bộc Bố',53),(945,'Xã Công Bằng',53),(946,'Xã Giáo Hiệu',53),(947,'Xã Xuân La',53),(948,'Xã An Thắng',53),(949,'Xã Cổ Linh',53),(950,'Xã Nghiên Loan',53),(951,'Xã Cao Tân',53),(952,'Thị trấn Chợ Rã',54),(953,'Xã Bành Trạch',54),(954,'Xã Phúc Lộc',54),(955,'Xã Hà Hiệu',54),(956,'Xã Cao Thượng',54),(957,'Xã Khang Ninh',54),(958,'Xã Nam Mẫu',54),(959,'Xã Thượng Giáo',54),(960,'Xã Địa Linh',54),(961,'Xã Yến Dương',54),(962,'Xã Chu Hương',54),(963,'Xã Quảng Khê',54),(964,'Xã Mỹ Phương',54),(965,'Xã Hoàng Trĩ',54),(966,'Xã Đồng Phúc',54),(967,'Thị trấn Nà Phặc',55),(968,'Xã Thượng Ân',55),(969,'Xã Bằng Vân',55),(970,'Xã Cốc Đán',55),(971,'Xã Trung Hoà',55),(972,'Xã Đức Vân',55),(973,'Xã Vân Tùng',55),(974,'Xã Thượng Quan',55),(975,'Xã Hiệp Lực',55),(976,'Xã Thuần Mang',55),(977,'Thị trấn Phủ Thông',56),(978,'Xã Vi Hương',56),(979,'Xã Sĩ Bình',56),(980,'Xã Vũ Muộn',56),(981,'Xã Đôn Phong',56),(982,'Xã Lục Bình',56),(983,'Xã Tân Tú',56),(984,'Xã Nguyên Phúc',56),(985,'Xã Cao Sơn',56),(986,'Xã Quân Hà',56),(987,'Xã Cẩm Giàng',56),(988,'Xã Mỹ Thanh',56),(989,'Xã Dương Phong',56),(990,'Xã Quang Thuận',56),(991,'Thị trấn Bằng Lũng',57),(992,'Xã Xuân Lạc',57),(993,'Xã Nam Cường',57),(994,'Xã Đồng Lạc',57),(995,'Xã Tân Lập',57),(996,'Xã Bản Thi',57),(997,'Xã Quảng Bạch',57),(998,'Xã Bằng Phúc',57),(999,'Xã Yên Thịnh',57),(1000,'Xã Yên Thượng',57),(1001,'Xã Phương Viên',57),(1002,'Xã Ngọc Phái',57),(1003,'Xã Đồng Thắng',57),(1004,'Xã Lương Bằng',57),(1005,'Xã Bằng Lãng',57),(1006,'Xã Đại Sảo',57),(1007,'Xã Nghĩa Tá',57),(1008,'Xã Yên Mỹ',57),(1009,'Xã Bình Trung',57),(1010,'Xã Yên Phong',57),(1011,'Thị trấn Đồng Tâm',58),(1012,'Xã Tân Sơn',58),(1013,'Xã Thanh Vận',58),(1014,'Xã Mai Lạp',58),(1015,'Xã Hoà Mục',58),(1016,'Xã Thanh Mai',58),(1017,'Xã Cao Kỳ',58),(1018,'Xã Nông Hạ',58),(1019,'Xã Yên Cư',58),(1020,'Xã Thanh Thịnh',58),(1021,'Xã Yên Hân',58),(1022,'Xã Như Cố',58),(1023,'Xã Bình Văn',58),(1024,'Xã Quảng Chu',58),(1025,'Xã Văn Vũ',59),(1026,'Xã Văn Lang',59),(1027,'Xã Lương Thượng',59),(1028,'Xã Kim Hỷ',59),(1029,'Xã Cường Lợi',59),(1030,'Thị trấn Yến Lạc',59),(1031,'Xã Kim Lư',59),(1032,'Xã Sơn Thành',59),(1033,'Xã Văn Minh',59),(1034,'Xã Côn Minh',59),(1035,'Xã Cư Lễ',59),(1036,'Xã Trần Phú',59),(1037,'Xã Quang Phong',59),(1038,'Xã Dương Sơn',59),(1039,'Xã Xuân Dương',59),(1040,'Xã Đổng Xá',59),(1041,'Xã Liêm Thuỷ',59),(1042,'Phường Phan Thiết',60),(1043,'Phường Minh Xuân',60),(1044,'Phường Tân Quang',60),(1045,'Xã Tràng Đà',60),(1046,'Phường Nông Tiến',60),(1047,'Phường Ỷ La',60),(1048,'Phường Tân Hà',60),(1049,'Phường Hưng Thành',60),(1050,'Xã Kim Phú',60),(1051,'Xã An Khang',60),(1052,'Phường Mỹ Lâm',60),(1053,'Phường An Tường',60),(1054,'Xã Lưỡng Vượng',60),(1055,'Xã Thái Long',60),(1056,'Phường Đội Cấn',60),(1057,'Xã Phúc Yên',61),(1058,'Xã Xuân Lập',61),(1059,'Xã Khuôn Hà',61),(1060,'Thị trấn Lăng Can',61),(1061,'Xã Thượng Lâm',61),(1062,'Xã Bình An',61),(1063,'Xã Hồng Quang',61),(1064,'Xã Thổ Bình',61),(1065,'Xã Phúc Sơn',61),(1066,'Xã Minh Quang',61),(1067,'Thị trấn Na Hang',62),(1068,'Xã Sinh Long',62),(1069,'Xã Thượng Giáp',62),(1070,'Xã Thượng Nông',62),(1071,'Xã Côn Lôn',62),(1072,'Xã Yên Hoa',62),(1073,'Xã Hồng Thái',62),(1074,'Xã Đà Vị',62),(1075,'Xã Khau Tinh',62),(1076,'Xã Sơn Phú',62),(1077,'Xã Năng Khả',62),(1078,'Xã Thanh Tương',62),(1079,'Thị trấn Vĩnh Lộc',63),(1080,'Xã Trung Hà',63),(1081,'Xã Tân Mỹ',63),(1082,'Xã Hà Lang',63),(1083,'Xã Hùng Mỹ',63),(1084,'Xã Yên Lập',63),(1085,'Xã Tân An',63),(1086,'Xã Bình Phú',63),(1087,'Xã Xuân Quang',63),(1088,'Xã Ngọc Hội',63),(1089,'Xã Phú Bình',63),(1090,'Xã Hòa Phú',63),(1091,'Xã Phúc Thịnh',63),(1092,'Xã Kiên Đài',63),(1093,'Xã Tân Thịnh',63),(1094,'Xã Trung Hòa',63),(1095,'Xã Kim Bình',63),(1096,'Xã Hòa An',63),(1097,'Xã Vinh Quang',63),(1098,'Xã Tri Phú',63),(1099,'Xã Nhân Lý',63),(1100,'Xã Yên Nguyên',63),(1101,'Xã Linh Phú',63),(1102,'Xã Bình Nhân',63),(1103,'Thị trấn Tân Yên',64),(1104,'Xã Yên Thuận',64),(1105,'Xã Bạch Xa',64),(1106,'Xã Minh Khương',64),(1107,'Xã Yên Lâm',64),(1108,'Xã Minh Dân',64),(1109,'Xã Phù Lưu',64),(1110,'Xã Minh Hương',64),(1111,'Xã Yên Phú',64),(1112,'Xã Tân Thành',64),(1113,'Xã Bình Xa',64),(1114,'Xã Thái Sơn',64),(1115,'Xã Nhân Mục',64),(1116,'Xã Thành Long',64),(1117,'Xã Bằng Cốc',64),(1118,'Xã Thái Hòa',64),(1119,'Xã Đức Ninh',64),(1120,'Xã Hùng Đức',64),(1121,'Xã Quí Quân',65),(1122,'Xã Lực Hành',65),(1123,'Xã Kiến Thiết',65),(1124,'Xã Trung Minh',65),(1125,'Xã Chiêu Yên',65),(1126,'Xã Trung Trực',65),(1127,'Xã Xuân Vân',65),(1128,'Xã Phúc Ninh',65),(1129,'Xã Hùng Lợi',65),(1130,'Xã Trung Sơn',65),(1131,'Xã Tân Tiến',65),(1132,'Xã Tứ Quận',65),(1133,'Xã Đạo Viện',65),(1134,'Xã Tân Long',65),(1135,'Thị trấn Yên Sơn',65),(1136,'Xã Kim Quan',65),(1137,'Xã Lang Quán',65),(1138,'Xã Phú Thịnh',65),(1139,'Xã Công Đa',65),(1140,'Xã Trung Môn',65),(1141,'Xã Chân Sơn',65),(1142,'Xã Thái Bình',65),(1143,'Xã Tiến Bộ',65),(1144,'Xã Mỹ Bằng',65),(1145,'Xã Hoàng Khai',65),(1146,'Xã Nhữ Hán',65),(1147,'Xã Nhữ Khê',65),(1148,'Xã Đội Bình',65),(1149,'Thị trấn Sơn Dương',66),(1150,'Xã Trung Yên',66),(1151,'Xã Minh Thanh',66),(1152,'Xã Tân Trào',66),(1153,'Xã Vĩnh Lợi',66),(1154,'Xã Thượng Ấm',66),(1155,'Xã Bình Yên',66),(1156,'Xã Lương Thiện',66),(1157,'Xã Tú Thịnh',66),(1158,'Xã Cấp Tiến',66),(1159,'Xã Hợp Thành',66),(1160,'Xã Phúc Ứng',66),(1161,'Xã Đông Thọ',66),(1162,'Xã Kháng Nhật',66),(1163,'Xã Hợp Hòa',66),(1164,'Xã Quyết Thắng',66),(1165,'Xã Đồng Quý',66),(1166,'Xã Tân Thanh',66),(1167,'Xã Vân Sơn',66),(1168,'Xã Văn Phú',66),(1169,'Xã Chi Thiết',66),(1170,'Xã Đông Lợi',66),(1171,'Xã Thiện Kế',66),(1172,'Xã Hồng Lạc',66),(1173,'Xã Phú Lương',66),(1174,'Xã Ninh Lai',66),(1175,'Xã Đại Phú',66),(1176,'Xã Sơn Nam',66),(1177,'Xã Hào Phú',66),(1178,'Xã Tam Đa',66),(1179,'Xã Trường Sinh',66),(1180,'Phường Duyên Hải',67),(1181,'Phường Lào Cai',67),(1182,'Phường Cốc Lếu',67),(1183,'Phường Kim Tân',67),(1184,'Phường Bắc Lệnh',67),(1185,'Phường Pom Hán',67),(1186,'Phường Xuân Tăng',67),(1187,'Phường Bình Minh',67),(1188,'Xã Thống Nhất',67),(1189,'Xã Đồng Tuyển',67),(1190,'Xã Vạn Hoà',67),(1191,'Phường Bắc Cường',67),(1192,'Phường Nam Cường',67),(1193,'Xã Cam Đường',67),(1194,'Xã Tả Phời',67),(1195,'Xã Hợp Thành',67),(1196,'Xã Cốc San',67),(1197,'Thị trấn Bát Xát',68),(1198,'Xã A Mú Sung',68),(1199,'Xã Nậm Chạc',68),(1200,'Xã A Lù',68),(1201,'Xã Trịnh Tường',68),(1202,'Xã Y Tý',68),(1203,'Xã Cốc Mỳ',68),(1204,'Xã Dền Sáng',68),(1205,'Xã Bản Vược',68),(1206,'Xã Sàng Ma Sáo',68),(1207,'Xã Bản Qua',68),(1208,'Xã Mường Vi',68),(1209,'Xã Dền Thàng',68),(1210,'Xã Bản Xèo',68),(1211,'Xã Mường Hum',68),(1212,'Xã Trung Lèng Hồ',68),(1213,'Xã Quang Kim',68),(1214,'Xã Pa Cheo',68),(1215,'Xã Nậm Pung',68),(1216,'Xã Phìn Ngan',68),(1217,'Xã Tòng Sành',68),(1218,'Xã Pha Long',69),(1219,'Xã Tả Ngải Chồ',69),(1220,'Xã Tung Chung Phố',69),(1221,'Thị trấn Mường Khương',69),(1222,'Xã Dìn Chin',69),(1223,'Xã Tả Gia Khâu',69),(1224,'Xã Nậm Chảy',69),(1225,'Xã Nấm Lư',69),(1226,'Xã Lùng Khấu Nhin',69),(1227,'Xã Thanh Bình',69),(1228,'Xã Cao Sơn',69),(1229,'Xã Lùng Vai',69),(1230,'Xã Bản Lầu',69),(1231,'Xã La Pan Tẩn',69),(1232,'Xã Tả Thàng',69),(1233,'Xã Bản Sen',69),(1234,'Xã Nàn Sán',70),(1235,'Xã Thào Chư Phìn',70),(1236,'Xã Bản Mế',70),(1237,'Thị trấn Si Ma Cai',70),(1238,'Xã Sán Chải',70),(1239,'Xã Lùng Thẩn',70),(1240,'Xã Cán Cấu',70),(1241,'Xã Sín Chéng',70),(1242,'Xã Quan Hồ Thẩn',70),(1243,'Xã Nàn Xín',70),(1244,'Thị trấn Bắc Hà',71),(1245,'Xã Lùng Cải',71),(1246,'Xã Lùng Phình',71),(1247,'Xã Tả Van Chư',71),(1248,'Xã Tả Củ Tỷ',71),(1249,'Xã Thải Giàng Phố',71),(1250,'Xã Hoàng Thu Phố',71),(1251,'Xã Bản Phố',71),(1252,'Xã Bản Liền',71),(1253,'Xã Tà Chải',71),(1254,'Xã Na Hối',71),(1255,'Xã Cốc Ly',71),(1256,'Xã Nậm Mòn',71),(1257,'Xã Nậm Đét',71),(1258,'Xã Nậm Khánh',71),(1259,'Xã Bảo Nhai',71),(1260,'Xã Nậm Lúc',71),(1261,'Xã Cốc Lầu',71),(1262,'Xã Bản Cái',71),(1263,'Thị trấn N.T Phong Hải',72),(1264,'Thị trấn Phố Lu',72),(1265,'Thị trấn Tằng Loỏng',72),(1266,'Xã Bản Phiệt',72),(1267,'Xã Bản Cầm',72),(1268,'Xã Thái Niên',72),(1269,'Xã Phong Niên',72),(1270,'Xã Gia Phú',72),(1271,'Xã Xuân Quang',72),(1272,'Xã Sơn Hải',72),(1273,'Xã Xuân Giao',72),(1274,'Xã Trì Quang',72),(1275,'Xã Sơn Hà',72),(1276,'Xã Phú Nhuận',72),(1277,'Thị trấn Phố Ràng',73),(1278,'Xã Tân Tiến',73),(1279,'Xã Nghĩa Đô',73),(1280,'Xã Vĩnh Yên',73),(1281,'Xã Điện Quan',73),(1282,'Xã Xuân Hoà',73),(1283,'Xã Tân Dương',73),(1284,'Xã Thượng Hà',73),(1285,'Xã Kim Sơn',73),(1286,'Xã Cam Cọn',73),(1287,'Xã Minh Tân',73),(1288,'Xã Xuân Thượng',73),(1289,'Xã Việt Tiến',73),(1290,'Xã Yên Sơn',73),(1291,'Xã Bảo Hà',73),(1292,'Xã Lương Sơn',73),(1293,'Xã Phúc Khánh',73),(1294,'Phường Sa Pa',74),(1295,'Phường Sa Pả',74),(1296,'Phường Ô Quý Hồ',74),(1297,'Xã Ngũ Chỉ Sơn',74),(1298,'Phường Phan Si Păng',74),(1299,'Xã Trung Chải',74),(1300,'Xã Tả Phìn',74),(1301,'Phường Hàm Rồng',74),(1302,'Xã Hoàng Liên',74),(1303,'Xã Thanh Bình',74),(1304,'Phường Cầu Mây',74),(1305,'Xã Mường Hoa',74),(1306,'Xã Tả Van',74),(1307,'Xã Mường Bo',74),(1308,'Xã Bản Hồ',74),(1309,'Xã Liên Minh',74),(1310,'Thị trấn Khánh Yên',75),(1311,'Xã Võ Lao',75),(1312,'Xã Sơn Thuỷ',75),(1313,'Xã Nậm Mả',75),(1314,'Xã Tân Thượng',75),(1315,'Xã Nậm Rạng',75),(1316,'Xã Nậm Chầy',75),(1317,'Xã Tân An',75),(1318,'Xã Khánh Yên Thượng',75),(1319,'Xã Nậm Xé',75),(1320,'Xã Dần Thàng',75),(1321,'Xã Chiềng Ken',75),(1322,'Xã Làng Giàng',75),(1323,'Xã Hoà Mạc',75),(1324,'Xã Khánh Yên Trung',75),(1325,'Xã Khánh Yên Hạ',75),(1326,'Xã Dương Quỳ',75),(1327,'Xã Nậm Tha',75),(1328,'Xã Minh Lương',75),(1329,'Xã Thẩm Dương',75),(1330,'Xã Liêm Phú',75),(1331,'Xã Nậm Xây',75),(1332,'Phường Noong Bua',76),(1333,'Phường Him Lam',76),(1334,'Phường Thanh Bình',76),(1335,'Phường Tân Thanh',76),(1336,'Phường Mường Thanh',76),(1337,'Phường Nam Thanh',76),(1338,'Phường Thanh Trường',76),(1339,'Xã Thanh Minh',76),(1340,'Xã Nà Tấu',76),(1341,'Xã Nà Nhạn',76),(1342,'Xã Mường Phăng',76),(1343,'Xã Pá Khoang',76),(1344,'Phường Sông Đà',77),(1345,'Phường Na Lay',77),(1346,'Xã Lay Nưa',77),(1347,'Xã Sín Thầu',78),(1348,'Xã Sen Thượng',78),(1349,'Xã Chung Chải',78),(1350,'Xã Leng Su Sìn',78),(1351,'Xã Pá Mỳ',78),(1352,'Xã Mường Nhé',78),(1353,'Xã Nậm Vì',78),(1354,'Xã Nậm Kè',78),(1355,'Xã Mường Toong',78),(1356,'Xã Quảng Lâm',78),(1357,'Xã Huổi Lếnh',78),(1358,'Thị Trấn Mường Chà',79),(1359,'Xã Xá Tổng',79),(1360,'Xã Mường Tùng',79),(1361,'Xã Hừa Ngài',79),(1362,'Xã Huổi Mí',79),(1363,'Xã Pa Ham',79),(1364,'Xã Nậm Nèn',79),(1365,'Xã Huổi Lèng',79),(1366,'Xã Sa Lông',79),(1367,'Xã Ma Thì Hồ',79),(1368,'Xã Na Sang',79),(1369,'Xã Mường Mươn',79),(1370,'Thị trấn Tủa Chùa',80),(1371,'Xã Huổi Só',80),(1372,'Xã Xín Chải',80),(1373,'Xã Tả Sìn Thàng',80),(1374,'Xã Lao Xả Phình',80),(1375,'Xã Tả Phìn',80),(1376,'Xã Tủa Thàng',80),(1377,'Xã Trung Thu',80),(1378,'Xã Sính Phình',80),(1379,'Xã Sáng Nhè',80),(1380,'Xã Mường Đun',80),(1381,'Xã Mường Báng',80),(1382,'Thị trấn Tuần Giáo',81),(1383,'Xã Phình Sáng',81),(1384,'Xã Rạng Đông',81),(1385,'Xã Mùn Chung',81),(1386,'Xã Nà Tòng',81),(1387,'Xã Ta Ma',81),(1388,'Xã Mường Mùn',81),(1389,'Xã Pú Xi',81),(1390,'Xã Pú Nhung',81),(1391,'Xã Quài Nưa',81),(1392,'Xã Mường Thín',81),(1393,'Xã Tỏa Tình',81),(1394,'Xã Nà Sáy',81),(1395,'Xã Mường Khong',81),(1396,'Xã Quài Cang',81),(1397,'Xã Quài Tở',81),(1398,'Xã Chiềng Sinh',81),(1399,'Xã Chiềng Đông',81),(1400,'Xã Tênh Phông',81),(1401,'Xã Mường Pồn',82),(1402,'Xã Thanh Nưa',82),(1403,'Xã Hua Thanh',82),(1404,'Xã Thanh Luông',82),(1405,'Xã Thanh Hưng',82),(1406,'Xã Thanh Xương',82),(1407,'Xã Thanh Chăn',82),(1408,'Xã Pa Thơm',82),(1409,'Xã Thanh An',82),(1410,'Xã Thanh Yên',82),(1411,'Xã Noong Luống',82),(1412,'Xã Noọng Hẹt',82),(1413,'Xã Sam Mứn',82),(1414,'Xã Pom Lót',82),(1415,'Xã Núa Ngam',82),(1416,'Xã Hẹ Muông',82),(1417,'Xã Na Ư',82),(1418,'Xã Mường Nhà',82),(1419,'Xã Na Tông',82),(1420,'Xã Mường Lói',82),(1421,'Xã Phu Luông',82),(1422,'Thị trấn Điện Biên Đông',83),(1423,'Xã Na Son',83),(1424,'Xã Phì Nhừ',83),(1425,'Xã Chiềng Sơ',83),(1426,'Xã Mường Luân',83),(1427,'Xã Pú Nhi',83),(1428,'Xã Nong U',83),(1429,'Xã Xa Dung',83),(1430,'Xã Keo Lôm',83),(1431,'Xã Luân Giới',83),(1432,'Xã Phình Giàng',83),(1433,'Xã Pú Hồng',83),(1434,'Xã Tìa Dình',83),(1435,'Xã Háng Lìa',83),(1436,'Thị trấn Mường Ảng',84),(1437,'Xã Mường Đăng',84),(1438,'Xã Ngối Cáy',84),(1439,'Xã Ẳng Tở',84),(1440,'Xã Búng Lao',84),(1441,'Xã Xuân Lao',84),(1442,'Xã Ẳng Nưa',84),(1443,'Xã Ẳng Cang',84),(1444,'Xã Nặm Lịch',84),(1445,'Xã Mường Lạn',84),(1446,'Xã Nậm Tin',85),(1447,'Xã Pa Tần',85),(1448,'Xã Chà Cang',85),(1449,'Xã Na Cô Sa',85),(1450,'Xã Nà Khoa',85),(1451,'Xã Nà Hỳ',85),(1452,'Xã Nà Bủng',85),(1453,'Xã Nậm Nhừ',85),(1454,'Xã Nậm Chua',85),(1455,'Xã Nậm Khăn',85),(1456,'Xã Chà Tở',85),(1457,'Xã Vàng Đán',85),(1458,'Xã Chà Nưa',85),(1459,'Xã Phìn Hồ',85),(1460,'Xã Si Pa Phìn',85),(1461,'Phường Quyết Thắng',86),(1462,'Phường Tân Phong',86),(1463,'Phường Quyết Tiến',86),(1464,'Phường Đoàn Kết',86),(1465,'Xã Sùng Phài',86),(1466,'Phường Đông Phong',86),(1467,'Xã San Thàng',86),(1468,'Thị trấn Tam Đường',87),(1469,'Xã Thèn Sin',87),(1470,'Xã Tả Lèng',87),(1471,'Xã Giang Ma',87),(1472,'Xã Hồ Thầu',87),(1473,'Xã Bình Lư',87),(1474,'Xã Sơn Bình',87),(1475,'Xã Nùng Nàng',87),(1476,'Xã Bản Giang',87),(1477,'Xã Bản Hon',87),(1478,'Xã Bản Bo',87),(1479,'Xã Nà Tăm',87),(1480,'Xã Khun Há',87),(1481,'Thị trấn Mường Tè',88),(1482,'Xã Thu Lũm',88),(1483,'Xã Ka Lăng',88),(1484,'Xã Tá Bạ',88),(1485,'Xã Pa ủ',88),(1486,'Xã Mường Tè',88),(1487,'Xã Pa Vệ Sử',88),(1488,'Xã Mù Cả',88),(1489,'Xã Bum Tở',88),(1490,'Xã Nậm Khao',88),(1491,'Xã Tà Tổng',88),(1492,'Xã Bum Nưa',88),(1493,'Xã Vàng San',88),(1494,'Xã Kan Hồ',88),(1495,'Thị trấn Sìn Hồ',89),(1496,'Xã Chăn Nưa',89),(1497,'Xã Pa Tần',89),(1498,'Xã Phìn Hồ',89),(1499,'Xã Hồng Thu',89),(1500,'Xã Phăng Sô Lin',89),(1501,'Xã Ma Quai',89),(1502,'Xã Lùng Thàng',89),(1503,'Xã Tả Phìn',89),(1504,'Xã Sà Dề Phìn',89),(1505,'Xã Nậm Tăm',89),(1506,'Xã Tả Ngảo',89),(1507,'Xã Pu Sam Cáp',89),(1508,'Xã Nậm Cha',89),(1509,'Xã Pa Khoá',89),(1510,'Xã Làng Mô',89),(1511,'Xã Noong Hẻo',89),(1512,'Xã Nậm Mạ',89),(1513,'Xã Căn Co',89),(1514,'Xã Tủa Sín Chải',89),(1515,'Xã Nậm Cuổi',89),(1516,'Xã Nậm Hăn',89),(1517,'Xã Lả Nhì Thàng',90),(1518,'Xã Huổi Luông',90),(1519,'Thị trấn Phong Thổ',90),(1520,'Xã Sì Lở Lầu',90),(1521,'Xã Mồ Sì San',90),(1522,'Xã Pa Vây Sử',90),(1523,'Xã Vàng Ma Chải',90),(1524,'Xã Tông Qua Lìn',90),(1525,'Xã Mù Sang',90),(1526,'Xã Dào San',90),(1527,'Xã Ma Ly Pho',90),(1528,'Xã Bản Lang',90),(1529,'Xã Hoang Thèn',90),(1530,'Xã Khổng Lào',90),(1531,'Xã Nậm Xe',90),(1532,'Xã Mường So',90),(1533,'Xã Sin Suối Hồ',90),(1534,'Thị trấn Than Uyên',91),(1535,'Xã Phúc Than',91),(1536,'Xã Mường Than',91),(1537,'Xã Mường Mít',91),(1538,'Xã Pha Mu',91),(1539,'Xã Mường Cang',91),(1540,'Xã Hua Nà',91),(1541,'Xã Tà Hừa',91),(1542,'Xã Mường Kim',91),(1543,'Xã Tà Mung',91),(1544,'Xã Tà Gia',91),(1545,'Xã Khoen On',91),(1546,'Thị trấn Tân Uyên',92),(1547,'Xã Mường Khoa',92),(1548,'Xã Phúc Khoa',92),(1549,'Xã Thân Thuộc',92),(1550,'Xã Trung Đồng',92),(1551,'Xã Hố Mít',92),(1552,'Xã Nậm Cần',92),(1553,'Xã Nậm Sỏ',92),(1554,'Xã Pắc Ta',92),(1555,'Xã Tà Mít',92),(1556,'Thị trấn Nậm Nhùn',93),(1557,'Xã Hua Bun',93),(1558,'Xã Mường Mô',93),(1559,'Xã Nậm Chà',93),(1560,'Xã Nậm Manh',93),(1561,'Xã Nậm Hàng',93),(1562,'Xã Lê Lợi',93),(1563,'Xã Pú Đao',93),(1564,'Xã Nậm Pì',93),(1565,'Xã Nậm Ban',93),(1566,'Xã Trung Chải',93),(1567,'Phường Chiềng Lề',94),(1568,'Phường Tô Hiệu',94),(1569,'Phường Quyết Thắng',94),(1570,'Phường Quyết Tâm',94),(1571,'Xã Chiềng Cọ',94),(1572,'Xã Chiềng Đen',94),(1573,'Xã Chiềng Xôm',94),(1574,'Phường Chiềng An',94),(1575,'Phường Chiềng Cơi',94),(1576,'Xã Chiềng Ngần',94),(1577,'Xã Hua La',94),(1578,'Phường Chiềng Sinh',94),(1579,'Xã Mường Chiên',95),(1580,'Xã Cà Nàng',95),(1581,'Xã Chiềng Khay',95),(1582,'Xã Mường Giôn',95),(1583,'Xã Pá Ma Pha Khinh',95),(1584,'Xã Chiềng Ơn',95),(1585,'Xã Mường Giàng',95),(1586,'Xã Chiềng Bằng',95),(1587,'Xã Mường Sại',95),(1588,'Xã Nậm ét',95),(1589,'Xã Chiềng Khoang',95),(1590,'Thị trấn Thuận Châu',96),(1591,'Xã Phổng Lái',96),(1592,'Xã Mường é',96),(1593,'Xã Chiềng Pha',96),(1594,'Xã Chiềng La',96),(1595,'Xã Chiềng Ngàm',96),(1596,'Xã Liệp Tè',96),(1597,'Xã é Tòng',96),(1598,'Xã Phổng Lập',96),(1599,'Xã Phổng Lăng',96),(1600,'Xã Chiềng Ly',96),(1601,'Xã Noong Lay',96),(1602,'Xã Mường Khiêng',96),(1603,'Xã Mường Bám',96),(1604,'Xã Long Hẹ',96),(1605,'Xã Chiềng Bôm',96),(1606,'Xã Thôm Mòn',96),(1607,'Xã Tông Lạnh',96),(1608,'Xã Tông Cọ',96),(1609,'Xã Bó Mười',96),(1610,'Xã Co Mạ',96),(1611,'Xã Púng Tra',96),(1612,'Xã Chiềng Pấc',96),(1613,'Xã Nậm Lầu',96),(1614,'Xã Bon Phặng',96),(1615,'Xã Co Tòng',96),(1616,'Xã Muổi Nọi',96),(1617,'Xã Pá Lông',96),(1618,'Xã Bản Lầm',96),(1619,'Thị trấn Ít Ong',97),(1620,'Xã Nậm Giôn',97),(1621,'Xã Chiềng Lao',97),(1622,'Xã Hua Trai',97),(1623,'Xã Ngọc Chiến',97),(1624,'Xã Mường Trai',97),(1625,'Xã Nậm Păm',97),(1626,'Xã Chiềng Muôn',97),(1627,'Xã Chiềng Ân',97),(1628,'Xã Pi Toong',97),(1629,'Xã Chiềng Công',97),(1630,'Xã Tạ Bú',97),(1631,'Xã Chiềng San',97),(1632,'Xã Mường Bú',97),(1633,'Xã Chiềng Hoa',97),(1634,'Xã Mường Chùm',97),(1635,'Thị trấn Bắc Yên',98),(1636,'Xã Phiêng Ban',98),(1637,'Xã Hang Chú',98),(1638,'Xã Xím Vàng',98),(1639,'Xã Tà Xùa',98),(1640,'Xã Háng Đồng',98),(1641,'Xã Pắc Ngà',98),(1642,'Xã Làng Chếu',98),(1643,'Xã Chim Vàn',98),(1644,'Xã Mường Khoa',98),(1645,'Xã Song Pe',98),(1646,'Xã Hồng Ngài',98),(1647,'Xã Tạ Khoa',98),(1648,'Xã Hua Nhàn',98),(1649,'Xã Phiêng Côn',98),(1650,'Xã Chiềng Sại',98),(1651,'Thị trấn Phù Yên',99),(1652,'Xã Suối Tọ',99),(1653,'Xã Mường Thải',99),(1654,'Xã Mường Cơi',99),(1655,'Xã Quang Huy',99),(1656,'Xã Huy Bắc',99),(1657,'Xã Huy Thượng',99),(1658,'Xã Tân Lang',99),(1659,'Xã Gia Phù',99),(1660,'Xã Tường Phù',99),(1661,'Xã Huy Hạ',99),(1662,'Xã Huy Tân',99),(1663,'Xã Mường Lang',99),(1664,'Xã Suối Bau',99),(1665,'Xã Huy Tường',99),(1666,'Xã Mường Do',99),(1667,'Xã Sập Xa',99),(1668,'Xã Tường Thượng',99),(1669,'Xã Tường Tiến',99),(1670,'Xã Tường Phong',99),(1671,'Xã Tường Hạ',99),(1672,'Xã Kim Bon',99),(1673,'Xã Mường Bang',99),(1674,'Xã Đá Đỏ',99),(1675,'Xã Tân Phong',99),(1676,'Xã Nam Phong',99),(1677,'Xã Bắc Phong',99),(1678,'Thị trấn Mộc Châu',100),(1679,'Thị trấn NT Mộc Châu',100),(1680,'Xã Chiềng Sơn',100),(1681,'Xã Tân Hợp',100),(1682,'Xã Qui Hướng',100),(1683,'Xã Tân Lập',100),(1684,'Xã Nà Mường',100),(1685,'Xã Tà Lai',100),(1686,'Xã Chiềng Hắc',100),(1687,'Xã Hua Păng',100),(1688,'Xã Chiềng Khừa',100),(1689,'Xã Mường Sang',100),(1690,'Xã Đông Sang',100),(1691,'Xã Phiêng Luông',100),(1692,'Xã Lóng Sập',100),(1693,'Thị trấn Yên Châu',101),(1694,'Xã Chiềng Đông',101),(1695,'Xã Sập Vạt',101),(1696,'Xã Chiềng Sàng',101),(1697,'Xã Chiềng Pằn',101),(1698,'Xã Viêng Lán',101),(1699,'Xã Chiềng Hặc',101),(1700,'Xã Mường Lựm',101),(1701,'Xã Chiềng On',101),(1702,'Xã Yên Sơn',101),(1703,'Xã Chiềng Khoi',101),(1704,'Xã Tú Nang',101),(1705,'Xã Lóng Phiêng',101),(1706,'Xã Phiêng Khoài',101),(1707,'Xã Chiềng Tương',101),(1708,'Thị trấn Hát Lót',102),(1709,'Xã Chiềng Sung',102),(1710,'Xã Mường Bằng',102),(1711,'Xã Chiềng Chăn',102),(1712,'Xã Mương Chanh',102),(1713,'Xã Chiềng Ban',102),(1714,'Xã Chiềng Mung',102),(1715,'Xã Mường Bon',102),(1716,'Xã Chiềng Chung',102),(1717,'Xã Chiềng Mai',102),(1718,'Xã Hát Lót',102),(1719,'Xã Nà Pó',102),(1720,'Xã Cò  Nòi',102),(1721,'Xã Chiềng Nơi',102),(1722,'Xã Phiêng Cằm',102),(1723,'Xã Chiềng Dong',102),(1724,'Xã Chiềng Kheo',102),(1725,'Xã Chiềng Ve',102),(1726,'Xã Chiềng Lương',102),(1727,'Xã Phiêng Pằn',102),(1728,'Xã Nà Ơt',102),(1729,'Xã Tà Hộc',102),(1730,'Thị trấn Sông Mã',103),(1731,'Xã Bó Sinh',103),(1732,'Xã Pú Pẩu',103),(1733,'Xã Chiềng Phung',103),(1734,'Xã Chiềng En',103),(1735,'Xã Mường Lầm',103),(1736,'Xã Nậm Ty',103),(1737,'Xã Đứa Mòn',103),(1738,'Xã Yên Hưng',103),(1739,'Xã Chiềng Sơ',103),(1740,'Xã Nà Nghịu',103),(1741,'Xã Nậm Mằn',103),(1742,'Xã Chiềng Khoong',103),(1743,'Xã Chiềng Cang',103),(1744,'Xã Huổi Một',103),(1745,'Xã Mường Sai',103),(1746,'Xã Mường Cai',103),(1747,'Xã Mường Hung',103),(1748,'Xã Chiềng Khương',103),(1749,'Xã Sam Kha',104),(1750,'Xã Púng Bánh',104),(1751,'Xã Sốp Cộp',104),(1752,'Xã Dồm Cang',104),(1753,'Xã Nậm Lạnh',104),(1754,'Xã Mường Lèo',104),(1755,'Xã Mường Và',104),(1756,'Xã Mường Lạn',104),(1757,'Xã Suối Bàng',105),(1758,'Xã Song Khủa',105),(1759,'Xã Liên Hoà',105),(1760,'Xã Tô Múa',105),(1761,'Xã Mường Tè',105),(1762,'Xã Chiềng Khoa',105),(1763,'Xã Mường Men',105),(1764,'Xã Quang Minh',105),(1765,'Xã Vân Hồ',105),(1766,'Xã Lóng Luông',105),(1767,'Xã Chiềng Yên',105),(1768,'Xã Chiềng Xuân',105),(1769,'Xã Xuân Nha',105),(1770,'Xã Tân Xuân',105),(1771,'Phường Yên Thịnh',106),(1772,'Phường Yên Ninh',106),(1773,'Phường Minh Tân',106),(1774,'Phường Nguyễn Thái Học',106),(1775,'Phường Đồng Tâm',106),(1776,'Phường Nguyễn Phúc',106),(1777,'Phường Hồng Hà',106),(1778,'Xã Minh Bảo',106),(1779,'Phường Nam Cường',106),(1780,'Xã Tuy Lộc',106),(1781,'Xã Tân Thịnh',106),(1782,'Xã Âu Lâu',106),(1783,'Xã Giới Phiên',106),(1784,'Phường Hợp Minh',106),(1785,'Xã Văn Phú',106),(1786,'Phường Pú Trạng',107),(1787,'Phường Trung Tâm',107),(1788,'Phường Tân An',107),(1789,'Phường Cầu Thia',107),(1790,'Xã Nghĩa Lợi',107),(1791,'Xã Nghĩa Phúc',107),(1792,'Xã Nghĩa An',107),(1793,'Xã Nghĩa Lộ',107),(1794,'Xã Sơn A',107),(1795,'Xã Phù Nham',107),(1796,'Xã Thanh Lương',107),(1797,'Xã Hạnh Sơn',107),(1798,'Xã Phúc Sơn',107),(1799,'Xã Thạch Lương',107),(1800,'Thị trấn Yên Thế',108),(1801,'Xã Tân Phượng',108),(1802,'Xã Lâm Thượng',108),(1803,'Xã Khánh Thiện',108),(1804,'Xã Minh Chuẩn',108),(1805,'Xã Mai Sơn',108),(1806,'Xã Khai Trung',108),(1807,'Xã Mường Lai',108),(1808,'Xã An Lạc',108),(1809,'Xã Minh Xuân',108),(1810,'Xã Tô Mậu',108),(1811,'Xã Tân Lĩnh',108),(1812,'Xã Yên Thắng',108),(1813,'Xã Khánh Hoà',108),(1814,'Xã Vĩnh Lạc',108),(1815,'Xã Liễu Đô',108),(1816,'Xã Động Quan',108),(1817,'Xã Tân Lập',108),(1818,'Xã Minh Tiến',108),(1819,'Xã Trúc Lâu',108),(1820,'Xã Phúc Lợi',108),(1821,'Xã Phan Thanh',108),(1822,'Xã An Phú',108),(1823,'Xã Trung Tâm',108),(1824,'Thị trấn Mậu A',109),(1825,'Xã Lang Thíp',109),(1826,'Xã Lâm Giang',109),(1827,'Xã Châu Quế Thượng',109),(1828,'Xã Châu Quế Hạ',109),(1829,'Xã An Bình',109),(1830,'Xã Quang Minh',109),(1831,'Xã Đông An',109),(1832,'Xã Đông Cuông',109),(1833,'Xã Phong Dụ Hạ',109),(1834,'Xã Mậu Đông',109),(1835,'Xã Ngòi A',109),(1836,'Xã Xuân Tầm',109),(1837,'Xã Tân Hợp',109),(1838,'Xã An Thịnh',109),(1839,'Xã Yên Thái',109),(1840,'Xã Phong Dụ Thượng',109),(1841,'Xã Yên Hợp',109),(1842,'Xã Đại Sơn',109),(1843,'Xã Đại Phác',109),(1844,'Xã Yên Phú',109),(1845,'Xã Xuân Ái',109),(1846,'Xã Viễn Sơn',109),(1847,'Xã Mỏ Vàng',109),(1848,'Xã Nà Hẩu',109),(1849,'Thị trấn Mù Căng Chải',110),(1850,'Xã Hồ Bốn',110),(1851,'Xã Nậm Có',110),(1852,'Xã Khao Mang',110),(1853,'Xã Mồ Dề',110),(1854,'Xã Chế Cu Nha',110),(1855,'Xã Lao Chải',110),(1856,'Xã Kim Nọi',110),(1857,'Xã Cao Phạ',110),(1858,'Xã La Pán Tẩn',110),(1859,'Xã Dế Su Phình',110),(1860,'Xã Chế Tạo',110),(1861,'Xã Púng Luông',110),(1862,'Xã Nậm Khắt',110),(1863,'Thị trấn Cổ Phúc',111),(1864,'Xã Tân Đồng',111),(1865,'Xã Báo Đáp',111),(1866,'Xã Đào Thịnh',111),(1867,'Xã Việt Thành',111),(1868,'Xã Hòa Cuông',111),(1869,'Xã Minh Quán',111),(1870,'Xã Quy Mông',111),(1871,'Xã Cường Thịnh',111),(1872,'Xã Kiên Thành',111),(1873,'Xã Nga Quán',111),(1874,'Xã Y Can',111),(1875,'Xã Lương Thịnh',111),(1876,'Xã Bảo Hưng',111),(1877,'Xã Việt Cường',111),(1878,'Xã Minh Quân',111),(1879,'Xã Hồng Ca',111),(1880,'Xã Hưng Thịnh',111),(1881,'Xã Hưng Khánh',111),(1882,'Xã Việt Hồng',111),(1883,'Xã Vân Hội',111),(1884,'Thị trấn Trạm Tấu',112),(1885,'Xã Túc Đán',112),(1886,'Xã Pá Lau',112),(1887,'Xã Xà Hồ',112),(1888,'Xã Phình Hồ',112),(1889,'Xã Trạm Tấu',112),(1890,'Xã Tà Si Láng',112),(1891,'Xã Pá Hu',112),(1892,'Xã Làng Nhì',112),(1893,'Xã Bản Công',112),(1894,'Xã Bản Mù',112),(1895,'Xã Hát Lìu',112),(1896,'Thị trấn NT Liên Sơn',113),(1897,'Thị trấn NT Trần Phú',113),(1898,'Xã Tú Lệ',113),(1899,'Xã Nậm Búng',113),(1900,'Xã Gia Hội',113),(1901,'Xã Sùng Đô',113),(1902,'Xã Nậm Mười',113),(1903,'Xã An Lương',113),(1904,'Xã Nậm Lành',113),(1905,'Xã Sơn Lương',113),(1906,'Xã Suối Quyền',113),(1907,'Xã Suối Giàng',113),(1908,'Xã Nghĩa Sơn',113),(1909,'Xã Suối Bu',113),(1910,'Thị trấn Sơn Thịnh',113),(1911,'Xã Đại Lịch',113),(1912,'Xã Đồng Khê',113),(1913,'Xã Cát Thịnh',113),(1914,'Xã Tân Thịnh',113),(1915,'Xã Chấn Thịnh',113),(1916,'Xã Bình Thuận',113),(1917,'Xã Thượng Bằng La',113),(1918,'Xã Minh An',113),(1919,'Xã Nghĩa Tâm',113),(1920,'Thị trấn Yên Bình',114),(1921,'Thị trấn Thác Bà',114),(1922,'Xã Xuân Long',114),(1923,'Xã Cảm Nhân',114),(1924,'Xã Ngọc Chấn',114),(1925,'Xã Tân Nguyên',114),(1926,'Xã Phúc Ninh',114),(1927,'Xã Bảo Ái',114),(1928,'Xã Mỹ Gia',114),(1929,'Xã Xuân Lai',114),(1930,'Xã Mông Sơn',114),(1931,'Xã Cảm Ân',114),(1932,'Xã Yên Thành',114),(1933,'Xã Tân Hương',114),(1934,'Xã Phúc An',114),(1935,'Xã Bạch Hà',114),(1936,'Xã Vũ Linh',114),(1937,'Xã Đại Đồng',114),(1938,'Xã Vĩnh Kiên',114),(1939,'Xã Yên Bình',114),(1940,'Xã Thịnh Hưng',114),(1941,'Xã Hán Đà',114),(1942,'Xã Phú Thịnh',114),(1943,'Xã Đại Minh',114),(1944,'Phường Thái Bình',115),(1945,'Phường Tân Hòa',115),(1946,'Phường Thịnh Lang',115),(1947,'Phường Hữu Nghị',115),(1948,'Phường Tân Thịnh',115),(1949,'Phường Đồng Tiến',115),(1950,'Phường Phương Lâm',115),(1951,'Xã Yên Mông',115),(1952,'Phường Quỳnh Lâm',115),(1953,'Phường Dân Chủ',115),(1954,'Xã Hòa Bình',115),(1955,'Phường Thống Nhất',115),(1956,'Phường Kỳ Sơn',115),(1957,'Xã Thịnh Minh',115),(1958,'Xã Hợp Thành',115),(1959,'Xã Quang Tiến',115),(1960,'Xã Mông Hóa',115),(1961,'Phường Trung Minh',115),(1962,'Xã Độc Lập',115),(1963,'Thị trấn Đà Bắc',116),(1964,'Xã Nánh Nghê',116),(1965,'Xã Giáp Đắt',116),(1966,'Xã Mường Chiềng',116),(1967,'Xã Tân Pheo',116),(1968,'Xã Đồng Chum',116),(1969,'Xã Tân Minh',116),(1970,'Xã Đoàn Kết',116),(1971,'Xã Đồng Ruộng',116),(1972,'Xã Tú Lý',116),(1973,'Xã Trung Thành',116),(1974,'Xã Yên Hòa',116),(1975,'Xã Cao Sơn',116),(1976,'Xã Toàn Sơn',116),(1977,'Xã Hiền Lương',116),(1978,'Xã Tiền Phong',116),(1979,'Xã Vầy Nưa',116),(1980,'Thị trấn Lương Sơn',117),(1981,'Xã Lâm Sơn',117),(1982,'Xã Hòa Sơn',117),(1983,'Xã Tân Vinh',117),(1984,'Xã Nhuận Trạch',117),(1985,'Xã Cao Sơn',117),(1986,'Xã Cư Yên',117),(1987,'Xã Liên Sơn',117),(1988,'Xã Cao Dương',117),(1989,'Xã Thanh Sơn',117),(1990,'Xã Thanh Cao',117),(1991,'Thị trấn Bo',118),(1992,'Xã Đú Sáng',118),(1993,'Xã Hùng Sơn',118),(1994,'Xã Bình Sơn',118),(1995,'Xã Tú Sơn',118),(1996,'Xã Vĩnh Tiến',118),(1997,'Xã Đông Bắc',118),(1998,'Xã Xuân Thủy',118),(1999,'Xã Vĩnh Đồng',118),(2000,'Xã Kim Lập',118),(2001,'Xã Hợp Tiến',118),(2002,'Xã Kim Bôi',118),(2003,'Xã Nam Thượng',118),(2004,'Xã Cuối Hạ',118),(2005,'Xã Sào Báy',118),(2006,'Xã Mi Hòa',118),(2007,'Xã Nuông Dăm',118),(2008,'Thị trấn Cao Phong',119),(2009,'Xã Bình Thanh',119),(2010,'Xã Thung Nai',119),(2011,'Xã Bắc Phong',119),(2012,'Xã Thu Phong',119),(2013,'Xã Hợp Phong',119),(2014,'Xã Tây Phong',119),(2015,'Xã Dũng Phong',119),(2016,'Xã Nam Phong',119),(2017,'Xã Thạch Yên',119),(2018,'Thị trấn Mãn Đức',120),(2019,'Xã Suối Hoa',120),(2020,'Xã Phú Vinh',120),(2021,'Xã Phú Cường',120),(2022,'Xã Mỹ Hòa',120),(2023,'Xã Quyết Chiến',120),(2024,'Xã Phong Phú',120),(2025,'Xã Tử Nê',120),(2026,'Xã Thanh Hối',120),(2027,'Xã Ngọc Mỹ',120),(2028,'Xã Đông Lai',120),(2029,'Xã Vân Sơn',120),(2030,'Xã Nhân Mỹ',120),(2031,'Xã Lỗ Sơn',120),(2032,'Xã Ngổ Luông',120),(2033,'Xã Gia Mô',120),(2034,'Xã Tân Thành',121),(2035,'Thị trấn Mai Châu',121),(2036,'Xã Sơn Thủy',121),(2037,'Xã Pà Cò',121),(2038,'Xã Hang Kia',121),(2039,'Xã Đồng Tân',121),(2040,'Xã Cun Pheo',121),(2041,'Xã Bao La',121),(2042,'Xã Tòng Đậu',121),(2043,'Xã Nà Phòn',121),(2044,'Xã Săm Khóe',121),(2045,'Xã Chiềng Châu',121),(2046,'Xã Mai Hạ',121),(2047,'Xã Thành Sơn',121),(2048,'Xã Mai Hịch',121),(2049,'Xã Vạn Mai',121),(2050,'Thị trấn Vụ Bản',122),(2051,'Xã Quý Hòa',122),(2052,'Xã Miền Đồi',122),(2053,'Xã Mỹ Thành',122),(2054,'Xã Tuân Đạo',122),(2055,'Xã Văn Nghĩa',122),(2056,'Xã Văn Sơn',122),(2057,'Xã Tân Lập',122),(2058,'Xã Nhân Nghĩa',122),(2059,'Xã Thượng Cốc',122),(2060,'Xã Quyết Thắng',122),(2061,'Xã Xuất Hóa',122),(2062,'Xã Yên Phú',122),(2063,'Xã Bình Hẻm',122),(2064,'Xã Định Cư',122),(2065,'Xã Chí Đạo',122),(2066,'Xã Ngọc Sơn',122),(2067,'Xã Hương Nhượng',122),(2068,'Xã Vũ Bình',122),(2069,'Xã Tự Do',122),(2070,'Xã Yên Nghiệp',122),(2071,'Xã Tân Mỹ',122),(2072,'Xã Ân Nghĩa',122),(2073,'Xã Ngọc Lâu',122),(2074,'Thị trấn Hàng Trạm',123),(2075,'Xã Lạc Sỹ',123),(2076,'Xã Lạc Lương',123),(2077,'Xã Bảo Hiệu',123),(2078,'Xã Đa Phúc',123),(2079,'Xã Hữu Lợi',123),(2080,'Xã Lạc Thịnh',123),(2081,'Xã Đoàn Kết',123),(2082,'Xã Phú Lai',123),(2083,'Xã Yên Trị',123),(2084,'Xã Ngọc Lương',123),(2085,'Thị trấn Ba Hàng Đồi',124),(2086,'Thị trấn Chi Nê',124),(2087,'Xã Phú Nghĩa',124),(2088,'Xã Phú Thành',124),(2089,'Xã Hưng Thi',124),(2090,'Xã Khoan Dụ',124),(2091,'Xã Đồng Tâm',124),(2092,'Xã Yên Bồng',124),(2093,'Xã Thống Nhất',124),(2094,'Xã An Bình',124),(2095,'Phường Quán Triều',125),(2096,'Phường Quang Vinh',125),(2097,'Phường Túc Duyên',125),(2098,'Phường Hoàng Văn Thụ',125),(2099,'Phường Trưng Vương',125),(2100,'Phường Quang Trung',125),(2101,'Phường Phan Đình Phùng',125),(2102,'Phường Tân Thịnh',125),(2103,'Phường Thịnh Đán',125),(2104,'Phường Đồng Quang',125),(2105,'Phường Gia Sàng',125),(2106,'Phường Tân Lập',125),(2107,'Phường Cam Giá',125),(2108,'Phường Phú Xá',125),(2109,'Phường Hương Sơn',125),(2110,'Phường Trung Thành',125),(2111,'Phường Tân Thành',125),(2112,'Phường Tân Long',125),(2113,'Xã Phúc Hà',125),(2114,'Xã Phúc Xuân',125),(2115,'Xã Quyết Thắng',125),(2116,'Xã Phúc Trìu',125),(2117,'Xã Thịnh Đức',125),(2118,'Phường Tích Lương',125),(2119,'Xã Tân Cương',125),(2120,'Xã Sơn Cẩm',125),(2121,'Phường Chùa Hang',125),(2122,'Xã Cao Ngạn',125),(2123,'Xã Linh Sơn',125),(2124,'Phường Đồng Bẩm',125),(2125,'Xã Huống Thượng',125),(2126,'Xã Đồng Liên',125),(2127,'Phường Lương Sơn',126),(2128,'Phường Châu Sơn',126),(2129,'Phường Mỏ Chè',126),(2130,'Phường Cải Đan',126),(2131,'Phường Thắng Lợi',126),(2132,'Phường Phố Cò',126),(2133,'Xã Tân Quang',126),(2134,'Phường Bách Quang',126),(2135,'Xã Bình Sơn',126),(2136,'Xã Bá Xuyên',126),(2137,'Thị trấn Chợ Chu',127),(2138,'Xã Linh Thông',127),(2139,'Xã Lam Vỹ',127),(2140,'Xã Quy Kỳ',127),(2141,'Xã Tân Thịnh',127),(2142,'Xã Kim Phượng',127),(2143,'Xã Bảo Linh',127),(2144,'Xã Phúc Chu',127),(2145,'Xã Tân Dương',127),(2146,'Xã Phượng Tiến',127),(2147,'Xã Bảo Cường',127),(2148,'Xã Đồng Thịnh',127),(2149,'Xã Định Biên',127),(2150,'Xã Thanh Định',127),(2151,'Xã Trung Hội',127),(2152,'Xã Trung Lương',127),(2153,'Xã Bình Yên',127),(2154,'Xã Điềm Mặc',127),(2155,'Xã Phú Tiến',127),(2156,'Xã Bộc Nhiêu',127),(2157,'Xã Sơn Phú',127),(2158,'Xã Phú Đình',127),(2159,'Xã Bình Thành',127),(2160,'Thị trấn Giang Tiên',128),(2161,'Thị trấn Đu',128),(2162,'Xã Yên Ninh',128),(2163,'Xã Yên Trạch',128),(2164,'Xã Yên Đổ',128),(2165,'Xã Yên Lạc',128),(2166,'Xã Ôn Lương',128),(2167,'Xã Động Đạt',128),(2168,'Xã Phủ Lý',128),(2169,'Xã Phú Đô',128),(2170,'Xã Hợp Thành',128),(2171,'Xã Tức Tranh',128),(2172,'Xã Phấn Mễ',128),(2173,'Xã Vô Tranh',128),(2174,'Xã Cổ Lũng',128),(2175,'Thị trấn Sông Cầu',129),(2176,'Thị trấn Trại Cau',129),(2177,'Xã Văn Lăng',129),(2178,'Xã Tân Long',129),(2179,'Xã Hòa Bình',129),(2180,'Xã Quang Sơn',129),(2181,'Xã Minh Lập',129),(2182,'Xã Văn Hán',129),(2183,'Xã Hóa Trung',129),(2184,'Xã Khe Mo',129),(2185,'Xã Cây Thị',129),(2186,'Xã Hóa Thượng',129),(2187,'Xã Hợp Tiến',129),(2188,'Xã Tân Lợi',129),(2189,'Xã Nam Hòa',129),(2190,'Thị trấn Đình Cả',130),(2191,'Xã Sảng Mộc',130),(2192,'Xã Nghinh Tường',130),(2193,'Xã Thần Xa',130),(2194,'Xã Vũ Chấn',130),(2195,'Xã Thượng Nung',130),(2196,'Xã Phú Thượng',130),(2197,'Xã Cúc Đường',130),(2198,'Xã La Hiên',130),(2199,'Xã Lâu Thượng',130),(2200,'Xã Tràng Xá',130),(2201,'Xã Phương Giao',130),(2202,'Xã Liên Minh',130),(2203,'Xã Dân Tiến',130),(2204,'Xã Bình Long',130),(2205,'Thị trấn Hùng Sơn',131),(2206,'Thị trấn Quân Chu',131),(2207,'Xã Phúc Lương',131),(2208,'Xã Minh Tiến',131),(2209,'Xã Yên Lãng',131),(2210,'Xã Đức Lương',131),(2211,'Xã Phú Cường',131),(2212,'Xã Na Mao',131),(2213,'Xã Phú Lạc',131),(2214,'Xã Tân Linh',131),(2215,'Xã Phú Thịnh',131),(2216,'Xã Phục Linh',131),(2217,'Xã Phú Xuyên',131),(2218,'Xã Bản Ngoại',131),(2219,'Xã Tiên Hội',131),(2220,'Xã Cù Vân',131),(2221,'Xã Hà Thượng',131),(2222,'Xã La Bằng',131),(2223,'Xã Hoàng Nông',131),(2224,'Xã Khôi Kỳ',131),(2225,'Xã An Khánh',131),(2226,'Xã Tân Thái',131),(2227,'Xã Bình Thuận',131),(2228,'Xã Lục Ba',131),(2229,'Xã Mỹ Yên',131),(2230,'Xã Vạn Thọ',131),(2231,'Xã Văn Yên',131),(2232,'Xã Ký Phú',131),(2233,'Xã Cát Nê',131),(2234,'Xã Quân Chu',131),(2235,'Phường Bãi Bông',132),(2236,'Phường Bắc Sơn',132),(2237,'Phường Ba Hàng',132),(2238,'Xã Phúc Tân',132),(2239,'Xã Phúc Thuận',132),(2240,'Phường Hồng Tiến',132),(2241,'Xã Minh Đức',132),(2242,'Phường Đắc Sơn',132),(2243,'Phường Đồng Tiến',132),(2244,'Xã Thành Công',132),(2245,'Phường Tiên Phong',132),(2246,'Xã Vạn Phái',132),(2247,'Phường Nam Tiến',132),(2248,'Phường Tân Hương',132),(2249,'Phường Đông Cao',132),(2250,'Phường Trung Thành',132),(2251,'Phường Tân Phú',132),(2252,'Phường Thuận Thành',132),(2253,'Thị trấn Hương Sơn',133),(2254,'Xã Bàn Đạt',133),(2255,'Xã Tân Khánh',133),(2256,'Xã Tân Kim',133),(2257,'Xã Tân Thành',133),(2258,'Xã Đào Xá',133),(2259,'Xã Bảo Lý',133),(2260,'Xã Thượng Đình',133),(2261,'Xã Tân Hòa',133),(2262,'Xã Nhã Lộng',133),(2263,'Xã Điềm Thụy',133),(2264,'Xã Xuân Phương',133),(2265,'Xã Tân Đức',133),(2266,'Xã Úc Kỳ',133),(2267,'Xã Lương Phú',133),(2268,'Xã Nga My',133),(2269,'Xã Kha Sơn',133),(2270,'Xã Thanh Ninh',133),(2271,'Xã Dương Thành',133),(2272,'Xã Hà Châu',133),(2273,'Phường Hoàng Văn Thụ',134),(2274,'Phường Tam Thanh',134),(2275,'Phường Vĩnh Trại',134),(2276,'Phường Đông Kinh',134),(2277,'Phường Chi Lăng',134),(2278,'Xã Hoàng Đồng',134),(2279,'Xã Quảng Lạc',134),(2280,'Xã Mai Pha',134),(2281,'Thị trấn Thất Khê',135),(2282,'Xã Khánh Long',135),(2283,'Xã Đoàn Kết',135),(2284,'Xã Quốc Khánh',135),(2285,'Xã Vĩnh Tiến',135),(2286,'Xã Cao Minh',135),(2287,'Xã Chí Minh',135),(2288,'Xã Tri Phương',135),(2289,'Xã Tân Tiến',135),(2290,'Xã Tân Yên',135),(2291,'Xã Đội Cấn',135),(2292,'Xã Tân Minh',135),(2293,'Xã Kim Đồng',135),(2294,'Xã Chi Lăng',135),(2295,'Xã Trung Thành',135),(2296,'Xã Đại Đồng',135),(2297,'Xã Đào Viên',135),(2298,'Xã Đề Thám',135),(2299,'Xã Kháng Chiến',135),(2300,'Xã Hùng Sơn',135),(2301,'Xã Quốc Việt',135),(2302,'Xã Hùng Việt',135),(2303,'Xã Hưng Đạo',136),(2304,'Xã Vĩnh Yên',136),(2305,'Xã Hoa Thám',136),(2306,'Xã Quý Hòa',136),(2307,'Xã Hồng Phong',136),(2308,'Xã Yên Lỗ',136),(2309,'Xã Thiện Hòa',136),(2310,'Xã Quang Trung',136),(2311,'Xã Thiện Thuật',136),(2312,'Xã Minh Khai',136),(2313,'Xã Thiện Long',136),(2314,'Xã Hoàng Văn Thụ',136),(2315,'Xã Hòa Bình',136),(2316,'Xã Mông Ân',136),(2317,'Xã Tân Hòa',136),(2318,'Thị trấn Bình Gia',136),(2319,'Xã Hồng Thái',136),(2320,'Xã Bình La',136),(2321,'Xã Tân Văn',136),(2322,'Thị trấn Na Sầm',137),(2323,'Xã Trùng Khánh',137),(2324,'Xã Bắc La',137),(2325,'Xã Thụy Hùng',137),(2326,'Xã Bắc Hùng',137),(2327,'Xã Tân Tác',137),(2328,'Xã Thanh Long',137),(2329,'Xã Hội Hoan',137),(2330,'Xã Bắc Việt',137),(2331,'Xã Hoàng Việt',137),(2332,'Xã Gia Miễn',137),(2333,'Xã Thành Hòa',137),(2334,'Xã Tân Thanh',137),(2335,'Xã Tân Mỹ',137),(2336,'Xã Hồng Thái',137),(2337,'Xã  Hoàng Văn Thụ',137),(2338,'Xã Nhạc Kỳ',137),(2339,'Thị trấn Đồng Đăng',138),(2340,'Thị trấn Cao Lộc',138),(2341,'Xã Bảo Lâm',138),(2342,'Xã Thanh Lòa',138),(2343,'Xã Cao Lâu',138),(2344,'Xã Thạch Đạn',138),(2345,'Xã Xuất Lễ',138),(2346,'Xã Hồng Phong',138),(2347,'Xã Thụy Hùng',138),(2348,'Xã Lộc Yên',138),(2349,'Xã Phú Xá',138),(2350,'Xã Bình Trung',138),(2351,'Xã Hải Yến',138),(2352,'Xã Hòa Cư',138),(2353,'Xã Hợp Thành',138),(2354,'Xã Công Sơn',138),(2355,'Xã Gia Cát',138),(2356,'Xã Mẫu Sơn',138),(2357,'Xã Xuân Long',138),(2358,'Xã Tân Liên',138),(2359,'Xã Yên Trạch',138),(2360,'Xã Tân Thành',138),(2361,'Thị trấn Văn Quan',139),(2362,'Xã Trấn Ninh',139),(2363,'Xã Liên Hội',139),(2364,'Xã Hòa Bình',139),(2365,'Xã Tú Xuyên',139),(2366,'Xã Điềm He',139),(2367,'Xã An Sơn',139),(2368,'Xã Khánh Khê',139),(2369,'Xã Lương Năng',139),(2370,'Xã Đồng Giáp',139),(2371,'Xã Bình Phúc',139),(2372,'Xã Tràng Các',139),(2373,'Xã Tân Đoàn',139),(2374,'Xã Tri Lễ',139),(2375,'Xã Tràng Phái',139),(2376,'Xã Yên Phúc',139),(2377,'Xã Hữu Lễ',139),(2378,'Thị trấn Bắc Sơn',140),(2379,'Xã Long Đống',140),(2380,'Xã Vạn Thủy',140),(2381,'Xã Đồng ý',140),(2382,'Xã Tân Tri',140),(2383,'Xã Bắc Quỳnh',140),(2384,'Xã Hưng Vũ',140),(2385,'Xã Tân Lập',140),(2386,'Xã Vũ Sơn',140),(2387,'Xã Chiêu Vũ',140),(2388,'Xã Tân Hương',140),(2389,'Xã Chiến Thắng',140),(2390,'Xã Vũ Lăng',140),(2391,'Xã Trấn Yên',140),(2392,'Xã Vũ Lễ',140),(2393,'Xã Nhất Hòa',140),(2394,'Xã Tân Thành',140),(2395,'Xã Nhất Tiến',140),(2396,'Thị trấn Hữu Lũng',141),(2397,'Xã Hữu Liên',141),(2398,'Xã Yên Bình',141),(2399,'Xã Quyết Thắng',141),(2400,'Xã Hòa Bình',141),(2401,'Xã Yên Thịnh',141),(2402,'Xã Yên Sơn',141),(2403,'Xã Thiện Tân',141),(2404,'Xã Yên Vượng',141),(2405,'Xã Minh Tiến',141),(2406,'Xã Nhật Tiến',141),(2407,'Xã Thanh Sơn',141),(2408,'Xã Đồng Tân',141),(2409,'Xã Cai Kinh',141),(2410,'Xã Hòa Lạc',141),(2411,'Xã Vân Nham',141),(2412,'Xã Đồng Tiến',141),(2413,'Xã Tân Thành',141),(2414,'Xã Hòa Sơn',141),(2415,'Xã Minh Sơn',141),(2416,'Xã Hồ Sơn',141),(2417,'Xã Sơn Hà',141),(2418,'Xã Minh Hòa',141),(2419,'Xã Hòa Thắng',141),(2420,'Thị trấn Đồng Mỏ',142),(2421,'Thị trấn Chi Lăng',142),(2422,'Xã Vân An',142),(2423,'Xã Vân Thủy',142),(2424,'Xã Gia Lộc',142),(2425,'Xã Bắc Thủy',142),(2426,'Xã Chiến Thắng',142),(2427,'Xã Mai Sao',142),(2428,'Xã Bằng Hữu',142),(2429,'Xã Thượng Cường',142),(2430,'Xã Bằng Mạc',142),(2431,'Xã Nhân Lý',142),(2432,'Xã Lâm Sơn',142),(2433,'Xã Liên Sơn',142),(2434,'Xã Vạn Linh',142),(2435,'Xã Hòa Bình',142),(2436,'Xã Hữu Kiên',142),(2437,'Xã Quan Sơn',142),(2438,'Xã Y Tịch',142),(2439,'Xã Chi Lăng',142),(2440,'Thị trấn Na Dương',143),(2441,'Thị trấn Lộc Bình',143),(2442,'Xã Mẫu Sơn',143),(2443,'Xã Yên Khoái',143),(2444,'Xã Khánh Xuân',143),(2445,'Xã Tú Mịch',143),(2446,'Xã Hữu Khánh',143),(2447,'Xã Đồng Bục',143),(2448,'Xã Tam Gia',143),(2449,'Xã Tú Đoạn',143),(2450,'Xã Khuất Xá',143),(2451,'Xã Tĩnh Bắc',143),(2452,'Xã Thống Nhất',143),(2453,'Xã Sàn Viên',143),(2454,'Xã Đông Quan',143),(2455,'Xã Minh Hiệp',143),(2456,'Xã Hữu Lân',143),(2457,'Xã Lợi Bác',143),(2458,'Xã Nam Quan',143),(2459,'Xã Xuân Dương',143),(2460,'Xã Ái Quốc',143),(2461,'Thị trấn Đình Lập',144),(2462,'Thị trấn NT Thái Bình',144),(2463,'Xã Bắc Xa',144),(2464,'Xã Bính Xá',144),(2465,'Xã Kiên Mộc',144),(2466,'Xã Đình Lập',144),(2467,'Xã Thái Bình',144),(2468,'Xã Cường Lợi',144),(2469,'Xã Châu Sơn',144),(2470,'Xã Lâm Ca',144),(2471,'Xã Đồng Thắng',144),(2472,'Xã Bắc Lãng',144),(2473,'Phường Hà Khánh',145),(2474,'Phường Hà Phong',145),(2475,'Phường Hà Khẩu',145),(2476,'Phường Cao Xanh',145),(2477,'Phường Giếng Đáy',145),(2478,'Phường Hà Tu',145),(2479,'Phường Hà Trung',145),(2480,'Phường Hà Lầm',145),(2481,'Phường Bãi Cháy',145),(2482,'Phường Cao Thắng',145),(2483,'Phường Hùng Thắng',145),(2484,'Phường Yết Kiêu',145),(2485,'Phường Trần Hưng Đạo',145),(2486,'Phường Hồng Hải',145),(2487,'Phường Hồng Gai',145),(2488,'Phường Bạch Đằng',145),(2489,'Phường Hồng Hà',145),(2490,'Phường Tuần Châu',145),(2491,'Phường Việt Hưng',145),(2492,'Phường Đại Yên',145),(2493,'Phường Hoành Bồ',145),(2494,'Xã Kỳ Thượng',145),(2495,'Xã Đồng Sơn',145),(2496,'Xã Tân Dân',145),(2497,'Xã Đồng Lâm',145),(2498,'Xã Hòa Bình',145),(2499,'Xã Vũ Oai',145),(2500,'Xã Dân Chủ',145),(2501,'Xã Quảng La',145),(2502,'Xã Bằng Cả',145),(2503,'Xã Thống Nhất',145),(2504,'Xã Sơn Dương',145),(2505,'Xã Lê Lợi',145),(2506,'Phường Ka Long',146),(2507,'Phường Trần Phú',146),(2508,'Phường Ninh Dương',146),(2509,'Phường Hoà Lạc',146),(2510,'Phường Trà Cổ',146),(2511,'Xã Hải Sơn',146),(2512,'Xã Bắc Sơn',146),(2513,'Xã Hải Đông',146),(2514,'Xã Hải Tiến',146),(2515,'Phường Hải Yên',146),(2516,'Xã Quảng Nghĩa',146),(2517,'Phường Hải Hoà',146),(2518,'Xã Hải Xuân',146),(2519,'Xã Vạn Ninh',146),(2520,'Phường Bình Ngọc',146),(2521,'Xã Vĩnh Trung',146),(2522,'Xã Vĩnh Thực',146),(2523,'Phường Mông Dương',147),(2524,'Phường Cửa Ông',147),(2525,'Phường Cẩm Sơn',147),(2526,'Phường Cẩm Đông',147),(2527,'Phường Cẩm Phú',147),(2528,'Phường Cẩm Tây',147),(2529,'Phường Quang Hanh',147),(2530,'Phường Cẩm Thịnh',147),(2531,'Phường Cẩm Thủy',147),(2532,'Phường Cẩm Thạch',147),(2533,'Phường Cẩm Thành',147),(2534,'Phường Cẩm Trung',147),(2535,'Phường Cẩm Bình',147),(2536,'Xã Cộng Hòa',147),(2537,'Xã Cẩm Hải',147),(2538,'Xã Dương Huy',147),(2539,'Phường Vàng Danh',148),(2540,'Phường Thanh Sơn',148),(2541,'Phường Bắc Sơn',148),(2542,'Phường Quang Trung',148),(2543,'Phường Trưng Vương',148),(2544,'Phường Nam Khê',148),(2545,'Phường Yên Thanh',148),(2546,'Xã Thượng Yên Công',148),(2547,'Phường Phương Đông',148),(2548,'Phường Phương Nam',148),(2549,'Thị trấn Bình Liêu',149),(2550,'Xã Hoành Mô',149),(2551,'Xã Đồng Tâm',149),(2552,'Xã Đồng Văn',149),(2553,'Xã Vô Ngại',149),(2554,'Xã Lục Hồn',149),(2555,'Xã Húc Động',149),(2556,'Thị trấn Tiên Yên',150),(2557,'Xã Hà Lâu',150),(2558,'Xã Đại Dực',150),(2559,'Xã Phong Dụ',150),(2560,'Xã Điền Xá',150),(2561,'Xã Đông Ngũ',150),(2562,'Xã Yên Than',150),(2563,'Xã Đông Hải',150),(2564,'Xã Hải Lạng',150),(2565,'Xã Tiên Lãng',150),(2566,'Xã Đồng Rui',150),(2567,'Thị trấn Đầm Hà',151),(2568,'Xã Quảng Lâm',151),(2569,'Xã Quảng An',151),(2570,'Xã Tân Bình',151),(2571,'Xã Dực Yên',151),(2572,'Xã Quảng Tân',151),(2573,'Xã Đầm Hà',151),(2574,'Xã Tân Lập',151),(2575,'Xã Đại Bình',151),(2576,'Thị trấn Quảng Hà',152),(2577,'Xã Quảng Đức',152),(2578,'Xã Quảng Sơn',152),(2579,'Xã Quảng Thành',152),(2580,'Xã Quảng Thịnh',152),(2581,'Xã Quảng Minh',152),(2582,'Xã Quảng Chính',152),(2583,'Xã Quảng Long',152),(2584,'Xã Đường Hoa',152),(2585,'Xã Quảng Phong',152),(2586,'Xã Cái Chiên',152),(2587,'Thị trấn Ba Chẽ',153),(2588,'Xã Thanh Sơn',153),(2589,'Xã Thanh Lâm',153),(2590,'Xã Đạp Thanh',153),(2591,'Xã Nam Sơn',153),(2592,'Xã Lương Mông',153),(2593,'Xã Đồn Đạc',153),(2594,'Xã Minh Cầm',153),(2595,'Thị trấn Cái Rồng',154),(2596,'Xã Đài Xuyên',154),(2597,'Xã Bình Dân',154),(2598,'Xã Vạn Yên',154),(2599,'Xã Minh Châu',154),(2600,'Xã Đoàn Kết',154),(2601,'Xã Hạ Long',154),(2602,'Xã Đông Xá',154),(2603,'Xã Bản Sen',154),(2604,'Xã Thắng Lợi',154),(2605,'Xã Quan Lạn',154),(2606,'Xã Ngọc Vừng',154),(2607,'Phường Mạo Khê',155),(2608,'Phường Đông Triều',155),(2609,'Xã An Sinh',155),(2610,'Xã Tràng Lương',155),(2611,'Xã Bình Khê',155),(2612,'Xã Việt Dân',155),(2613,'Xã Tân Việt',155),(2614,'Xã Bình Dương',155),(2615,'Phường Đức Chính',155),(2616,'Phường Tràng An',155),(2617,'Xã Nguyễn Huệ',155),(2618,'Xã Thủy An',155),(2619,'Phường Xuân Sơn',155),(2620,'Xã Hồng Thái Tây',155),(2621,'Xã Hồng Thái Đông',155),(2622,'Phường Hoàng Quế',155),(2623,'Phường Yên Thọ',155),(2624,'Phường Hồng Phong',155),(2625,'Phường Kim Sơn',155),(2626,'Phường Hưng Đạo',155),(2627,'Xã Yên Đức',155),(2628,'Phường Quảng Yên',156),(2629,'Phường Đông Mai',156),(2630,'Phường Minh Thành',156),(2631,'Xã Sông Khoai',156),(2632,'Xã Hiệp Hòa',156),(2633,'Phường Cộng Hòa',156),(2634,'Xã Tiền An',156),(2635,'Xã Hoàng Tân',156),(2636,'Phường Tân An',156),(2637,'Phường Yên Giang',156),(2638,'Phường Nam Hoà',156),(2639,'Phường Hà An',156),(2640,'Xã Cẩm La',156),(2641,'Phường Phong Hải',156),(2642,'Phường Yên Hải',156),(2643,'Xã Liên Hòa',156),(2644,'Phường Phong Cốc',156),(2645,'Xã Liên Vị',156),(2646,'Xã Tiền Phong',156),(2647,'Thị trấn Cô Tô',157),(2648,'Xã Đồng Tiến',157),(2649,'Xã Thanh Lân',157),(2650,'Phường Thọ Xương',158),(2651,'Phường Trần Nguyên Hãn',158),(2652,'Phường Ngô Quyền',158),(2653,'Phường Hoàng Văn Thụ',158),(2654,'Phường Trần Phú',158),(2655,'Phường Mỹ Độ',158),(2656,'Phường Lê Lợi',158),(2657,'Xã Song Mai',158),(2658,'Phường Xương Giang',158),(2659,'Phường Đa Mai',158),(2660,'Phường Dĩnh Kế',158),(2661,'Xã Dĩnh Trì',158),(2662,'Xã Tân Mỹ',158),(2663,'Xã Đồng Sơn',158),(2664,'Xã Tân Tiến',158),(2665,'Xã Song Khê',158),(2666,'Xã Đồng Tiến',159),(2667,'Xã Canh Nậu',159),(2668,'Xã Xuân Lương',159),(2669,'Xã Tam Tiến',159),(2670,'Xã Đồng Vương',159),(2671,'Xã Đồng Hưu',159),(2672,'Xã Đồng Tâm',159),(2673,'Xã Tam Hiệp',159),(2674,'Xã Tiến Thắng',159),(2675,'Xã Hồng Kỳ',159),(2676,'Xã Đồng Lạc',159),(2677,'Xã Đông Sơn',159),(2678,'Xã Tân Hiệp',159),(2679,'Xã Hương Vĩ',159),(2680,'Xã Đồng Kỳ',159),(2681,'Xã An Thượng',159),(2682,'Thị trấn Phồn Xương',159),(2683,'Xã Tân Sỏi',159),(2684,'Thị trấn Bố Hạ',159),(2685,'Xã Lan Giới',160),(2686,'Thị trấn Nhã Nam',160),(2687,'Xã Tân Trung',160),(2688,'Xã Đại Hóa',160),(2689,'Xã Quang Tiến',160),(2690,'Xã Phúc Sơn',160),(2691,'Xã An Dương',160),(2692,'Xã Phúc Hòa',160),(2693,'Xã Liên Sơn',160),(2694,'Xã Hợp Đức',160),(2695,'Xã Lam Cốt',160),(2696,'Xã Cao Xá',160),(2697,'Thị trấn Cao Thượng',160),(2698,'Xã Việt Ngọc',160),(2699,'Xã Song Vân',160),(2700,'Xã Ngọc Châu',160),(2701,'Xã Ngọc Vân',160),(2702,'Xã Việt Lập',160),(2703,'Xã Liên Chung',160),(2704,'Xã Ngọc Thiện',160),(2705,'Xã Ngọc Lý',160),(2706,'Xã Quế Nham',160),(2707,'Thị trấn Vôi',161),(2708,'Xã Nghĩa Hòa',161),(2709,'Xã Nghĩa Hưng',161),(2710,'Xã Quang Thịnh',161),(2711,'Xã Hương Sơn',161),(2712,'Xã Đào Mỹ',161),(2713,'Xã Tiên Lục',161),(2714,'Xã An Hà',161),(2715,'Thị trấn Kép',161),(2716,'Xã Mỹ Hà',161),(2717,'Xã Hương Lạc',161),(2718,'Xã Dương Đức',161),(2719,'Xã Tân Thanh',161),(2720,'Xã Yên Mỹ',161),(2721,'Xã Tân Hưng',161),(2722,'Xã Mỹ Thái',161),(2723,'Xã Xương Lâm',161),(2724,'Xã Xuân Hương',161),(2725,'Xã Tân Dĩnh',161),(2726,'Xã Đại Lâm',161),(2727,'Xã Thái Đào',161),(2728,'Thị trấn Đồi Ngô',162),(2729,'Xã Đông Hưng',162),(2730,'Xã Đông Phú',162),(2731,'Xã Tam Dị',162),(2732,'Xã Bảo Sơn',162),(2733,'Xã Bảo Đài',162),(2734,'Xã Thanh Lâm',162),(2735,'Xã Tiên Nha',162),(2736,'Xã Trường Giang',162),(2737,'Xã Phương Sơn',162),(2738,'Xã Chu Điện',162),(2739,'Xã Cương Sơn',162),(2740,'Xã Nghĩa Phương',162),(2741,'Xã Vô Tranh',162),(2742,'Xã Bình Sơn',162),(2743,'Xã Lan Mẫu',162),(2744,'Xã Yên Sơn',162),(2745,'Xã Khám Lạng',162),(2746,'Xã Huyền Sơn',162),(2747,'Xã Trường Sơn',162),(2748,'Xã Lục Sơn',162),(2749,'Xã Bắc Lũng',162),(2750,'Xã Vũ Xá',162),(2751,'Xã Cẩm Lý',162),(2752,'Xã Đan Hội',162),(2753,'Thị trấn Chũ',163),(2754,'Xã Cấm Sơn',163),(2755,'Xã Tân Sơn',163),(2756,'Xã Phong Minh',163),(2757,'Xã Phong Vân',163),(2758,'Xã Xa Lý',163),(2759,'Xã Hộ Đáp',163),(2760,'Xã Sơn Hải',163),(2761,'Xã Thanh Hải',163),(2762,'Xã Kiên Lao',163),(2763,'Xã Biên Sơn',163),(2764,'Xã Kiên Thành',163),(2765,'Xã Hồng Giang',163),(2766,'Xã Kim Sơn',163),(2767,'Xã Tân Hoa',163),(2768,'Xã Giáp Sơn',163),(2769,'Xã Biển Động',163),(2770,'Xã Quý Sơn',163),(2771,'Xã Trù Hựu',163),(2772,'Xã Phì Điền',163),(2773,'Xã Tân Quang',163),(2774,'Xã Đồng Cốc',163),(2775,'Xã Tân Lập',163),(2776,'Xã Phú Nhuận',163),(2777,'Xã Mỹ An',163),(2778,'Xã Nam Dương',163),(2779,'Xã Tân Mộc',163),(2780,'Xã Đèo Gia',163),(2781,'Xã Phượng Sơn',163),(2782,'Thị trấn An Châu',164),(2783,'Thị trấn Tây Yên Tử',164),(2784,'Xã Vân Sơn',164),(2785,'Xã Hữu Sản',164),(2786,'Xã Đại Sơn',164),(2787,'Xã Phúc Sơn',164),(2788,'Xã Giáo Liêm',164),(2789,'Xã Cẩm Đàn',164),(2790,'Xã An Lạc',164),(2791,'Xã Vĩnh An',164),(2792,'Xã Yên Định',164),(2793,'Xã Lệ Viễn',164),(2794,'Xã An Bá',164),(2795,'Xã Tuấn Đạo',164),(2796,'Xã Dương Hưu',164),(2797,'Xã Long Sơn',164),(2798,'Xã Thanh Luận',164),(2799,'Thị trấn Nham Biền',165),(2800,'Thị trấn Tân An',165),(2801,'Xã Lão Hộ',165),(2802,'Xã Hương Gián',165),(2803,'Xã Quỳnh Sơn',165),(2804,'Xã Nội Hoàng',165),(2805,'Xã Tiền Phong',165),(2806,'Xã Xuân Phú',165),(2807,'Xã Tân Liễu',165),(2808,'Xã Trí Yên',165),(2809,'Xã Lãng Sơn',165),(2810,'Xã Yên Lư',165),(2811,'Xã Tiến Dũng',165),(2812,'Xã Đức Giang',165),(2813,'Xã Cảnh Thụy',165),(2814,'Xã Tư Mại',165),(2815,'Xã Đồng Việt',165),(2816,'Xã Đồng Phúc',165),(2817,'Xã Thượng Lan',166),(2818,'Xã Việt Tiến',166),(2819,'Xã Nghĩa Trung',166),(2820,'Xã Minh Đức',166),(2821,'Xã Hương Mai',166),(2822,'Xã Tự Lạn',166),(2823,'Thị trấn Bích Động',166),(2824,'Xã Trung Sơn',166),(2825,'Xã Hồng Thái',166),(2826,'Xã Tiên Sơn',166),(2827,'Xã Tăng Tiến',166),(2828,'Xã Quảng Minh',166),(2829,'Thị trấn Nếnh',166),(2830,'Xã Ninh Sơn',166),(2831,'Xã Vân Trung',166),(2832,'Xã Vân Hà',166),(2833,'Xã Quang Châu',166),(2834,'Xã Đồng Tân',167),(2835,'Xã Thanh Vân',167),(2836,'Xã Hoàng Lương',167),(2837,'Xã Hoàng Vân',167),(2838,'Xã Hoàng Thanh',167),(2839,'Xã Hoàng An',167),(2840,'Xã Ngọc Sơn',167),(2841,'Xã Thái Sơn',167),(2842,'Xã Hòa Sơn',167),(2843,'Thị trấn Thắng',167),(2844,'Xã Quang Minh',167),(2845,'Xã Lương Phong',167),(2846,'Xã Hùng Sơn',167),(2847,'Xã Đại Thành',167),(2848,'Xã Thường Thắng',167),(2849,'Xã Hợp Thịnh',167),(2850,'Xã Danh Thắng',167),(2851,'Xã Mai Trung',167),(2852,'Xã Đoan Bái',167),(2853,'Xã Bắc Lý',167),(2854,'Xã Xuân Cẩm',167),(2855,'Xã Hương Lâm',167),(2856,'Xã Đông Lỗ',167),(2857,'Xã Châu Minh',167),(2858,'Xã Mai Đình',167),(2859,'Phường Dữu Lâu',168),(2860,'Phường Vân Cơ',168),(2861,'Phường Nông Trang',168),(2862,'Phường Tân Dân',168),(2863,'Phường Gia Cẩm',168),(2864,'Phường Tiên Cát',168),(2865,'Phường Thọ Sơn',168),(2866,'Phường Thanh Miếu',168),(2867,'Phường Bạch Hạc',168),(2868,'Phường Bến Gót',168),(2869,'Phường Vân Phú',168),(2870,'Xã Phượng Lâu',168),(2871,'Xã Thụy Vân',168),(2872,'Phường Minh Phương',168),(2873,'Xã Trưng Vương',168),(2874,'Phường Minh Nông',168),(2875,'Xã Sông Lô',168),(2876,'Xã Kim Đức',168),(2877,'Xã Hùng Lô',168),(2878,'Xã Hy Cương',168),(2879,'Xã Chu Hóa',168),(2880,'Xã Thanh Đình',168),(2881,'Phường Hùng Vương',169),(2882,'Phường Phong Châu',169),(2883,'Phường Âu Cơ',169),(2884,'Xã Hà Lộc',169),(2885,'Xã Phú Hộ',169),(2886,'Xã Văn Lung',169),(2887,'Xã Thanh Minh',169),(2888,'Xã Hà Thạch',169),(2889,'Phường Thanh Vinh',169),(2890,'Thị trấn Đoan Hùng',171),(2891,'Xã Hùng Xuyên',171),(2892,'Xã Bằng Luân',171),(2893,'Xã Vân Du',171),(2894,'Xã Phú Lâm',171),(2895,'Xã Minh Lương',171),(2896,'Xã Bằng Doãn',171),(2897,'Xã Chí Đám',171),(2898,'Xã Phúc Lai',171),(2899,'Xã Ngọc Quan',171),(2900,'Xã Hợp Nhất',171),(2901,'Xã Sóc Đăng',171),(2902,'Xã Tây Cốc',171),(2903,'Xã Yên Kiện',171),(2904,'Xã Hùng Long',171),(2905,'Xã Vụ Quang',171),(2906,'Xã Vân Đồn',171),(2907,'Xã Tiêu Sơn',171),(2908,'Xã Minh Tiến',171),(2909,'Xã Minh Phú',171),(2910,'Xã Chân Mộng',171),(2911,'Xã Ca Đình',171),(2912,'Thị trấn Hạ Hoà',171),(2913,'Xã Đại Phạm',171),(2914,'Xã Đan Thượng',171),(2915,'Xã Hà Lương',171),(2916,'Xã Tứ Hiệp',171),(2917,'Xã Hiền Lương',171),(2918,'Xã Phương Viên',171),(2919,'Xã Gia Điền',171),(2920,'Xã Ấm Hạ',171),(2921,'Xã Hương Xạ',171),(2922,'Xã Xuân Áng',171),(2923,'Xã Yên Kỳ',171),(2924,'Xã Minh Hạc',171),(2925,'Xã Lang Sơn',171),(2926,'Xã Bằng Giã',171),(2927,'Xã Yên Luật',171),(2928,'Xã Vô Tranh',171),(2929,'Xã Văn Lang',171),(2930,'Xã Minh Côi',171),(2931,'Xã Vĩnh Chân',171),(2932,'Thị trấn Thanh Ba',172),(2933,'Xã Vân Lĩnh',172),(2934,'Xã Đông Lĩnh',172),(2935,'Xã Đại An',172),(2936,'Xã Hanh Cù',172),(2937,'Xã Đồng Xuân',172),(2938,'Xã Quảng Yên',172),(2939,'Xã Ninh Dân',172),(2940,'Xã Võ Lao',172),(2941,'Xã Khải Xuân',172),(2942,'Xã Mạn Lạn',172),(2943,'Xã Hoàng Cương',172),(2944,'Xã Chí Tiên',172),(2945,'Xã Đông Thành',172),(2946,'Xã Sơn Cương',172),(2947,'Xã Thanh Hà',172),(2948,'Xã Đỗ Sơn',172),(2949,'Xã Đỗ Xuyên',172),(2950,'Xã Lương Lỗ',172),(2951,'Thị trấn Phong Châu',173),(2952,'Xã Phú Mỹ',173),(2953,'Xã Lệ Mỹ',173),(2954,'Xã Liên Hoa',173),(2955,'Xã Trạm Thản',173),(2956,'Xã Trị Quận',173),(2957,'Xã Trung Giáp',173),(2958,'Xã Tiên Phú',173),(2959,'Xã Hạ Giáp',173),(2960,'Xã Bảo Thanh',173),(2961,'Xã Phú Lộc',173),(2962,'Xã Gia Thanh',173),(2963,'Xã Tiên Du',173),(2964,'Xã Phú Nham',173),(2965,'Xã An Đạo',173),(2966,'Xã Bình Phú',173),(2967,'Xã Phù Ninh',173),(2968,'Thị trấn Yên Lập',174),(2969,'Xã Mỹ Lung',174),(2970,'Xã Mỹ Lương',174),(2971,'Xã Lương Sơn',174),(2972,'Xã Xuân An',174),(2973,'Xã Xuân Viên',174),(2974,'Xã Xuân Thủy',174),(2975,'Xã Trung Sơn',174),(2976,'Xã Hưng Long',174),(2977,'Xã Nga Hoàng',174),(2978,'Xã Đồng Lạc',174),(2979,'Xã Thượng Long',174),(2980,'Xã Đồng Thịnh',174),(2981,'Xã Phúc Khánh',174),(2982,'Xã Minh Hòa',174),(2983,'Xã Ngọc Lập',174),(2984,'Xã Ngọc Đồng',174),(2985,'Thị trấn Cẩm Khê',175),(2986,'Xã Tiên Lương',175),(2987,'Xã Tuy Lộc',175),(2988,'Xã Ngô Xá',175),(2989,'Xã Minh Tân',175),(2990,'Xã Phượng Vĩ',175),(2991,'Xã Thụy Liễu',175),(2992,'Xã Tùng Khê',175),(2993,'Xã Tam Sơn',175),(2994,'Xã Văn Bán',175),(2995,'Xã Cấp Dẫn',175),(2996,'Xã Xương Thịnh',175),(2997,'Xã Phú Khê',175),(2998,'Xã Sơn Tình',175),(2999,'Xã Yên Tập',175),(3000,'Xã Hương Lung',175),(3001,'Xã Tạ Xá',175),(3002,'Xã Phú Lạc',175),(3003,'Xã Chương Xá',175),(3004,'Xã Hùng Việt',175),(3005,'Xã Văn Khúc',175),(3006,'Xã Yên Dưỡng',175),(3007,'Xã Điêu Lương',175),(3008,'Xã Đồng Lương',175),(3009,'Thị trấn Hưng Hoá',176),(3010,'Xã Hiền Quan',176),(3011,'Xã Bắc Sơn',176),(3012,'Xã Thanh Uyên',176),(3013,'Xã Lam Sơn',176),(3014,'Xã Vạn Xuân',176),(3015,'Xã Quang Húc',176),(3016,'Xã Hương Nộn',176),(3017,'Xã Tề Lễ',176),(3018,'Xã Thọ Văn',176),(3019,'Xã Dị Nậu',176),(3020,'Xã Dân Quyền',176),(3021,'Thị trấn Lâm Thao',177),(3022,'Xã Tiên Kiên',177),(3023,'Thị trấn Hùng Sơn',177),(3024,'Xã Xuân Lũng',177),(3025,'Xã Xuân Huy',177),(3026,'Xã Thạch Sơn',177),(3027,'Xã Sơn Vi',177),(3028,'Xã Phùng Nguyên',177),(3029,'Xã Cao Xá',177),(3030,'Xã Vĩnh Lại',177),(3031,'Xã Tứ Xã',177),(3032,'Xã Bản Nguyên',177),(3033,'Thị trấn Thanh Sơn',178),(3034,'Xã Sơn Hùng',178),(3035,'Xã Địch Quả',178),(3036,'Xã Giáp Lai',178),(3037,'Xã Thục Luyện',178),(3038,'Xã Võ Miếu',178),(3039,'Xã Thạch Khoán',178),(3040,'Xã Cự Thắng',178),(3041,'Xã Tất Thắng',178),(3042,'Xã Văn Miếu',178),(3043,'Xã Cự Đồng',178),(3044,'Xã Thắng Sơn',178),(3045,'Xã Tân Minh',178),(3046,'Xã Hương Cần',178),(3047,'Xã Khả Cửu',178),(3048,'Xã Đông Cửu',178),(3049,'Xã Tân Lập',178),(3050,'Xã Yên Lãng',178),(3051,'Xã Yên Lương',178),(3052,'Xã Thượng Cửu',178),(3053,'Xã Lương Nha',178),(3054,'Xã Yên Sơn',178),(3055,'Xã Tinh Nhuệ',178),(3056,'Xã Đào Xá',179),(3057,'Xã Thạch Đồng',179),(3058,'Xã Xuân Lộc',179),(3059,'Xã Tân Phương',179),(3060,'Thị trấn Thanh Thủy',179),(3061,'Xã Sơn Thủy',179),(3062,'Xã Bảo Yên',179),(3063,'Xã Đoan Hạ',179),(3064,'Xã Đồng Trung',179),(3065,'Xã Hoàng Xá',179),(3066,'Xã Tu Vũ',179),(3067,'Xã Thu Cúc',180),(3068,'Xã Thạch Kiệt',180),(3069,'Xã Thu Ngạc',180),(3070,'Xã Kiệt Sơn',180),(3071,'Xã Đồng Sơn',180),(3072,'Xã Lai Đồng',180),(3073,'Xã Tân Phú',180),(3074,'Xã Mỹ Thuận',180),(3075,'Xã Tân Sơn',180),(3076,'Xã Xuân Đài',180),(3077,'Xã Minh Đài',180),(3078,'Xã Văn Luông',180),(3079,'Xã Xuân Sơn',180),(3080,'Xã Long Cốc',180),(3081,'Xã Kim Thượng',180),(3082,'Xã Tam Thanh',180),(3083,'Xã Vinh Tiền',180),(3084,'Phường Tích Sơn',181),(3085,'Phường Liên Bảo',181),(3086,'Phường Hội Hợp',181),(3087,'Phường Đống Đa',181),(3088,'Phường Ngô Quyền',181),(3089,'Phường Đồng Tâm',181),(3090,'Xã Định Trung',181),(3091,'Phường Khai Quang',181),(3092,'Xã Thanh Trù',181),(3093,'Phường Trưng Trắc',182),(3094,'Phường Hùng Vương',182),(3095,'Phường Trưng Nhị',182),(3096,'Phường Phúc Thắng',182),(3097,'Phường Xuân Hoà',182),(3098,'Phường Đồng Xuân',182),(3099,'Xã Ngọc Thanh',182),(3100,'Xã Cao Minh',182),(3101,'Phường Nam Viêm',182),(3102,'Phường Tiền Châu',182),(3103,'Thị trấn Lập Thạch',183),(3104,'Xã Quang Sơn',183),(3105,'Xã Ngọc Mỹ',183),(3106,'Xã Hợp Lý',183),(3107,'Xã Bắc Bình',183),(3108,'Xã Thái Hòa',183),(3109,'Thị trấn Hoa Sơn',183),(3110,'Xã Liễn Sơn',183),(3111,'Xã Xuân Hòa',183),(3112,'Xã Vân Trục',183),(3113,'Xã Liên Hòa',183),(3114,'Xã Tử Du',183),(3115,'Xã Bàn Giản',183),(3116,'Xã Xuân Lôi',183),(3117,'Xã Đồng Ích',183),(3118,'Xã Tiên Lữ',183),(3119,'Xã Văn Quán',183),(3120,'Xã Đình Chu',183),(3121,'Xã Triệu Đề',183),(3122,'Xã Sơn Đông',183),(3123,'Thị trấn Hợp Hòa',184),(3124,'Xã Hoàng Hoa',184),(3125,'Xã Đồng Tĩnh',184),(3126,'Xã Kim Long',184),(3127,'Xã Hướng Đạo',184),(3128,'Xã Đạo Tú',184),(3129,'Xã An Hòa',184),(3130,'Xã Thanh Vân',184),(3131,'Xã Duy Phiên',184),(3132,'Xã Hoàng Đan',184),(3133,'Xã Hoàng Lâu',184),(3134,'Xã Vân Hội',184),(3135,'Xã Hợp Thịnh',184),(3136,'Thị trấn Tam Đảo',185),(3137,'Thị trấn Hợp Châu',185),(3138,'Xã Đạo Trù',185),(3139,'Xã Yên Dương',185),(3140,'Xã Bồ Lý',185),(3141,'Thị trấn Đại Đình',185),(3142,'Xã Tam Quan',185),(3143,'Xã Hồ Sơn',185),(3144,'Xã Minh Quang',185),(3145,'Thị trấn Hương Canh',186),(3146,'Thị trấn Gia Khánh',186),(3147,'Xã Trung Mỹ',186),(3148,'Thị trấn Bá Hiến',186),(3149,'Xã Thiện Kế',186),(3150,'Xã Hương Sơn',186),(3151,'Xã Tam Hợp',186),(3152,'Xã Quất Lưu',186),(3153,'Xã Sơn Lôi',186),(3154,'Thị trấn Đạo Đức',186),(3155,'Xã Tân Phong',186),(3156,'Thị trấn Thanh Lãng',186),(3157,'Xã Phú Xuân',186),(3158,'Thị trấn Yên Lạc',187),(3159,'Xã Đồng Cương',187),(3160,'Xã Đồng Văn',187),(3161,'Xã Bình Định',187),(3162,'Xã Trung Nguyên',187),(3163,'Xã Tề Lỗ',187),(3164,'Xã Tam Hồng',187),(3165,'Xã Yên Đồng',187),(3166,'Xã Văn Tiến',187),(3167,'Xã Nguyệt Đức',187),(3168,'Xã Yên Phương',187),(3169,'Xã Hồng Phương',187),(3170,'Xã Trung Kiên',187),(3171,'Xã Liên Châu',187),(3172,'Xã Đại Tự',187),(3173,'Xã Hồng Châu',187),(3174,'Xã Trung Hà',187),(3175,'Thị trấn Vĩnh Tường',188),(3176,'Xã Kim Xá',188),(3177,'Xã Yên Bình',188),(3178,'Xã Chấn Hưng',188),(3179,'Xã Nghĩa Hưng',188),(3180,'Xã Yên Lập',188),(3181,'Xã Việt Xuân',188),(3182,'Xã Bồ Sao',188),(3183,'Xã Đại Đồng',188),(3184,'Xã Tân Tiến',188),(3185,'Xã Lũng Hoà',188),(3186,'Xã Cao Đại',188),(3187,'Thị Trấn Thổ Tang',188),(3188,'Xã Vĩnh Sơn',188),(3189,'Xã Bình Dương',188),(3190,'Xã Tân Phú',188),(3191,'Xã Thượng Trưng',188),(3192,'Xã Vũ Di',188),(3193,'Xã Lý Nhân',188),(3194,'Xã Tuân Chính',188),(3195,'Xã Vân Xuân',188),(3196,'Xã Tam Phúc',188),(3197,'Thị trấn Tứ Trưng',188),(3198,'Xã Ngũ Kiên',188),(3199,'Xã An Tường',188),(3200,'Xã Vĩnh Thịnh',188),(3201,'Xã Phú Đa',188),(3202,'Xã Vĩnh Ninh',188),(3203,'Xã Lãng Công',189),(3204,'Xã Quang Yên',189),(3205,'Xã Bạch Lưu',189),(3206,'Xã Hải Lựu',189),(3207,'Xã Đồng Quế',189),(3208,'Xã Nhân Đạo',189),(3209,'Xã Đôn Nhân',189),(3210,'Xã Phương Khoan',189),(3211,'Xã Tân Lập',189),(3212,'Xã Nhạo Sơn',189),(3213,'Thị trấn Tam Sơn',189),(3214,'Xã Như Thụy',189),(3215,'Xã Yên Thạch',189),(3216,'Xã Đồng Thịnh',189),(3217,'Xã Tứ Yên',189),(3218,'Xã Đức Bác',189),(3219,'Xã Cao Phong',189),(3220,'Phường Vũ Ninh',190),(3221,'Phường Đáp Cầu',190),(3222,'Phường Thị Cầu',190),(3223,'Phường Kinh Bắc',190),(3224,'Phường Vệ An',190),(3225,'Phường Tiền An',190),(3226,'Phường Đại Phúc',190),(3227,'Phường Ninh Xá',190),(3228,'Phường Suối Hoa',190),(3229,'Phường Võ Cường',190),(3230,'Phường Hòa Long',190),(3231,'Phường Vạn An',190),(3232,'Phường Khúc Xuyên',190),(3233,'Phường Phong Khê',190),(3234,'Phường Kim Chân',190),(3235,'Phường Vân Dương',190),(3236,'Phường Nam Sơn',190),(3237,'Phường Khắc Niệm',190),(3238,'Phường Hạp Lĩnh',190),(3239,'Thị trấn Chờ',191),(3240,'Xã Dũng Liệt',191),(3241,'Xã Tam Đa',191),(3242,'Xã Tam Giang',191),(3243,'Xã Yên Trung',191),(3244,'Xã Thụy Hòa',191),(3245,'Xã Hòa Tiến',191),(3246,'Xã Đông Tiến',191),(3247,'Xã Yên Phụ',191),(3248,'Xã Trung Nghĩa',191),(3249,'Xã Đông Phong',191),(3250,'Xã Long Châu',191),(3251,'Xã Văn Môn',191),(3252,'Xã Đông Thọ',191),(3253,'Thị trấn Phố Mới',192),(3254,'Xã Việt Thống',192),(3255,'Xã Đại Xuân',192),(3256,'Xã Nhân Hòa',192),(3257,'Xã Bằng An',192),(3258,'Xã Phương Liễu',192),(3259,'Xã Quế Tân',192),(3260,'Xã Phù Lương',192),(3261,'Xã Phù Lãng',192),(3262,'Xã Phượng Mao',192),(3263,'Xã Việt Hùng',192),(3264,'Xã Ngọc Xá',192),(3265,'Xã Châu Phong',192),(3266,'Xã Bồng Lai',192),(3267,'Xã Cách Bi',192),(3268,'Xã Đào Viên',192),(3269,'Xã Yên Giả',192),(3270,'Xã Mộ Đạo',192),(3271,'Xã Đức Long',192),(3272,'Xã Chi Lăng',192),(3273,'Xã Hán Quảng',192),(3274,'Thị trấn Lim',193),(3275,'Xã Phú Lâm',193),(3276,'Xã Nội Duệ',193),(3277,'Xã Liên Bão',193),(3278,'Xã Hiên Vân',193),(3279,'Xã Hoàn Sơn',193),(3280,'Xã Lạc Vệ',193),(3281,'Xã Việt Đoàn',193),(3282,'Xã Phật Tích',193),(3283,'Xã Tân Chi',193),(3284,'Xã Đại Đồng',193),(3285,'Xã Tri Phương',193),(3286,'Xã Minh Đạo',193),(3287,'Xã Cảnh Hưng',193),(3288,'Phường Đông Ngàn',194),(3289,'Phường Tam Sơn',194),(3290,'Phường Hương Mạc',194),(3291,'Phường Tương Giang',194),(3292,'Phường Phù Khê',194),(3293,'Phường Đồng Kỵ',194),(3294,'Phường Trang Hạ',194),(3295,'Phường Đồng Nguyên',194),(3296,'Phường Châu Khê',194),(3297,'Phường Tân Hồng',194),(3298,'Phường Đình Bảng',194),(3299,'Phường Phù Chẩn',194),(3300,'Thị trấn Hồ',195),(3301,'Xã Hoài Thượng',195),(3302,'Xã Đại Đồng Thành',195),(3303,'Xã Mão Điền',195),(3304,'Xã Song Hồ',195),(3305,'Xã Đình Tổ',195),(3306,'Xã An Bình',195),(3307,'Xã Trí Quả',195),(3308,'Xã Gia Đông',195),(3309,'Xã Thanh Khương',195),(3310,'Xã Trạm Lộ',195),(3311,'Xã Xuân Lâm',195),(3312,'Xã Hà Mãn',195),(3313,'Xã Ngũ Thái',195),(3314,'Xã Nguyệt Đức',195),(3315,'Xã Ninh Xá',195),(3316,'Xã Nghĩa Đạo',195),(3317,'Xã Song Liễu',195),(3318,'Thị trấn Gia Bình',196),(3319,'Xã Vạn Ninh',196),(3320,'Xã Thái Bảo',196),(3321,'Xã Giang Sơn',196),(3322,'Xã Cao Đức',196),(3323,'Xã Đại Lai',196),(3324,'Xã Song Giang',196),(3325,'Xã Bình Dương',196),(3326,'Xã Lãng Ngâm',196),(3327,'Xã Nhân Thắng',196),(3328,'Xã Xuân Lai',196),(3329,'Xã Đông Cứu',196),(3330,'Xã Đại Bái',196),(3331,'Xã Quỳnh Phú',196),(3332,'Thị trấn Thứa',197),(3333,'Xã An Thịnh',197),(3334,'Xã Trung Kênh',197),(3335,'Xã Phú Hòa',197),(3336,'Xã Mỹ Hương',197),(3337,'Xã Tân Lãng',197),(3338,'Xã Quảng Phú',197),(3339,'Xã Trừng Xá',197),(3340,'Xã Lai Hạ',197),(3341,'Xã Trung Chính',197),(3342,'Xã Minh Tân',197),(3343,'Xã Bình Định',197),(3344,'Xã Phú Lương',197),(3345,'Xã Lâm Thao',197),(3346,'Phường Cẩm Thượng',198),(3347,'Phường Bình Hàn',198),(3348,'Phường Ngọc Châu',198),(3349,'Phường Nhị Châu',198),(3350,'Phường Quang Trung',198),(3351,'Phường Nguyễn Trãi',198),(3352,'Phường Phạm Ngũ Lão',198),(3353,'Phường Trần Hưng Đạo',198),(3354,'Phường Trần Phú',198),(3355,'Phường Thanh Bình',198),(3356,'Phường Tân Bình',198),(3357,'Phường Lê Thanh Nghị',198),(3358,'Phường Hải Tân',198),(3359,'Phường Tứ Minh',198),(3360,'Phường Việt Hoà',198),(3361,'Phường Ái Quốc',198),(3362,'Xã An Thượng',198),(3363,'Phường Nam Đồng',198),(3364,'Xã Quyết Thắng',198),(3365,'Xã Tiền Tiến',198),(3366,'Phường Thạch Khôi',198),(3367,'Xã Liên Hồng',198),(3368,'Phường Tân Hưng',198),(3369,'Xã Gia Xuyên',198),(3370,'Xã Ngọc Sơn',198),(3371,'Phường Phả Lại',199),(3372,'Phường Sao Đỏ',199),(3373,'Phường Bến Tắm',199),(3374,'Xã Hoàng Hoa Thám',199),(3375,'Xã Bắc An',199),(3376,'Xã Hưng Đạo',199),(3377,'Xã Lê Lợi',199),(3378,'Phường Hoàng Tiến',199),(3379,'Phường Cộng Hoà',199),(3380,'Phường Hoàng Tân',199),(3381,'Phường Cổ Thành',199),(3382,'Phường Văn An',199),(3383,'Phường Chí Minh',199),(3384,'Phường Văn Đức',199),(3385,'Phường Thái Học',199),(3386,'Xã Nhân Huệ',199),(3387,'Phường An Lạc',199),(3388,'Phường Đồng Lạc',199),(3389,'Phường Tân Dân',199),(3390,'Thị trấn Nam Sách',200),(3391,'Xã Nam Hưng',200),(3392,'Xã Nam Tân',200),(3393,'Xã Hợp Tiến',200),(3394,'Xã Hiệp Cát',200),(3395,'Xã Thanh Quang',200),(3396,'Xã Quốc Tuấn',200),(3397,'Xã Nam Chính',200),(3398,'Xã An Bình',200),(3399,'Xã Nam Trung',200),(3400,'Xã An Sơn',200),(3401,'Xã Cộng Hòa',200),(3402,'Xã Thái Tân',200),(3403,'Xã An Lâm',200),(3404,'Xã Phú Điền',200),(3405,'Xã Nam Hồng',200),(3406,'Xã Hồng Phong',200),(3407,'Xã Đồng Lạc',200),(3408,'Xã Minh Tân',200),(3409,'Phường An Lưu',201),(3410,'Xã Bạch Đằng',201),(3411,'Phường Thất Hùng',201),(3412,'Xã Lê Ninh',201),(3413,'Xã Hoành Sơn',201),(3414,'Phường Phạm Thái',201),(3415,'Phường Duy Tân',201),(3416,'Phường Tân Dân',201),(3417,'Phường Minh Tân',201),(3418,'Xã Quang Thành',201),(3419,'Xã Hiệp Hòa',201),(3420,'Phường Phú Thứ',201),(3421,'Xã Thăng Long',201),(3422,'Xã Lạc Long',201),(3423,'Phường An Sinh',201),(3424,'Phường Hiệp Sơn',201),(3425,'Xã Thượng Quận',201),(3426,'Phường An Phụ',201),(3427,'Phường Hiệp An',201),(3428,'Phường Long Xuyên',201),(3429,'Phường Thái Thịnh',201),(3430,'Phường Hiến Thành',201),(3431,'Xã Minh Hòa',201),(3432,'Thị trấn Phú Thái',202),(3433,'Xã Lai Vu',202),(3434,'Xã Cộng Hòa',202),(3435,'Xã Thượng Vũ',202),(3436,'Xã Cổ Dũng',202),(3437,'Xã Tuấn Việt',202),(3438,'Xã Kim Xuyên',202),(3439,'Xã Phúc Thành A',202),(3440,'Xã Ngũ Phúc',202),(3441,'Xã Kim Anh',202),(3442,'Xã Kim Liên',202),(3443,'Xã Kim Tân',202),(3444,'Xã Kim Đính',202),(3445,'Xã Bình Dân',202),(3446,'Xã Tam Kỳ',202),(3447,'Xã Đồng Cẩm',202),(3448,'Xã Liên Hòa',202),(3449,'Xã Đại Đức',202),(3450,'Thị trấn Thanh Hà',203),(3451,'Xã Hồng Lạc',203),(3452,'Xã Việt Hồng',203),(3453,'Xã Tân Việt',203),(3454,'Xã Cẩm Chế',203),(3455,'Xã Thanh An',203),(3456,'Xã Thanh Lang',203),(3457,'Xã Tân An',203),(3458,'Xã Liên Mạc',203),(3459,'Xã Thanh Hải',203),(3460,'Xã Thanh Khê',203),(3461,'Xã Thanh Xá',203),(3462,'Xã Thanh Xuân',203),(3463,'Xã Thanh Thủy',203),(3464,'Xã An Phượng',203),(3465,'Xã Thanh Sơn',203),(3466,'Xã Thanh Quang',203),(3467,'Xã Thanh Hồng',203),(3468,'Xã Thanh Cường',203),(3469,'Xã Vĩnh Lập',203),(3470,'Thị trấn Cẩm Giang',204),(3471,'Thị trấn Lai Cách',204),(3472,'Xã Cẩm Hưng',204),(3473,'Xã Cẩm Hoàng',204),(3474,'Xã Cẩm Văn',204),(3475,'Xã Ngọc Liên',204),(3476,'Xã Thạch Lỗi',204),(3477,'Xã Cẩm Vũ',204),(3478,'Xã Đức Chính',204),(3479,'Xã Định Sơn',204),(3480,'Xã Lương Điền',204),(3481,'Xã Cao An',204),(3482,'Xã Tân Trường',204),(3483,'Xã Cẩm Phúc',204),(3484,'Xã Cẩm Điền',204),(3485,'Xã Cẩm Đông',204),(3486,'Xã Cẩm Đoài',204);
/*!40000 ALTER TABLE `ward` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'health_first'
--

--
-- Dumping routines for database 'health_first'
--
/*!50003 DROP PROCEDURE IF EXISTS `saveCertificate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_unicode_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'IGNORE_SPACE,ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `saveCertificate`(facility_id int, 
certificate_number varchar(255), published_date date
, expired_date date, out countError int)
BEGIN 
	DECLARE EXIT HANDLER FOR SQLEXCEPTION 
	set countError = 0;
	insert into
	    certificate (
	        facility_id,
	        certificate_number,
	        published_date,
	        expired_date,
	        state_id
	    )
	values
	    (
	        facility_id,
	        certificate_number,
	        published_date,
	        expired_date,
	        1
	    );
	select row_count() into countError;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-25 17:13:15
