-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: willchat
-- ------------------------------------------------------
-- Server version	8.0.32

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
-- Table structure for table `contatos`
--

DROP TABLE IF EXISTS `contatos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contatos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emailAgent` varchar(100) NOT NULL,
  `emailClient` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contatos`
--

LOCK TABLES `contatos` WRITE;
/*!40000 ALTER TABLE `contatos` DISABLE KEYS */;
INSERT INTO `contatos` VALUES (1,'andresalima45@outlook.com','williamsabino64@gmail.com'),(2,'williamsabino64@gmail.com','andresalima45@outlook.com'),(3,'andresalima45@outlook.com','wyllyam1258@gmail.com'),(4,'wyllyam1258@gmail.com','andresalima45@outlook.com'),(5,'williamsabino64@gmail.com','wellton66@gmail.com'),(6,'williamsabino64@gmail.com','gersonNunes@godmail.com'),(7,'williamsabino64@gmail.com','wellton66@gmail.com'),(8,'wellton66@gmail.com','williamsabino64@gmail.com'),(9,'williamsabino64@gmail.com','wyllyam1258@gmail.com'),(10,'wyllyam1258@gmail.com','williamsabino64@gmail.com');
/*!40000 ALTER TABLE `contatos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mensagens`
--

DROP TABLE IF EXISTS `mensagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mensagens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `emailAgent` varchar(100) NOT NULL,
  `emailClient` varchar(100) NOT NULL,
  `dataEnvio` datetime DEFAULT NULL,
  `mensagem` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=245 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mensagens`
--

LOCK TABLES `mensagens` WRITE;
/*!40000 ALTER TABLE `mensagens` DISABLE KEYS */;
INSERT INTO `mensagens` VALUES (241,'williamsabino64@gmail.com','andresalima45@outlook.com','2023-11-05 10:22:35','oiiii'),(242,'andresalima45@outlook.com','williamsabino64@gmail.com','2023-11-05 10:22:42','iiiooo'),(243,'williamsabino64@gmail.com','andresalima45@outlook.com','2023-11-05 10:23:00','iiiioioioioi'),(244,'andresalima45@outlook.com','wyllyam1258@gmail.com','2023-11-05 10:23:17','bbbbb');
/*!40000 ALTER TABLE `mensagens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `email` varchar(100) NOT NULL,
  `saltSenha` varchar(120) NOT NULL,
  `hashSenha` varchar(120) NOT NULL,
  PRIMARY KEY (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES ('','$2b$10$LLbmZF1rmaEjPlMeWAqAbe','$2b$10$LLbmZF1rmaEjPlMeWAqAbeD3O2aZSIiYRXQBtP7nUHX5nmzGn45je'),('andresalima45@outlook.com','$2b$10$3x0LUQbt9MxXPh13VN.KbO','$2b$10$3x0LUQbt9MxXPh13VN.KbOmbU80ilSlFoLSRAdUoEIYpEpCMrL5Qu'),('sdsss@hotmail.com','$2b$10$YiwR3fjLMi9PeyYyK9CicO','$2b$10$YiwR3fjLMi9PeyYyK9CicOvBoFCSKoYYnFtqHbloAqNjickePeS5m'),('wellton66@gmail.com','$2b$10$CHrBw7N47QCljpxsQjf9Le','$2b$10$CHrBw7N47QCljpxsQjf9Leta59TUGNOTLATwSxdwEpsP4vHjZnn.y'),('williamsabino','$2b$10$nzg4pQPAzoUdNfQ2ihUmre','$2b$10$nzg4pQPAzoUdNfQ2ihUmreBJJ4Bk9GJHedmuYD0xuTuL2jwd63uai'),('williamsabino64@gmail.com','$2b$10$0il1bc5gSQACgnxq9oF99e','$2b$10$0il1bc5gSQACgnxq9oF99e16YbzETP3PgnU0Cvz0nt.iQuhA1.rJy'),('wyllyam1258@gmail.com','$2b$10$GB51Avlf54BCe3DOm7t0ge','$2b$10$GB51Avlf54BCe3DOm7t0geTWhMNqA52hnl6JleRzUlTL.rG5B9jp6');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'willchat'
--

--
-- Dumping routines for database 'willchat'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-01 13:00:23
