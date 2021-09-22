-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: employment_agency
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add content type',4,'add_contenttype'),(14,'Can change content type',4,'change_contenttype'),(15,'Can delete content type',4,'delete_contenttype'),(16,'Can view content type',4,'view_contenttype'),(17,'Can add session',5,'add_session'),(18,'Can change session',5,'change_session'),(19,'Can delete session',5,'delete_session'),(20,'Can view session',5,'view_session'),(21,'Can add nguoi dung',6,'add_nguoidung'),(22,'Can change nguoi dung',6,'change_nguoidung'),(23,'Can delete nguoi dung',6,'delete_nguoidung'),(24,'Can view nguoi dung',6,'view_nguoidung'),(25,'Can add bang cap',7,'add_bangcap'),(26,'Can change bang cap',7,'change_bangcap'),(27,'Can delete bang cap',7,'delete_bangcap'),(28,'Can view bang cap',7,'view_bangcap'),(29,'Can add chuc danh',8,'add_chucdanh'),(30,'Can change chuc danh',8,'change_chucdanh'),(31,'Can delete chuc danh',8,'delete_chucdanh'),(32,'Can view chuc danh',8,'view_chucdanh'),(33,'Can add kinh nghiem',9,'add_kinhnghiem'),(34,'Can change kinh nghiem',9,'change_kinhnghiem'),(35,'Can delete kinh nghiem',9,'delete_kinhnghiem'),(36,'Can view kinh nghiem',9,'view_kinhnghiem'),(37,'Can add ky nang',10,'add_kynang'),(38,'Can change ky nang',10,'change_kynang'),(39,'Can delete ky nang',10,'delete_kynang'),(40,'Can view ky nang',10,'view_kynang'),(41,'Can add nganh nghe',11,'add_nganhnghe'),(42,'Can change nganh nghe',11,'change_nganhnghe'),(43,'Can delete nganh nghe',11,'delete_nganhnghe'),(44,'Can view nganh nghe',11,'view_nganhnghe'),(45,'Can add phuc loi',12,'add_phucloi'),(46,'Can change phuc loi',12,'change_phucloi'),(47,'Can delete phuc loi',12,'delete_phucloi'),(48,'Can view phuc loi',12,'view_phucloi'),(49,'Can add nha tuyen dung',13,'add_nhatuyendung'),(50,'Can change nha tuyen dung',13,'change_nhatuyendung'),(51,'Can delete nha tuyen dung',13,'delete_nhatuyendung'),(52,'Can view nha tuyen dung',13,'view_nhatuyendung'),(53,'Can add quan ly',14,'add_quanly'),(54,'Can change quan ly',14,'change_quanly'),(55,'Can delete quan ly',14,'delete_quanly'),(56,'Can view quan ly',14,'view_quanly'),(57,'Can add ung vien',15,'add_ungvien'),(58,'Can change ung vien',15,'change_ungvien'),(59,'Can delete ung vien',15,'delete_ungvien'),(60,'Can view ung vien',15,'view_ungvien'),(61,'Can add viec lam',16,'add_vieclam'),(62,'Can change viec lam',16,'change_vieclam'),(63,'Can delete viec lam',16,'delete_vieclam'),(64,'Can view viec lam',16,'view_vieclam'),(65,'Can add ung vien nganh nghe',17,'add_ungviennganhnghe'),(66,'Can change ung vien nganh nghe',17,'change_ungviennganhnghe'),(67,'Can delete ung vien nganh nghe',17,'delete_ungviennganhnghe'),(68,'Can view ung vien nganh nghe',17,'view_ungviennganhnghe'),(69,'Can add ung vien ky nang',18,'add_ungvienkynang'),(70,'Can change ung vien ky nang',18,'change_ungvienkynang'),(71,'Can delete ung vien ky nang',18,'delete_ungvienkynang'),(72,'Can view ung vien ky nang',18,'view_ungvienkynang'),(73,'Can add ung vien kinh nghiem',19,'add_ungvienkinhnghiem'),(74,'Can change ung vien kinh nghiem',19,'change_ungvienkinhnghiem'),(75,'Can delete ung vien kinh nghiem',19,'delete_ungvienkinhnghiem'),(76,'Can view ung vien kinh nghiem',19,'view_ungvienkinhnghiem'),(77,'Can add ung vien bang cap',20,'add_ungvienbangcap'),(78,'Can change ung vien bang cap',20,'change_ungvienbangcap'),(79,'Can delete ung vien bang cap',20,'delete_ungvienbangcap'),(80,'Can view ung vien bang cap',20,'view_ungvienbangcap'),(81,'Can add ung tuyen',21,'add_ungtuyen'),(82,'Can change ung tuyen',21,'change_ungtuyen'),(83,'Can delete ung tuyen',21,'delete_ungtuyen'),(84,'Can view ung tuyen',21,'view_ungtuyen'),(85,'Can add danh gia nha tuyen dung',22,'add_danhgianhatuyendung'),(86,'Can change danh gia nha tuyen dung',22,'change_danhgianhatuyendung'),(87,'Can delete danh gia nha tuyen dung',22,'delete_danhgianhatuyendung'),(88,'Can view danh gia nha tuyen dung',22,'view_danhgianhatuyendung'),(89,'Can add application',23,'add_application'),(90,'Can change application',23,'change_application'),(91,'Can delete application',23,'delete_application'),(92,'Can view application',23,'view_application'),(93,'Can add access token',24,'add_accesstoken'),(94,'Can change access token',24,'change_accesstoken'),(95,'Can delete access token',24,'delete_accesstoken'),(96,'Can view access token',24,'view_accesstoken'),(97,'Can add grant',25,'add_grant'),(98,'Can change grant',25,'change_grant'),(99,'Can delete grant',25,'delete_grant'),(100,'Can view grant',25,'view_grant'),(101,'Can add refresh token',26,'add_refreshtoken'),(102,'Can change refresh token',26,'change_refreshtoken'),(103,'Can delete refresh token',26,'delete_refreshtoken'),(104,'Can view refresh token',26,'view_refreshtoken'),(105,'Can add id token',27,'add_idtoken'),(106,'Can change id token',27,'change_idtoken'),(107,'Can delete id token',27,'delete_idtoken'),(108,'Can view id token',27,'view_idtoken');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bang_cap`
--

DROP TABLE IF EXISTS `bang_cap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bang_cap` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ten` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bang_cap`
--

