-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.32-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.10.0.7000
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para inventario
CREATE DATABASE IF NOT EXISTS `inventario` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `inventario`;

-- Volcando estructura para tabla inventario.articles
CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `descrip` varchar(255) NOT NULL,
  `idCategoria` int(11) DEFAULT NULL,
  `idTipo` int(11) DEFAULT NULL,
  `idProyecto` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `modelo` varchar(255) DEFAULT NULL,
  `longitud` float DEFAULT NULL,
  `diametro` float DEFAULT NULL,
  `peso` float DEFAULT NULL,
  `altura` float DEFAULT NULL,
  `materiales` varchar(100) DEFAULT NULL,
  `unidadMedida` varchar(20) DEFAULT NULL,
  `condicion` varchar(50) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `numSerie` varchar(30) DEFAULT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `detalles` varchar(255) DEFAULT NULL,
  `imagen` varchar(255) NOT NULL,
  `dateCreation` datetime DEFAULT current_timestamp(),
  `userCreation` varchar(255) DEFAULT 'Admin',
  PRIMARY KEY (`id`),
  KEY `idCategoria` (`idCategoria`),
  KEY `fk_article_type` (`idTipo`),
  CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`idCategoria`) REFERENCES `categories` (`idCategory`),
  CONSTRAINT `articles_ibfk_2` FOREIGN KEY (`idTipo`) REFERENCES `types` (`idType`),
  CONSTRAINT `fk_article_type` FOREIGN KEY (`idTipo`) REFERENCES `types` (`idType`)
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.articles: ~51 rows (aproximadamente)
INSERT INTO `articles` (`id`, `nombre`, `descrip`, `idCategoria`, `idTipo`, `idProyecto`, `stock`, `modelo`, `longitud`, `diametro`, `peso`, `altura`, `materiales`, `unidadMedida`, `condicion`, `color`, `numSerie`, `marca`, `detalles`, `imagen`, `dateCreation`, `userCreation`) VALUES
	(31, 'MOTMOTK87DRN', '', 6, 14, '', 1, 'K87DRN112M4/BE5HR/ISU/TF/EI7C', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.786243920.0001X20', 'SEW-EURODRIVE', 'MOTOR SEW EURODRIVE V220-230\nkw 4 S1', '', '2025-04-22 11:11:20', 'admin'),
	(32, 'MOTMOTK87DRN', '', 6, 14, '', 1, 'K87 DRN132S4/BE11HR/ABB8/TF/AS7W', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7862500512.0001.20', 'SEW-EURODRIVE', 'v380-400Y', '', '2025-04-22 11:14:00', ''),
	(33, 'MOTMOTKA57BDRN', '', 6, 14, '', 1, 'KA57BDRN71M4/BE05HF/ISU/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7862500509.002X20', 'SEW-EURODRIVE', 'v220-240', '', '2025-04-22 11:15:31', ''),
	(34, 'MOTMOTHK37DRN', '', 6, 14, '', 1, 'HK37 DRN71M4/BE05HR/IS/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30.7817685101.0018.19', 'SEW-EURODRIVE', 'v220-240', '', '2025-04-22 11:29:57', 'admin'),
	(35, 'MOTMOTHK37DRN', '', 6, 14, '', 1, 'HK37DRN71M4//BE05HR/IS/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30 7817685101.0016.19', 'SEW-EURODRIVE', 'v220-240', '', '2025-04-22 11:31:14', ''),
	(37, 'MOTMOTKH97DRN', '', 6, 14, '', 1, 'KH97 DRN13234/BE11HR/ABB8/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7862637717.0001.20', 'SEW-EURODRIVE', 'v380-400', '', '2025-04-22 11:32:52', ''),
	(38, 'MOTMOTHK37DRN', '', 6, 14, '', 1, 'HK37 DRN71M4/BE05HR/IS/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30.7817685101.0009.19', 'SEW-EURODRIVE', 'v220-240', '', '2025-04-22 11:34:11', ''),
	(39, 'MOTMOTKH37DRS', '', 6, 14, '', 1, 'KH37DRS71S4BE05HR/ISU/TF/LN', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7785097109.0026.19', 'SEW-EURODRIVE', 'v400', '', '2025-04-22 11:40:29', ''),
	(40, 'MOTMOTHK37DRN', '', 6, 14, '', 1, 'HK37 DRN71M4/BE05HR/IS/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30.7817685103.0013.19', 'SEW-EURODRIVE', 'v220-240', '', '2025-04-22 11:43:17', ''),
	(41, 'MOTMOTHK37DRN', '', 6, 14, '', 1, 'HK37 DRN71M4/BE05HR/IS/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30.7817685103.0011.19', 'SEW-EURODRIVE', 'v220-240', '', '2025-04-22 11:44:41', ''),
	(42, 'MOTMOTHK37DRN', '', 6, 14, '', 1, 'HK37 DRN71M4/BE05HR/IS/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30.7817685103.0015.19', 'SEW-EURODRIVE', 'v220-240', '', '2025-04-22 11:45:53', ''),
	(43, 'MOTMOTHK37DRN', '', 6, 14, '', 1, 'HK37 DRN71M4/BE05HR/IS/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30.7817685101.001.19', 'SEW-EURODRIVE', 'v220-240', '', '2025-04-22 11:46:59', ''),
	(44, 'MOTMOTHK37DRS', '', 6, 14, '', 1, 'HK37 DRS80S3/2BE05HB/IS/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30.7817685104.0013.19', 'SEW-EURODRIVE', 'v400', '', '2025-04-22 11:48:17', ''),
	(45, 'MOTMOTHK37DRS', '', 6, 14, '', 1, 'HK37 DRS80S3/2BE05HR/IS/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30.7817685104.001.19', 'SEW-EURODRIVE', 'v400', '', '2025-04-22 11:49:17', ''),
	(46, 'MOTMOTHK37DRN', '', 6, 14, '', 1, 'HK37DRN71M4/BE05HR/IS/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30.7817685103.0008.19', 'SEW-EURODRIVE', 'v220-240', '', '2025-04-22 11:50:23', ''),
	(47, 'MOTMOTRX67DRN', '', 6, 14, '', 1, 'RX67 DRN90L4/BE2HR/IS/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30.7876121001.0001.20', 'SEW-EURODRIVE', 'v220-230', '', '2025-04-22 11:51:31', ''),
	(48, 'MOTMOTK77DRN', '', 6, 14, '', 1, 'K77 DRN100L4/BE5HR/ISU/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7857020201.0001X20', 'SEW-EURODRIVE', 'v220-230', '', '2025-04-22 12:23:21', ''),
	(49, 'MOTMOTRX67DRN', '', 6, 14, '', 1, 'RX67 DRN90L4/BE2HR/IS/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30.7876121001.0002.20', 'SEW-EURODRIVE', 'v220-230', '', '2025-04-22 12:25:11', ''),
	(50, 'MOTMOTKH37DRS', '', 6, 14, '', 1, 'KH37 DRS71S4BE05HR/ISU/TF/LN', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7785097109.0032.19', 'SEW-EURODRIVE', 'v400', '', '2025-04-22 12:26:45', ''),
	(51, 'MOTMOTHK37DRN', '', 6, 14, '', 1, 'HK37 DRN71M4/BE05HR/IS/TF/Z', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30.7873848301.0001X20', 'SEW-EURODRIVE', 'v220-240', '', '2025-04-22 12:28:11', ''),
	(52, 'MOTMOTKH37DRS', '', 6, 14, '', 1, 'KH37 DRS71S4BE05HR/ISU/TF/LN', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7785097109.0012.19', 'SEW-EURODRIVE', 'v400', '', '2025-04-22 12:29:26', ''),
	(53, 'MOTMOTRX67DRN', '', 6, 14, '', 1, 'RX67 DRN90L4/BE2HR/IS/TF', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '30.7876121001.0002.20', NULL, 'v220-230', '', '2025-04-22 12:30:25', ''),
	(54, 'MOTMOTKF57DRS', '', 6, 14, '', 1, 'KF57 DRS71M4BE1HR/ISU/TF/EI7C', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7862434917.0001X20', 'SEW-EURODRIVE', 'v220-242', '', '2025-04-22 12:31:36', ''),
	(55, 'MOTMOTWAF37DRC', '', 6, 14, '', 1, 'WAF37 DRC1-005-SNI-A-ECR/IV/A', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7781438008.0015.19', 'SEW-EURODRIVE', '500v', '', '2025-04-22 12:33:09', ''),
	(56, 'MOTMOTKF57DRS', '', 6, 14, '', 1, 'KF57 DRS71M4BE1HR/ISU/TF/EI7C', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7862434918.0001X20', 'SEW-EURODRIVE', 'v220-242 / v380-420', '', '2025-04-22 12:35:05', ''),
	(59, 'VARMOVIFITMTC11', '', 8, 16, '', 1, 'MTC11A000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7778704101.0020.19', 'SEW ', 'MAC - ID: 00-0F-69-33-00-60', '/assets/articulos/1745401819549.jpg', '2025-04-23 09:50:19', 'admin'),
	(60, 'VARMOVIFITMTC11', '', 8, 16, '', 1, 'MTC11A000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7778704101.0013.19', 'SEW', 'MAC-ID 00-0F-69-33-00-44', '/assets/articulos/1745402195262.jpg', '2025-04-23 09:56:35', ''),
	(61, 'VARMOVIFITMTC11', '', 8, 16, '', 1, 'MTC11A000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7778704101.0015.19', 'SEW', 'MAC-ID: 00-0F-69-33-00-07', '/assets/articulos/1745402592006.jpg', '2025-04-23 10:03:12', ''),
	(62, 'VARMOVIFITNTC11', '', 8, 16, '', 1, 'NTC118000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '7778704101 0006 19', NULL, 'MAC-ID: 00-05-69-33-00-56', '/assets/articulos/1745402763725.jpg', '2025-04-23 10:06:03', ''),
	(63, 'VARMOVIFITNTC11', '', 8, 16, '', 1, 'MTC11A000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01 7778704101 0007 19', 'SEW', 'MAC-ID: 00-DF-69-33-00-57', '/assets/articulos/1745402916493.jpg', '2025-04-23 10:08:36', ''),
	(64, 'VARMOVIFITMTF11', '', 8, 16, '', 1, 'MTF11A007-503-E31A-20/512B', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7792011207.0012.19', NULL, NULL, '/assets/articulos/1745403239477.jpg', '2025-04-23 10:13:59', ''),
	(65, 'VARMOVIFITMTC11', '', 8, 16, '', 1, 'MTC11A000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01-7778704101.0003.19', NULL, 'MAC-ID: 00-0F-69-33-00-48', '/assets/articulos/1745403339404.jpg', '2025-04-23 10:15:39', ''),
	(66, 'VARMOVIFITMTF11', '', 8, 16, '', 1, 'MTF11A007-503-E31A-20/512B', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7792011206.0001.19', 'SEW', NULL, '/assets/articulos/1745403497668.jpg', '2025-04-23 10:18:17', ''),
	(68, 'VARMOVIDRIVEMDX61', '', 8, 17, '', 1, 'MDX61B0220-503-4-0T', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '25.7772541510.0002.19', NULL, NULL, '/assets/articulos/1745404027635.jpg', '2025-04-23 10:27:07', ''),
	(69, 'VARMOVIPRO', '', 8, 18, '', 1, 'PHC22A-A150M1-W42A-C5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7800855445.0013.19', NULL, 'MAC 00:30:56::AC:03:B3', '/assets/articulos/1745404529146.jpg', '2025-04-23 10:35:29', ''),
	(70, 'VARMOVIPROPHC22', '', 8, 18, '', 1, 'PHC22A-A150M1-W42A-C5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7800855444.0002.19', NULL, 'MAC: 00:30:56:AB:FA:D3', '/assets/articulos/1745404711571.jpg', '2025-04-23 10:38:31', ''),
	(71, 'VARMOVIPROPHC22', '', 8, 18, '', 1, 'PHC22A-A150M1-W42A-C5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7800855443.0004.19', NULL, 'MAC: 00:30:56:AC:03:4F', '/assets/articulos/1745404946995.jpg', '2025-04-23 10:42:26', ''),
	(72, 'VARMOVIPROPHC22', '', 8, 18, '', 1, 'PHC22A-A15M1-W42A-C5', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7800855440.0004.19', NULL, 'MAC: 00:30:56:AC:03:71', '/assets/articulos/1745405120569.jpg', '2025-04-23 10:45:20', ''),
	(73, 'VARMOVIPROMTF11', '', 8, 16, '', 1, 'MTF11A007-503-E31A-20/S12B', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7792011207.0001.19', 'SEW', NULL, '/assets/articulos/1745405338865.jpg', '2025-04-23 10:48:58', ''),
	(74, 'VARMOVIPROMTF11', '', 8, 16, '', 1, 'MTC11A000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7778704101.0023.19', NULL, 'MAC: 00-0F-69-33-00-D4', '/assets/articulos/1745405598865.jpg', '2025-04-23 10:53:18', ''),
	(75, 'VARMOVIFITMTC11', '', 8, 16, '', 1, 'MTC11A000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7778704101.0017.19', NULL, 'MAC: 00-0F-69-33-00-D3', '/assets/articulos/1745405756250.jpg', '2025-04-23 10:55:56', ''),
	(77, 'VARMOVIFITMTC11', '', 8, 16, '', 1, 'MTC11A000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7778704101.001.19', NULL, 'MAC: 00-0F-69-33-00-5A', '/assets/articulos/1745406345432.jpg', '2025-04-23 11:05:45', ''),
	(78, 'VARMOVIDRIVEMDX61', '', 8, 17, '', 0, 'MDX61B005-8A3-4-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '08279616 S0# 25 7772841S01 000', NULL, NULL, '/assets/articulos/1745406654888.jpg', '2025-04-23 11:10:54', ''),
	(79, 'VARMOVIFITMTC11', '', 8, 16, '', 1, 'MTC11A000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7778704101.0014.19', NULL, 'MAC: 00-0F-69-33-00-49', '/assets/articulos/1745406922598.jpg', '2025-04-23 11:15:22', ''),
	(80, 'VARMOVIFITMTC11', '', 8, 16, '', 1, 'MTC11A000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7778704101.0005.19', NULL, NULL, '/assets/articulos/1745407111441.jpg', '2025-04-23 11:18:31', ''),
	(81, 'VARMOVIFITMTF11', '', 8, 16, '', 0, 'MTF11A007-503-E31A-20/S12B', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7792011207.0003.19', NULL, NULL, '/assets/articulos/1745407714423.jpg', '2025-04-23 11:28:34', ''),
	(82, 'VARMOVIFITMTC11', '', 8, 16, '', 1, 'MTC11A000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7778704101.0010.19', NULL, NULL, '/assets/articulos/1745408567175.jpg', '2025-04-23 11:42:47', ''),
	(83, 'VARMOVIFITMTC11', '', 8, 16, '', 1, 'MTF11A007-503-E31A-20/S12B', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7792011207.0002.19', NULL, NULL, '/assets/articulos/1745408859959.jpg', '2025-04-23 11:47:39', ''),
	(84, 'VARMOVIFITMTC11', '', 8, 16, '', 1, 'MTC11A000-503-R95000-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7778.704101.0011.19', NULL, NULL, '/assets/articulos/1745408974623.jpg', '2025-04-23 11:49:34', ''),
	(85, 'VARMOVIFITMTC11', '', 8, 16, '', 1, 'MTC11A000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7778704101.0011.19', NULL, NULL, '/assets/articulos/1745409239397.jpg', '2025-04-23 11:53:59', ''),
	(86, 'VARMOVIFITMTC11', '', 8, 16, '', 1, 'MTC11A000-503-R9500-00', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '01.7778704101.0024.19', NULL, NULL, '/assets/articulos/1745409379109.jpg', '2025-04-23 11:56:19', '');

-- Volcando estructura para tabla inventario.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `idCategory` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `descrip` text DEFAULT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.categories: ~3 rows (aproximadamente)
INSERT INTO `categories` (`idCategory`, `name`, `descrip`) VALUES
	(1, 'Electronics', 'Devices and gadgets'),
	(6, 'MOTO-REDUCTORES ', 'Conjunto de motor eléctrico y reductora mecánica '),
	(7, 'BARRERAS SICK', 'BARRERAS SICK'),
	(8, 'VARIADORES', 'VARIADORES');

-- Volcando estructura para tabla inventario.departamentos
CREATE TABLE IF NOT EXISTS `departamentos` (
  `idDepartamento` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) NOT NULL,
  `descrip` varchar(50) NOT NULL,
  PRIMARY KEY (`idDepartamento`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.departamentos: ~3 rows (aproximadamente)
INSERT INTO `departamentos` (`idDepartamento`, `nombre`, `descrip`) VALUES
	(1, 'Electrico', 'Electrico'),
	(2, 'Ingieneria', 'Ingieneria'),
	(3, 'Mecanica', 'Mecanica');

-- Volcando estructura para tabla inventario.proyectos
CREATE TABLE IF NOT EXISTS `proyectos` (
  `idProyecto` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `descrip` int(11) NOT NULL,
  `cliente` varchar(25) DEFAULT NULL,
  `estado` varchar(25) NOT NULL,
  `fechaCreacion` int(11) NOT NULL,
  PRIMARY KEY (`idProyecto`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.proyectos: ~0 rows (aproximadamente)

-- Volcando estructura para tabla inventario.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `idRol` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) NOT NULL,
  `descrip` varchar(50) NOT NULL,
  PRIMARY KEY (`idRol`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.roles: ~2 rows (aproximadamente)
INSERT INTO `roles` (`idRol`, `nombre`, `descrip`) VALUES
	(1, 'Administrador', 'Electricista'),
	(2, 'Usuario', 'Generico');

-- Volcando estructura para tabla inventario.types
CREATE TABLE IF NOT EXISTS `types` (
  `idType` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `descrip` text DEFAULT NULL,
  `idCategory` int(11) NOT NULL,
  PRIMARY KEY (`idType`),
  KEY `fk_types_categories` (`idCategory`),
  CONSTRAINT `fk_types_categories` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.types: ~6 rows (aproximadamente)
INSERT INTO `types` (`idType`, `name`, `descrip`, `idCategory`) VALUES
	(1, 'Smartphones', 'Mobile phones and accessories', 1),
	(14, 'MOTO-REDUCTORES	', 'MOTO-REDUCTORES	', 6),
	(15, 'SICK', 'SICK', 7),
	(16, 'MOVIFITS', 'MOVIFITS', 8),
	(17, 'MOVIDRIVE', 'MOVIDRIVE', 8),
	(18, 'MOVIPRO', 'MOVIPRO', 8);

-- Volcando estructura para tabla inventario.ubicaciones
CREATE TABLE IF NOT EXISTS `ubicaciones` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `codigoUbicacion` varchar(10) DEFAULT NULL,
  `descrip` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.ubicaciones: ~2 rows (aproximadamente)
INSERT INTO `ubicaciones` (`id`, `codigoUbicacion`, `descrip`) VALUES
	(1, 'FCV53', 'Atico B'),
	(2, '342', 'sdasd');

-- Volcando estructura para tabla inventario.usuarios
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(25) DEFAULT NULL,
  `apellidos` varchar(25) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `contrasenya` varchar(100) NOT NULL,
  `idRol` int(11) NOT NULL,
  `idDepartamento` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.usuarios: ~2 rows (aproximadamente)
INSERT INTO `usuarios` (`id`, `nombre`, `apellidos`, `email`, `contrasenya`, `idRol`, `idDepartamento`) VALUES
	(17, 'estanis', 'estanis', 'estanis', '$2b$10$BVzG0aistDv1dB8mcqFr2uARnnKl0zgYIYS87M.Dc07qtE3FDlXe2', 1, 1),
	(26, 'esalku', 'esalku', 'esalku@gmail.com', '$2b$10$jr5c1ann2P3o2FALepjORukTODNCWY.CkqJ5Yy7H5DJhCqGAJ0f8G', 0, 2),
	(28, 'Andres', 'Rubio', 'andres.rubio@foriauto.eu', '$2b$10$zqhTBB0MKs5sRerjPpyElu/OyB7pA7Ou1NCXIzlEfPp6jqi5.iW5q', 1, 2);

-- Volcando estructura para tabla inventario.viewmovements
CREATE TABLE IF NOT EXISTS `viewmovements` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `idArticle` int(11) DEFAULT NULL,
  `din` varchar(255) DEFAULT NULL,
  `entryDate` datetime DEFAULT NULL,
  `consumptionDate` datetime DEFAULT NULL,
  `removedBy` varchar(255) DEFAULT NULL,
  `quantityRemoved` int(11) DEFAULT NULL,
  `material` varchar(255) DEFAULT NULL,
  `characteristics` text DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `reserved` int(11) DEFAULT NULL,
  `quantityToOrder` int(11) DEFAULT NULL,
  `extraRequest` text DEFAULT NULL,
  `quantityEntry` int(12) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idArticle` (`idArticle`),
  CONSTRAINT `fk_article_movements` FOREIGN KEY (`idArticle`) REFERENCES `articles` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `viewmovements_ibfk_1` FOREIGN KEY (`idArticle`) REFERENCES `articles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=123 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Volcando datos para la tabla inventario.viewmovements: ~49 rows (aproximadamente)
INSERT INTO `viewmovements` (`id`, `idArticle`, `din`, `entryDate`, `consumptionDate`, `removedBy`, `quantityRemoved`, `material`, `characteristics`, `model`, `stock`, `location`, `reserved`, `quantityToOrder`, `extraRequest`, `quantityEntry`) VALUES
	(65, 31, NULL, '2025-04-22 13:11:20', NULL, NULL, NULL, 'No especificado', NULL, 'K87DRN112M4/BE5HR/ISU/TF/EI7C', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(66, 32, NULL, '2025-04-22 13:14:00', NULL, NULL, NULL, 'No especificado', NULL, 'K87 DRN132S4/BE11HR/ABB8/TF/AS7W', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(68, 34, NULL, '2025-04-22 13:29:57', NULL, NULL, NULL, 'No especificado', NULL, 'HK37 DRN71M4/BE05HR/IS/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(69, 35, NULL, '2025-04-22 13:31:14', NULL, NULL, NULL, 'No especificado', NULL, 'HK37DRN71M4//BE05HR/IS/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(70, 37, NULL, '2025-04-22 13:32:52', NULL, NULL, NULL, 'No especificado', NULL, 'KH97 DRN13234/BE11HR/ABB8/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(71, 38, NULL, '2025-04-22 13:34:11', NULL, NULL, NULL, 'No especificado', NULL, 'HK37 DRN71M4/BE05HR/IS/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(72, 39, NULL, '2025-04-22 13:40:29', NULL, NULL, NULL, 'No especificado', NULL, 'KH37DRS71S4BE05HR/ISU/TF/LN', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(73, 40, NULL, '2025-04-22 13:43:17', NULL, NULL, NULL, 'No especificado', NULL, 'HK37 DRN71M4/BE05HR/IS/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(74, 41, NULL, '2025-04-22 13:44:41', NULL, NULL, NULL, 'No especificado', NULL, 'HK37 DRN71M4/BE05HR/IS/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(75, 42, NULL, '2025-04-22 13:45:53', NULL, NULL, NULL, 'No especificado', NULL, 'HK37 DRN71M4/BE05HR/IS/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(77, 44, NULL, '2025-04-22 13:48:17', NULL, NULL, NULL, 'No especificado', NULL, 'HK37 DRS80S3/2BE05HB/IS/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(78, 45, NULL, '2025-04-22 13:49:17', NULL, NULL, NULL, 'No especificado', NULL, 'HK37 DRS80S3/2BE05HR/IS/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(79, 46, NULL, '2025-04-22 13:50:23', NULL, NULL, NULL, 'No especificado', NULL, 'HK37DRN71M4/BE05HR/IS/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(80, 47, NULL, '2025-04-22 13:51:31', NULL, NULL, NULL, 'No especificado', NULL, 'RX67 DRN90L4/BE2HR/IS/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(81, 48, NULL, '2025-04-22 14:23:21', NULL, NULL, NULL, 'No especificado', NULL, 'K77 DRN100L4/BE5HR/ISU/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(82, 49, NULL, '2025-04-22 14:25:11', NULL, NULL, NULL, 'No especificado', NULL, 'RX67 DRN90L4/BE2HR/IS/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(83, 50, NULL, '2025-04-22 14:26:45', NULL, NULL, NULL, 'No especificado', NULL, 'KH37 DRS71S4BE05HR/ISU/TF/LN', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(84, 51, NULL, '2025-04-22 14:28:11', NULL, NULL, NULL, 'No especificado', NULL, 'HK37 DRN71M4/BE05HR/IS/TF/Z', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(85, 52, NULL, '2025-04-22 14:29:26', NULL, NULL, NULL, 'No especificado', NULL, 'KH37 DRS71S4BE05HR/ISU/TF/LN', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(86, 53, NULL, '2025-04-22 14:30:25', NULL, NULL, NULL, 'No especificado', NULL, 'RX67 DRN90L4/BE2HR/IS/TF', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(87, 54, NULL, '2025-04-22 14:31:36', NULL, NULL, NULL, 'No especificado', NULL, 'KF57 DRS71M4BE1HR/ISU/TF/EI7C', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(88, 55, NULL, '2025-04-22 14:33:09', NULL, NULL, NULL, 'No especificado', NULL, 'WAF37 DRC1-005-SNI-A-ECR/IV/A', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(89, 56, NULL, '2025-04-22 14:35:05', NULL, NULL, NULL, 'No especificado', NULL, 'KF57 DRS71M4BE1HR/ISU/TF/EI7C', 1, 'Sin ubicación', NULL, NULL, NULL, 1),
	(95, 59, NULL, '2025-04-23 11:50:19', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(96, 60, NULL, '2025-04-23 11:56:35', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(97, 61, NULL, '2025-04-23 12:03:12', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(98, 62, NULL, '2025-04-23 12:06:03', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(99, 63, NULL, '2025-04-23 12:08:36', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(100, 64, NULL, '2025-04-23 12:13:59', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(101, 65, NULL, '2025-04-23 12:15:39', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(102, 66, NULL, '2025-04-23 12:18:17', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(104, 68, NULL, '2025-04-23 12:27:07', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(105, 69, NULL, '2025-04-23 12:35:29', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(106, 70, NULL, '2025-04-23 12:38:31', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(107, 71, NULL, '2025-04-23 12:42:27', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(108, 72, NULL, '2025-04-23 12:45:20', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(109, 73, NULL, '2025-04-23 12:48:58', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(110, 74, NULL, '2025-04-23 12:53:18', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(111, 75, NULL, '2025-04-23 12:55:56', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(113, 77, NULL, '2025-04-23 13:05:45', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(114, 78, NULL, '2025-04-23 13:10:54', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(115, 79, NULL, '2025-04-23 13:15:22', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(116, 80, NULL, '2025-04-23 13:18:31', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(117, 81, NULL, '2025-04-23 13:28:34', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(118, 82, NULL, '2025-04-23 13:42:47', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(119, 83, NULL, '2025-04-23 13:47:39', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(120, 84, NULL, '2025-04-23 13:49:34', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(121, 85, NULL, '2025-04-23 13:53:59', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL),
	(122, 86, NULL, '2025-04-23 13:56:19', NULL, NULL, NULL, 'No especificado', NULL, 'Desconocido', NULL, 'Sin ubicación', NULL, NULL, NULL, NULL);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