LOCK TABLES `bang_cap` WRITE;
/*!40000 ALTER TABLE `bang_cap` DISABLE KEYS */;
INSERT INTO `bang_cap` VALUES (1,'THPT'),(2,'Cao dang'),(3,'Cu nhan'),(4,'Thac sy'),(5,'Tien sy');
/*!40000 ALTER TABLE `bang_cap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chuc_danh`
--

DROP TABLE IF EXISTS `chuc_danh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chuc_danh` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ten` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chuc_danh`
--

LOCK TABLES `chuc_danh` WRITE;
/*!40000 ALTER TABLE `chuc_danh` DISABLE KEYS */;
INSERT INTO `chuc_danh` VALUES (1,'Chuyen vien kinh te'),(2,'Ke toan vien'),(3,'Giam doc');
/*!40000 ALTER TABLE `chuc_danh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `danh_gia_nha_tuyen_dung`
--

DROP TABLE IF EXISTS `danh_gia_nha_tuyen_dung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `danh_gia_nha_tuyen_dung` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `noi_dung` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `diem_danh_gia` double NOT NULL,
  `ngay_tao` date NOT NULL,
  `viec_lam_id` bigint DEFAULT NULL,
  `nha_tuyen_dung_id` bigint NOT NULL,
  `ung_vien_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `danh_gia_nha_tuyen_dung_viec_lam_id_441f2a14_fk_viec_lam_id` (`viec_lam_id`),
  KEY `danh_gia_nha_tuyen_d_nha_tuyen_dung_id_2f7fd05d_fk_nha_tuyen` (`nha_tuyen_dung_id`),
  KEY `danh_gia_nha_tuyen_d_ung_vien_id_0c36fee9_fk_ung_vien_` (`ung_vien_id`),
  CONSTRAINT `danh_gia_nha_tuyen_d_nha_tuyen_dung_id_2f7fd05d_fk_nha_tuyen` FOREIGN KEY (`nha_tuyen_dung_id`) REFERENCES `nha_tuyen_dung` (`nguoi_dung_id`),
  CONSTRAINT `danh_gia_nha_tuyen_d_ung_vien_id_0c36fee9_fk_ung_vien_` FOREIGN KEY (`ung_vien_id`) REFERENCES `ung_vien` (`nguoi_dung_id`),
  CONSTRAINT `danh_gia_nha_tuyen_dung_viec_lam_id_441f2a14_fk_viec_lam_id` FOREIGN KEY (`viec_lam_id`) REFERENCES `viec_lam` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `danh_gia_nha_tuyen_dung`
--

LOCK TABLES `danh_gia_nha_tuyen_dung` WRITE;
/*!40000 ALTER TABLE `danh_gia_nha_tuyen_dung` DISABLE KEYS */;
INSERT INTO `danh_gia_nha_tuyen_dung` VALUES (1,'Việc làm xinh đẹp tuyệt vời',5,'2021-01-20',1,2,3),(2,'Không có bãi đậu trực thăng, nhà ăn không có trứng muối',2,'2021-02-10',1,4,5),(3,'Việc làm tạm ổn',4,'2021-01-12',2,2,3),(4,'Cám ơn công ty đã cho tôi công việc',5,'2021-09-01',2,4,5);
/*!40000 ALTER TABLE `danh_gia_nha_tuyen_dung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext COLLATE utf8mb4_unicode_ci,
  `object_repr` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_nguoi_dung_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_nguoi_dung_id` FOREIGN KEY (`user_id`) REFERENCES `nguoi_dung` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `model` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'contenttypes','contenttype'),(7,'employment_app','bangcap'),(8,'employment_app','chucdanh'),(22,'employment_app','danhgianhatuyendung'),(9,'employment_app','kinhnghiem'),(10,'employment_app','kynang'),(11,'employment_app','nganhnghe'),(6,'employment_app','nguoidung'),(13,'employment_app','nhatuyendung'),(12,'employment_app','phucloi'),(14,'employment_app','quanly'),(21,'employment_app','ungtuyen'),(15,'employment_app','ungvien'),(20,'employment_app','ungvienbangcap'),(19,'employment_app','ungvienkinhnghiem'),(18,'employment_app','ungvienkynang'),(17,'employment_app','ungviennganhnghe'),(16,'employment_app','vieclam'),(24,'oauth2_provider','accesstoken'),(23,'oauth2_provider','application'),(25,'oauth2_provider','grant'),(27,'oauth2_provider','idtoken'),(26,'oauth2_provider','refreshtoken'),(5,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2021-09-19 09:44:42.407465'),(2,'contenttypes','0002_remove_content_type_name','2021-09-19 09:44:42.609690'),(3,'auth','0001_initial','2021-09-19 09:44:43.594316'),(4,'auth','0002_alter_permission_name_max_length','2021-09-19 09:44:43.751835'),(5,'auth','0003_alter_user_email_max_length','2021-09-19 09:44:43.769018'),(6,'auth','0004_alter_user_username_opts','2021-09-19 09:44:43.815149'),(7,'auth','0005_alter_user_last_login_null','2021-09-19 09:44:43.833990'),(8,'auth','0006_require_contenttypes_0002','2021-09-19 09:44:43.847340'),(9,'auth','0007_alter_validators_add_error_messages','2021-09-19 09:44:43.867772'),(10,'auth','0008_alter_user_username_max_length','2021-09-19 09:44:43.884940'),(11,'auth','0009_alter_user_last_name_max_length','2021-09-19 09:44:43.902322'),(12,'auth','0010_alter_group_name_max_length','2021-09-19 09:44:43.941059'),(13,'auth','0011_update_proxy_permissions','2021-09-19 09:44:43.955777'),(14,'auth','0012_alter_user_first_name_max_length','2021-09-19 09:44:43.971027'),(15,'employment_app','0001_initial','2021-09-19 09:44:51.059111'),(16,'admin','0001_initial','2021-09-19 09:44:51.456329'),(17,'admin','0002_logentry_remove_auto_add','2021-09-19 09:44:51.484016'),(18,'admin','0003_logentry_add_action_flag_choices','2021-09-19 09:44:51.512393'),(19,'oauth2_provider','0001_initial','2021-09-19 09:44:53.623763'),(20,'oauth2_provider','0002_auto_20190406_1805','2021-09-19 09:44:53.794098'),(21,'oauth2_provider','0003_auto_20201211_1314','2021-09-19 09:44:54.066556'),(22,'oauth2_provider','0004_auto_20200902_2022','2021-09-19 09:44:55.198595'),(23,'sessions','0001_initial','2021-09-19 09:44:55.306763'),(24,'employment_app','0002_remove_ungvien_diem_danh_gia_tb','2021-09-19 10:05:21.981732'),(25,'employment_app','0003_vieclam_luong','2021-09-19 13:46:04.429774'),(26,'employment_app','0004_alter_nhatuyendung_nguoi_dung','2021-09-21 07:25:55.988778'),(27,'employment_app','0005_alter_nhatuyendung_nguoi_dung','2021-09-21 07:27:08.649969'),(28,'employment_app','0006_ungtuyen_nguoi_gui','2021-09-22 16:21:13.373033');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `session_data` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('jxem9pzi03x5ssmg8x1dvczfoxypz3uu','.eJxVjMEOwiAQRP-FsyECLbAevfsNZNkFqRqalPZk_Hdp0oOeZjJvZt4i4LaWsLW0hInFRShx-s0i0jPVHfAD632WNNd1maLcK_KgTd5mTq_r0f07KNhKX8fRgPMRCC3ZLloZbxIZx46i5oweokkD-MFlrc44WgY0BAyZuk_i8wXwmjiC:1mRtOt:u9rbjOeUOj3pCCj5CwFeQokKTFqZrD4_LPSSgH3QugE','2021-10-03 09:46:19.802391');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kinh_nghiem`
--

DROP TABLE IF EXISTS `kinh_nghiem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kinh_nghiem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ten` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kinh_nghiem`
--

LOCK TABLES `kinh_nghiem` WRITE;
/*!40000 ALTER TABLE `kinh_nghiem` DISABLE KEYS */;
INSERT INTO `kinh_nghiem` VALUES (1,'NodeJS'),(2,'Phu ho'),(3,'Quan ly nhan su');
/*!40000 ALTER TABLE `kinh_nghiem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ky_nang`
--

DROP TABLE IF EXISTS `ky_nang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ky_nang` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ten` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ky_nang`
--

LOCK TABLES `ky_nang` WRITE;
/*!40000 ALTER TABLE `ky_nang` DISABLE KEYS */;
INSERT INTO `ky_nang` VALUES (1,'Excel'),(2,'Web design'),(3,'Photoshop');
/*!40000 ALTER TABLE `ky_nang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nganh_nghe`
--

DROP TABLE IF EXISTS `nganh_nghe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nganh_nghe` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ten` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nganh_nghe`
--

LOCK TABLES `nganh_nghe` WRITE;
/*!40000 ALTER TABLE `nganh_nghe` DISABLE KEYS */;
INSERT INTO `nganh_nghe` VALUES (1,'Buu chinh vien thong'),(2,'Dien - dien tu'),(3,'Cong nghe thong tin'),(4,'Phan mem'),(5,'Giao duc');
/*!40000 ALTER TABLE `nganh_nghe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoi_dung`
--

DROP TABLE IF EXISTS `nguoi_dung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nguoi_dung` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `password` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `so_dien_thoai` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `anh_dai_dien` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `vai_tro` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `so_dien_thoai` (`so_dien_thoai`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoi_dung`
--

LOCK TABLES `nguoi_dung` WRITE;
/*!40000 ALTER TABLE `nguoi_dung` DISABLE KEYS */;
INSERT INTO `nguoi_dung` VALUES (1,'pbkdf2_sha256$260000$4MqcMgZXFfwO95q10tpbcU$FOwvkLjGM2SrMDjDeNbinu4hcEnp8d7noesQ2rh2qIE=','2021-09-19 09:46:19.711468',1,'admin','','',1,1,'2021-09-19 09:45:35.959451','admin@mail.com',NULL,'',''),(2,'pbkdf2_sha256$260000$cZVjP49cxmLq4nAoLEDLGt$tqxLc54CwNdhpRGrzYSJqpdILYgUvKyMQ/Fu9Hj/UfE=',NULL,0,'ntd','Tuệ','Nguyễn',0,1,'2021-09-19 10:00:30.093952','ntd@mail.com',NULL,'static/upload/2021/09/usecase_N64igos.jpg','TUYEN DUNG'),(3,'pbkdf2_sha256$260000$zUc1aR6raNudkzbfLxcr2f$FhcDs0b7vQ3oCEXGoIrssJAS2xzhlnha3HP2Fdb+a48=',NULL,0,'uv','Quốc','Tấn',0,1,'2021-09-19 10:00:58.400606','uv@mail.com',NULL,'static/upload/2021/09/usecase_TmdZgWU.jpg','UNG VIEN'),(4,'pbkdf2_sha256$260000$ewBCNWE8l1zLJHt9YP8jlR$MDEoaXkHVvBPPGej7yLc0JrMAjySDs/mHsytc0h7lzA=',NULL,0,'ntd2','Văn','Trần',0,1,'2021-09-19 10:12:47.420041','ntd2@mail.com',NULL,'static/upload/2021/09/usecase_bZRPz7o.jpg','TUYEN DUNG'),(5,'pbkdf2_sha256$260000$cvDZxBbp30MjuOyYqcUjvE$ODRaaNRO6Qc0Q384+ko6CFWnTaEDq+QkJ+r5AavCCXA=',NULL,0,'uv2','Thúy','Lê',0,1,'2021-09-19 10:13:15.712363','uv2@mail.com',NULL,'static/upload/2021/09/usecase_cbhxnLS.jpg','UNG VIEN'),(6,'pbkdf2_sha256$260000$Pk8iKzDDhAXkzeaayvKdyY$Z+cG+w+ELq/9Q1Ety8mmL6xQhD4SLaIGDkj444Soihw=',NULL,0,'uv3','Hoàng','Đinh',0,1,'2021-09-20 11:54:30.101031','uv3@mail.com',NULL,'static/upload/2021/09/Screenshot_from_2021-09-20_10-10-19.png','UNG VIEN');
/*!40000 ALTER TABLE `nguoi_dung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoi_dung_groups`
--

DROP TABLE IF EXISTS `nguoi_dung_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nguoi_dung_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nguoidung_id` bigint NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nguoi_dung_groups_nguoidung_id_group_id_7c8ee018_uniq` (`nguoidung_id`,`group_id`),
  KEY `nguoi_dung_groups_group_id_59397a59_fk_auth_group_id` (`group_id`),
  CONSTRAINT `nguoi_dung_groups_group_id_59397a59_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `nguoi_dung_groups_nguoidung_id_6a8095a0_fk_nguoi_dung_id` FOREIGN KEY (`nguoidung_id`) REFERENCES `nguoi_dung` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoi_dung_groups`
--

LOCK TABLES `nguoi_dung_groups` WRITE;
/*!40000 ALTER TABLE `nguoi_dung_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `nguoi_dung_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoi_dung_user_permissions`
--

DROP TABLE IF EXISTS `nguoi_dung_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nguoi_dung_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `nguoidung_id` bigint NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nguoi_dung_user_permissi_nguoidung_id_permission__ff59ee3c_uniq` (`nguoidung_id`,`permission_id`),
  KEY `nguoi_dung_user_perm_permission_id_9e3563ee_fk_auth_perm` (`permission_id`),
  CONSTRAINT `nguoi_dung_user_perm_nguoidung_id_624225ff_fk_nguoi_dun` FOREIGN KEY (`nguoidung_id`) REFERENCES `nguoi_dung` (`id`),
  CONSTRAINT `nguoi_dung_user_perm_permission_id_9e3563ee_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoi_dung_user_permissions`
--

LOCK TABLES `nguoi_dung_user_permissions` WRITE;
/*!40000 ALTER TABLE `nguoi_dung_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `nguoi_dung_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nha_tuyen_dung`
--

DROP TABLE IF EXISTS `nha_tuyen_dung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nha_tuyen_dung` (
  `nguoi_dung_id` bigint NOT NULL,
  `ten_cong_ty` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dia_chi` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `quy_mo` int NOT NULL,
  `diem_danh_gia_tb` double NOT NULL,
  `doi_xet_duyet` tinyint(1) NOT NULL,
  `gioi_thieu` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`nguoi_dung_id`),
  CONSTRAINT `nha_tuyen_dung_nguoi_dung_id_79885dfa_fk_nguoi_dung_id` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nha_tuyen_dung`
--

LOCK TABLES `nha_tuyen_dung` WRITE;
/*!40000 ALTER TABLE `nha_tuyen_dung` DISABLE KEYS */;
INSERT INTO `nha_tuyen_dung` VALUES (2,'Công ty TNHH VinaPro','1 Lê Lai',200,0,0,'Là công ty số 1 VN'),(4,'Công ty Cà chua','99 Hồng Bàng',100,0,0,'Tập đoàn hàng đầu VN');
/*!40000 ALTER TABLE `nha_tuyen_dung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_accesstoken`
--

DROP TABLE IF EXISTS `oauth2_provider_accesstoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_accesstoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime(6) NOT NULL,
  `scope` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `application_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `source_refresh_token_id` bigint DEFAULT NULL,
  `id_token_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token` (`token`),
  UNIQUE KEY `source_refresh_token_id` (`source_refresh_token_id`),
  UNIQUE KEY `id_token_id` (`id_token_id`),
  KEY `oauth2_provider_acce_application_id_b22886e1_fk_oauth2_pr` (`application_id`),
  KEY `oauth2_provider_accesstoken_user_id_6e4c9a65_fk_nguoi_dung_id` (`user_id`),
  CONSTRAINT `oauth2_provider_acce_application_id_b22886e1_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  CONSTRAINT `oauth2_provider_acce_id_token_id_85db651b_fk_oauth2_pr` FOREIGN KEY (`id_token_id`) REFERENCES `oauth2_provider_idtoken` (`id`),
  CONSTRAINT `oauth2_provider_acce_source_refresh_token_e66fbc72_fk_oauth2_pr` FOREIGN KEY (`source_refresh_token_id`) REFERENCES `oauth2_provider_refreshtoken` (`id`),
  CONSTRAINT `oauth2_provider_accesstoken_user_id_6e4c9a65_fk_nguoi_dung_id` FOREIGN KEY (`user_id`) REFERENCES `nguoi_dung` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_accesstoken`
--

LOCK TABLES `oauth2_provider_accesstoken` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_accesstoken` DISABLE KEYS */;
INSERT INTO `oauth2_provider_accesstoken` VALUES (1,'asDXB10BumWyN4wlJG3htiTeBuOTgD','2021-09-19 20:01:03.972065','read write',1,3,'2021-09-19 10:01:03.972522','2021-09-19 10:01:03.972533',NULL,NULL),(2,'TsciQaSMSN7w3vaI96NwzrWXBJeCBR','2021-09-20 15:47:01.462108','read write',1,3,'2021-09-20 05:47:01.462594','2021-09-20 05:47:01.462607',NULL,NULL),(3,'GqcDOnbQd8WI296Hj4nxMOHiFiz1c3','2021-09-20 15:59:07.086972','read write',1,2,'2021-09-20 05:59:07.087410','2021-09-20 05:59:07.087425',NULL,NULL),(4,'lxSs1aAF1PJttEYu2Prs8yRGvvQVwZ','2021-09-20 16:04:25.954550','read write',1,3,'2021-09-20 06:04:25.954993','2021-09-20 06:04:25.955007',NULL,NULL),(5,'g6EHJPtZdat4JaTTuHmBEAgD7qucZH','2021-09-20 21:51:17.194705','read write',1,3,'2021-09-20 11:51:17.195253','2021-09-20 11:51:17.195270',NULL,NULL),(6,'4K4pabmaz1ZQypPpZgkDkRDdRiIKLx','2021-09-20 21:53:30.449372','read write',1,3,'2021-09-20 11:53:30.449915','2021-09-20 11:53:30.449930',NULL,NULL),(7,'b43iivih33QmSnBAO255FVldEOgZAH','2021-09-20 21:55:03.791969','read write',1,3,'2021-09-20 11:55:03.792429','2021-09-20 11:55:03.792443',NULL,NULL),(8,'uvMaCXREArQSvB1aD3AxgiHkufc3x8','2021-09-21 13:36:03.720272','read write',1,3,'2021-09-21 03:36:03.720813','2021-09-21 03:36:03.720827',NULL,NULL),(9,'eB5GXowdqRFDnM37IMfJPAidmTCddg','2021-09-21 13:38:00.744777','read write',1,5,'2021-09-21 03:38:00.745185','2021-09-21 03:38:00.745198',NULL,NULL),(10,'kGZsPy89r19IczcwNhm3CINtWh5i9h','2021-09-21 14:27:52.712730','read write',1,3,'2021-09-21 04:27:52.713291','2021-09-21 04:27:52.713305',NULL,NULL),(11,'ZXphkx9KdYZUthJkawTr7XO3W02YcU','2021-09-22 16:02:54.640750','read write',1,3,'2021-09-22 06:02:54.641316','2021-09-22 06:02:54.641331',NULL,NULL);
/*!40000 ALTER TABLE `oauth2_provider_accesstoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_application`
--

DROP TABLE IF EXISTS `oauth2_provider_application`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_application` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `client_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect_uris` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_type` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `authorization_grant_type` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `client_secret` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint DEFAULT NULL,
  `skip_authorization` tinyint(1) NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `algorithm` varchar(5) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `client_id` (`client_id`),
  KEY `oauth2_provider_application_user_id_79829054_fk_nguoi_dung_id` (`user_id`),
  KEY `oauth2_provider_application_client_secret_53133678` (`client_secret`),
  CONSTRAINT `oauth2_provider_application_user_id_79829054_fk_nguoi_dung_id` FOREIGN KEY (`user_id`) REFERENCES `nguoi_dung` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_application`
--

LOCK TABLES `oauth2_provider_application` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_application` DISABLE KEYS */;
INSERT INTO `oauth2_provider_application` VALUES (1,'NEST0N7JhUcv3ObQ5wXM6ZNKGywvPvOhSHgTStTB','','confidential','password','ug2vT3qEBUZDL8d5KzItc1cwVgYVUanZppVRWqJG74hIl3ww5Nm9tgNgIXoz9FfzYbdzYsVI5qJrm4LQkRMPQI7HSL0RIYjTFs63TQ8dC8oJ2L8aEkDf2Bmk5PCHCiXs','EmploymentAgency',1,0,'2021-09-19 09:46:39.375558','2021-09-19 09:46:39.375590','');
/*!40000 ALTER TABLE `oauth2_provider_application` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_grant`
--

DROP TABLE IF EXISTS `oauth2_provider_grant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_grant` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime(6) NOT NULL,
  `redirect_uri` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `scope` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `application_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `code_challenge` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `code_challenge_method` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nonce` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `claims` longtext COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT (_utf8mb3''),
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  KEY `oauth2_provider_gran_application_id_81923564_fk_oauth2_pr` (`application_id`),
  KEY `oauth2_provider_grant_user_id_e8f62af8_fk_nguoi_dung_id` (`user_id`),
  CONSTRAINT `oauth2_provider_gran_application_id_81923564_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  CONSTRAINT `oauth2_provider_grant_user_id_e8f62af8_fk_nguoi_dung_id` FOREIGN KEY (`user_id`) REFERENCES `nguoi_dung` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_grant`
--

LOCK TABLES `oauth2_provider_grant` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_grant` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth2_provider_grant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_idtoken`
--

DROP TABLE IF EXISTS `oauth2_provider_idtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_idtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `jti` char(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expires` datetime(6) NOT NULL,
  `scope` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `application_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `jti` (`jti`),
  KEY `oauth2_provider_idto_application_id_08c5ff4f_fk_oauth2_pr` (`application_id`),
  KEY `oauth2_provider_idtoken_user_id_dd512b59_fk_nguoi_dung_id` (`user_id`),
  CONSTRAINT `oauth2_provider_idto_application_id_08c5ff4f_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  CONSTRAINT `oauth2_provider_idtoken_user_id_dd512b59_fk_nguoi_dung_id` FOREIGN KEY (`user_id`) REFERENCES `nguoi_dung` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_idtoken`
--

LOCK TABLES `oauth2_provider_idtoken` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_idtoken` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth2_provider_idtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth2_provider_refreshtoken`
--

DROP TABLE IF EXISTS `oauth2_provider_refreshtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth2_provider_refreshtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` bigint DEFAULT NULL,
  `application_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `created` datetime(6) NOT NULL,
  `updated` datetime(6) NOT NULL,
  `revoked` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `access_token_id` (`access_token_id`),
  UNIQUE KEY `oauth2_provider_refreshtoken_token_revoked_af8a5134_uniq` (`token`,`revoked`),
  KEY `oauth2_provider_refr_application_id_2d1c311b_fk_oauth2_pr` (`application_id`),
  KEY `oauth2_provider_refreshtoken_user_id_da837fce_fk_nguoi_dung_id` (`user_id`),
  CONSTRAINT `oauth2_provider_refr_access_token_id_775e84e8_fk_oauth2_pr` FOREIGN KEY (`access_token_id`) REFERENCES `oauth2_provider_accesstoken` (`id`),
  CONSTRAINT `oauth2_provider_refr_application_id_2d1c311b_fk_oauth2_pr` FOREIGN KEY (`application_id`) REFERENCES `oauth2_provider_application` (`id`),
  CONSTRAINT `oauth2_provider_refreshtoken_user_id_da837fce_fk_nguoi_dung_id` FOREIGN KEY (`user_id`) REFERENCES `nguoi_dung` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth2_provider_refreshtoken`
--

LOCK TABLES `oauth2_provider_refreshtoken` WRITE;
/*!40000 ALTER TABLE `oauth2_provider_refreshtoken` DISABLE KEYS */;
INSERT INTO `oauth2_provider_refreshtoken` VALUES (1,'rTi0ZSD9MrlZdw06VyYwahZCduE7mU',1,1,3,'2021-09-19 10:01:03.985008','2021-09-19 10:01:03.985038',NULL),(2,'7wTsUHTXnibhpocKDzoagr53zufv0r',2,1,3,'2021-09-20 05:47:01.490041','2021-09-20 05:47:01.490071',NULL),(3,'X6c2eMoUzlLnYgaYdDg9VGV6YCv789',3,1,2,'2021-09-20 05:59:07.094100','2021-09-20 05:59:07.094131',NULL),(4,'QXuhbwHuzIGzpuFUm9sOzW7RVFTixL',4,1,3,'2021-09-20 06:04:25.961640','2021-09-20 06:04:25.961666',NULL),(5,'4FObSy3U2c9AngCCYMv0zA4vHjJMVK',5,1,3,'2021-09-20 11:51:17.216667','2021-09-20 11:51:17.216701',NULL),(6,'mjUAnhfknWd8jpyEFzHkNjvOtmXY8o',6,1,3,'2021-09-20 11:53:30.457743','2021-09-20 11:53:30.457774',NULL),(7,'Yh9CsEV0HLssoO3mQTOnHfh0uRkKC3',7,1,3,'2021-09-20 11:55:03.799904','2021-09-20 11:55:03.799950',NULL),(8,'BGihoNvRREGeQ1zgVNvLjK0xt1FLTd',8,1,3,'2021-09-21 03:36:03.733478','2021-09-21 03:36:03.733507',NULL),(9,'evAD6phFU2mRurogW7KLhPltV3pEfX',9,1,5,'2021-09-21 03:38:00.752030','2021-09-21 03:38:00.752060',NULL),(10,'mXFJePQnZaa7bn1rVmK2aUFFzYZSzP',10,1,3,'2021-09-21 04:27:52.724771','2021-09-21 04:27:52.724800',NULL),(11,'rXnSm97XYBpUZTuPgK08WfshGGJMBn',11,1,3,'2021-09-22 06:02:54.725476','2021-09-22 06:02:54.725511',NULL);
/*!40000 ALTER TABLE `oauth2_provider_refreshtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phuc_loi`
--

DROP TABLE IF EXISTS `phuc_loi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phuc_loi` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ten` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phuc_loi`
--

LOCK TABLES `phuc_loi` WRITE;
/*!40000 ALTER TABLE `phuc_loi` DISABLE KEYS */;
INSERT INTO `phuc_loi` VALUES (1,'BHXH'),(2,'Bảo hiểm tai nạn'),(3,'Nghỉ phép'),(4,'BHYT'),(5,'Thưởng doanh số'),(6,'Teambuilding');
/*!40000 ALTER TABLE `phuc_loi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quan_ly`
--

DROP TABLE IF EXISTS `quan_ly`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quan_ly` (
  `nguoi_dung_id` bigint NOT NULL,
  `log` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`nguoi_dung_id`),
  CONSTRAINT `quan_ly_nguoi_dung_id_725fb816_fk_nguoi_dung_id` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quan_ly`
--

LOCK TABLES `quan_ly` WRITE;
/*!40000 ALTER TABLE `quan_ly` DISABLE KEYS */;
/*!40000 ALTER TABLE `quan_ly` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ung_tuyen`
--

DROP TABLE IF EXISTS `ung_tuyen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ung_tuyen` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ngay_ung_tuyen` date NOT NULL,
  `trang_thai_ho_so` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `viec_lam_id` bigint DEFAULT NULL,
  `ung_vien_id` bigint DEFAULT NULL,
  `nguoi_gui` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ung_tuyen_viec_lam_id_e26bec97_fk_viec_lam_id` (`viec_lam_id`),
  KEY `ung_tuyen_ung_vien_id_b81a3f14_fk_ung_vien_nguoi_dung_id` (`ung_vien_id`),
  CONSTRAINT `ung_tuyen_ung_vien_id_b81a3f14_fk_ung_vien_nguoi_dung_id` FOREIGN KEY (`ung_vien_id`) REFERENCES `ung_vien` (`nguoi_dung_id`),
  CONSTRAINT `ung_tuyen_viec_lam_id_e26bec97_fk_viec_lam_id` FOREIGN KEY (`viec_lam_id`) REFERENCES `viec_lam` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ung_tuyen`
--

LOCK TABLES `ung_tuyen` WRITE;
/*!40000 ALTER TABLE `ung_tuyen` DISABLE KEYS */;
INSERT INTO `ung_tuyen` VALUES (1,'2021-09-20','CHO XU LY',1,3,'UV'),(2,'2021-09-20','CHO XU LY',1,3,'UV'),(3,'2021-09-20','CHO XU LY',1,3,'UV'),(4,'2021-09-20','CHO XU LY',1,3,'UV'),(5,'2021-09-20','CHO XU LY',1,3,'UV'),(6,'2021-09-20','CHO XU LY',1,3,'UV'),(7,'2021-09-21','CHO XU LY',2,3,'UV'),(29,'2021-09-21','CHO XU LY',NULL,NULL,'UV'),(30,'2021-09-21','CHO XU LY',NULL,NULL,'UV'),(31,'2021-09-21','CHO XU LY',NULL,NULL,'UV'),(32,'2021-09-21','CHO XU LY',NULL,NULL,'UV'),(33,'2021-09-21','CHO XU LY',NULL,NULL,'UV'),(34,'2021-09-21','CHO XU LY',NULL,NULL,'UV'),(35,'2021-09-21','CHO XU LY',1,5,'UV');
/*!40000 ALTER TABLE `ung_tuyen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ung_vien`
--

DROP TABLE IF EXISTS `ung_vien`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ung_vien` (
  `nguoi_dung_id` bigint NOT NULL,
  `ngay_sinh` date DEFAULT NULL,
  `dia_chi` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cv` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gioi_thieu` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`nguoi_dung_id`),
  CONSTRAINT `ung_vien_nguoi_dung_id_04091140_fk_nguoi_dung_id` FOREIGN KEY (`nguoi_dung_id`) REFERENCES `nguoi_dung` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ung_vien`
--

LOCK TABLES `ung_vien` WRITE;
/*!40000 ALTER TABLE `ung_vien` DISABLE KEYS */;
INSERT INTO `ung_vien` VALUES (3,'2000-03-13','2 Nguyễn Trãi',NULL,'Là nhân viên pro'),(5,'1999-12-31','4 Đất Mới',NULL,'Nhân viên toàn thời gian');
/*!40000 ALTER TABLE `ung_vien` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ung_vien_bang_cap`
--

DROP TABLE IF EXISTS `ung_vien_bang_cap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ung_vien_bang_cap` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mo_ta` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bang_cap_id` bigint NOT NULL,
  `ung_vien_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ung_vien_bang_cap_bang_cap_id_70e76b07_fk_bang_cap_id` (`bang_cap_id`),
  KEY `ung_vien_bang_cap_ung_vien_id_59c49495_fk_ung_vien_nguoi_dung_id` (`ung_vien_id`),
  CONSTRAINT `ung_vien_bang_cap_bang_cap_id_70e76b07_fk_bang_cap_id` FOREIGN KEY (`bang_cap_id`) REFERENCES `bang_cap` (`id`),
  CONSTRAINT `ung_vien_bang_cap_ung_vien_id_59c49495_fk_ung_vien_nguoi_dung_id` FOREIGN KEY (`ung_vien_id`) REFERENCES `ung_vien` (`nguoi_dung_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ung_vien_bang_cap`
--

LOCK TABLES `ung_vien_bang_cap` WRITE;
/*!40000 ALTER TABLE `ung_vien_bang_cap` DISABLE KEYS */;
/*!40000 ALTER TABLE `ung_vien_bang_cap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ung_vien_chuc_danh`
--

DROP TABLE IF EXISTS `ung_vien_chuc_danh`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ung_vien_chuc_danh` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ungvien_id` bigint NOT NULL,
  `chucdanh_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ung_vien_chuc_danh_ungvien_id_chucdanh_id_91b07e0d_uniq` (`ungvien_id`,`chucdanh_id`),
  KEY `ung_vien_chuc_danh_chucdanh_id_1c0a7bce_fk_chuc_danh_id` (`chucdanh_id`),
  CONSTRAINT `ung_vien_chuc_danh_chucdanh_id_1c0a7bce_fk_chuc_danh_id` FOREIGN KEY (`chucdanh_id`) REFERENCES `chuc_danh` (`id`),
  CONSTRAINT `ung_vien_chuc_danh_ungvien_id_252e75f9_fk_ung_vien_nguoi_dung_id` FOREIGN KEY (`ungvien_id`) REFERENCES `ung_vien` (`nguoi_dung_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ung_vien_chuc_danh`
--

LOCK TABLES `ung_vien_chuc_danh` WRITE;
/*!40000 ALTER TABLE `ung_vien_chuc_danh` DISABLE KEYS */;
/*!40000 ALTER TABLE `ung_vien_chuc_danh` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ung_vien_kinh_nghiem`
--

DROP TABLE IF EXISTS `ung_vien_kinh_nghiem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ung_vien_kinh_nghiem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mo_ta` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kinh_nghiem_id` bigint NOT NULL,
  `ung_vien_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ung_vien_kinh_nghiem_kinh_nghiem_id_7d645bc2_fk_kinh_nghiem_id` (`kinh_nghiem_id`),
  KEY `ung_vien_kinh_nghiem_ung_vien_id_ec515799_fk_ung_vien_` (`ung_vien_id`),
  CONSTRAINT `ung_vien_kinh_nghiem_kinh_nghiem_id_7d645bc2_fk_kinh_nghiem_id` FOREIGN KEY (`kinh_nghiem_id`) REFERENCES `kinh_nghiem` (`id`),
  CONSTRAINT `ung_vien_kinh_nghiem_ung_vien_id_ec515799_fk_ung_vien_` FOREIGN KEY (`ung_vien_id`) REFERENCES `ung_vien` (`nguoi_dung_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ung_vien_kinh_nghiem`
--

LOCK TABLES `ung_vien_kinh_nghiem` WRITE;
/*!40000 ALTER TABLE `ung_vien_kinh_nghiem` DISABLE KEYS */;
/*!40000 ALTER TABLE `ung_vien_kinh_nghiem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ung_vien_ky_nang`
--

DROP TABLE IF EXISTS `ung_vien_ky_nang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ung_vien_ky_nang` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mo_ta` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ky_nang_id` bigint NOT NULL,
  `ung_vien_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ung_vien_ky_nang_ky_nang_id_25ccbff9_fk_ky_nang_id` (`ky_nang_id`),
  KEY `ung_vien_ky_nang_ung_vien_id_3d7e84e1_fk_ung_vien_nguoi_dung_id` (`ung_vien_id`),
  CONSTRAINT `ung_vien_ky_nang_ky_nang_id_25ccbff9_fk_ky_nang_id` FOREIGN KEY (`ky_nang_id`) REFERENCES `ky_nang` (`id`),
  CONSTRAINT `ung_vien_ky_nang_ung_vien_id_3d7e84e1_fk_ung_vien_nguoi_dung_id` FOREIGN KEY (`ung_vien_id`) REFERENCES `ung_vien` (`nguoi_dung_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ung_vien_ky_nang`
--

LOCK TABLES `ung_vien_ky_nang` WRITE;
/*!40000 ALTER TABLE `ung_vien_ky_nang` DISABLE KEYS */;
/*!40000 ALTER TABLE `ung_vien_ky_nang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ung_vien_nganh_nghe`
--

DROP TABLE IF EXISTS `ung_vien_nganh_nghe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ung_vien_nganh_nghe` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `mo_ta` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nganh_nghe_id` bigint NOT NULL,
  `ung_vien_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `ung_vien_nganh_nghe_nganh_nghe_id_a3de1226_fk_nganh_nghe_id` (`nganh_nghe_id`),
  KEY `ung_vien_nganh_nghe_ung_vien_id_a0fae14c_fk_ung_vien_` (`ung_vien_id`),
  CONSTRAINT `ung_vien_nganh_nghe_nganh_nghe_id_a3de1226_fk_nganh_nghe_id` FOREIGN KEY (`nganh_nghe_id`) REFERENCES `nganh_nghe` (`id`),
  CONSTRAINT `ung_vien_nganh_nghe_ung_vien_id_a0fae14c_fk_ung_vien_` FOREIGN KEY (`ung_vien_id`) REFERENCES `ung_vien` (`nguoi_dung_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ung_vien_nganh_nghe`
--

LOCK TABLES `ung_vien_nganh_nghe` WRITE;
/*!40000 ALTER TABLE `ung_vien_nganh_nghe` DISABLE KEYS */;
/*!40000 ALTER TABLE `ung_vien_nganh_nghe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viec_lam`
--

DROP TABLE IF EXISTS `viec_lam`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viec_lam` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `ngay_tao` date NOT NULL,
  `ngay_het_han` date NOT NULL,
  `noi_dung` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `tieu_de` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `trang_thai_viec_lam` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nha_tuyen_dung_id` bigint NOT NULL,
  `luong` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `viec_lam_nha_tuyen_dung_id_25617820_fk_nha_tuyen` (`nha_tuyen_dung_id`),
  CONSTRAINT `viec_lam_nha_tuyen_dung_id_25617820_fk_nha_tuyen` FOREIGN KEY (`nha_tuyen_dung_id`) REFERENCES `nha_tuyen_dung` (`nguoi_dung_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viec_lam`
--

LOCK TABLES `viec_lam` WRITE;
/*!40000 ALTER TABLE `viec_lam` DISABLE KEYS */;
INSERT INTO `viec_lam` VALUES (1,'2021-06-06','2021-12-05','In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.','Chuyên viên phát triển sản phẩm','DANG MO',2,100000),(2,'2021-06-06','2021-12-05','In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.','Chuyên viên tư vấn khách hàng','DANG MO',2,0),(3,'2021-06-06','2021-12-05','In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.final copy is available.','Viec lam pro 3','DANG MO',4,150000000),(4,'2021-06-06','2021-12-05','In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.','Viec lam pro 4','DANG MO',4,0),(5,'2021-06-06','2021-12-05','In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.','Viec lam pro 5','DANG MO',2,200000000),(6,'2021-06-06','2021-12-05','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Viec lam pro 6','DANG MO',2,300000000),(7,'2021-06-06','2021-12-05','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Viec lam pro 7','DANG MO',4,250000000),(8,'2021-06-06','2021-12-05','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.','Viec lam pro 8','DA DONG',4,0),(9,'2021-06-06','2021-12-05','There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.','Viec lam pro 9','DANG MO',2,0),(10,'2021-06-06','2021-12-05','Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.','Viec lam pro 10','DANG MO',2,210000000);
/*!40000 ALTER TABLE `viec_lam` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viec_lam_bang_cap`
--

DROP TABLE IF EXISTS `viec_lam_bang_cap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viec_lam_bang_cap` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `vieclam_id` bigint NOT NULL,
  `bangcap_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `viec_lam_bang_cap_vieclam_id_bangcap_id_a62a7056_uniq` (`vieclam_id`,`bangcap_id`),
  KEY `viec_lam_bang_cap_bangcap_id_371171b9_fk_bang_cap_id` (`bangcap_id`),
  CONSTRAINT `viec_lam_bang_cap_bangcap_id_371171b9_fk_bang_cap_id` FOREIGN KEY (`bangcap_id`) REFERENCES `bang_cap` (`id`),
  CONSTRAINT `viec_lam_bang_cap_vieclam_id_c2652e00_fk_viec_lam_id` FOREIGN KEY (`vieclam_id`) REFERENCES `viec_lam` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viec_lam_bang_cap`
--

LOCK TABLES `viec_lam_bang_cap` WRITE;
/*!40000 ALTER TABLE `viec_lam_bang_cap` DISABLE KEYS */;
INSERT INTO `viec_lam_bang_cap` VALUES (1,1,2),(2,1,3);
/*!40000 ALTER TABLE `viec_lam_bang_cap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viec_lam_kinh_nghiem`
--

DROP TABLE IF EXISTS `viec_lam_kinh_nghiem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viec_lam_kinh_nghiem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `vieclam_id` bigint NOT NULL,
  `kinhnghiem_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `viec_lam_kinh_nghiem_vieclam_id_kinhnghiem_id_977b17ad_uniq` (`vieclam_id`,`kinhnghiem_id`),
  KEY `viec_lam_kinh_nghiem_kinhnghiem_id_4de4579b_fk_kinh_nghiem_id` (`kinhnghiem_id`),
  CONSTRAINT `viec_lam_kinh_nghiem_kinhnghiem_id_4de4579b_fk_kinh_nghiem_id` FOREIGN KEY (`kinhnghiem_id`) REFERENCES `kinh_nghiem` (`id`),
  CONSTRAINT `viec_lam_kinh_nghiem_vieclam_id_7e06fdb6_fk_viec_lam_id` FOREIGN KEY (`vieclam_id`) REFERENCES `viec_lam` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viec_lam_kinh_nghiem`
--

LOCK TABLES `viec_lam_kinh_nghiem` WRITE;
/*!40000 ALTER TABLE `viec_lam_kinh_nghiem` DISABLE KEYS */;
INSERT INTO `viec_lam_kinh_nghiem` VALUES (1,1,2),(2,1,3);
/*!40000 ALTER TABLE `viec_lam_kinh_nghiem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viec_lam_ky_nang`
--

DROP TABLE IF EXISTS `viec_lam_ky_nang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viec_lam_ky_nang` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `vieclam_id` bigint NOT NULL,
  `kynang_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `viec_lam_ky_nang_vieclam_id_kynang_id_4d5e3913_uniq` (`vieclam_id`,`kynang_id`),
  KEY `viec_lam_ky_nang_kynang_id_310e4401_fk_ky_nang_id` (`kynang_id`),
  CONSTRAINT `viec_lam_ky_nang_kynang_id_310e4401_fk_ky_nang_id` FOREIGN KEY (`kynang_id`) REFERENCES `ky_nang` (`id`),
  CONSTRAINT `viec_lam_ky_nang_vieclam_id_7faf76a3_fk_viec_lam_id` FOREIGN KEY (`vieclam_id`) REFERENCES `viec_lam` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viec_lam_ky_nang`
--

LOCK TABLES `viec_lam_ky_nang` WRITE;
/*!40000 ALTER TABLE `viec_lam_ky_nang` DISABLE KEYS */;
INSERT INTO `viec_lam_ky_nang` VALUES (1,1,1),(2,1,2);
/*!40000 ALTER TABLE `viec_lam_ky_nang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viec_lam_nganh_nghe`
--

DROP TABLE IF EXISTS `viec_lam_nganh_nghe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viec_lam_nganh_nghe` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `vieclam_id` bigint NOT NULL,
  `nganhnghe_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `viec_lam_nganh_nghe_vieclam_id_nganhnghe_id_97189eaf_uniq` (`vieclam_id`,`nganhnghe_id`),
  KEY `viec_lam_nganh_nghe_nganhnghe_id_940f192e_fk_nganh_nghe_id` (`nganhnghe_id`),
  CONSTRAINT `viec_lam_nganh_nghe_nganhnghe_id_940f192e_fk_nganh_nghe_id` FOREIGN KEY (`nganhnghe_id`) REFERENCES `nganh_nghe` (`id`),
  CONSTRAINT `viec_lam_nganh_nghe_vieclam_id_924aacea_fk_viec_lam_id` FOREIGN KEY (`vieclam_id`) REFERENCES `viec_lam` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viec_lam_nganh_nghe`
--

LOCK TABLES `viec_lam_nganh_nghe` WRITE;
/*!40000 ALTER TABLE `viec_lam_nganh_nghe` DISABLE KEYS */;
INSERT INTO `viec_lam_nganh_nghe` VALUES (1,1,1),(2,1,2);
/*!40000 ALTER TABLE `viec_lam_nganh_nghe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viec_lam_phuc_loi`
--

DROP TABLE IF EXISTS `viec_lam_phuc_loi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viec_lam_phuc_loi` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `vieclam_id` bigint NOT NULL,
  `phucloi_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `viec_lam_phuc_loi_vieclam_id_phucloi_id_399b49e5_uniq` (`vieclam_id`,`phucloi_id`),
  KEY `viec_lam_phuc_loi_phucloi_id_90cffc67_fk_phuc_loi_id` (`phucloi_id`),
  CONSTRAINT `viec_lam_phuc_loi_phucloi_id_90cffc67_fk_phuc_loi_id` FOREIGN KEY (`phucloi_id`) REFERENCES `phuc_loi` (`id`),
  CONSTRAINT `viec_lam_phuc_loi_vieclam_id_2b26bce0_fk_viec_lam_id` FOREIGN KEY (`vieclam_id`) REFERENCES `viec_lam` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viec_lam_phuc_loi`
--

LOCK TABLES `viec_lam_phuc_loi` WRITE;
/*!40000 ALTER TABLE `viec_lam_phuc_loi` DISABLE KEYS */;
INSERT INTO `viec_lam_phuc_loi` VALUES (1,1,1),(2,1,2),(3,1,5);
/*!40000 ALTER TABLE `viec_lam_phuc_loi` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-22 23:23:58
