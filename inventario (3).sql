-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-04-2025 a las 12:59:16
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inventario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articles`
--

CREATE TABLE `articles` (
  `id` int(11) NOT NULL,
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
  `numSerie` int(11) DEFAULT NULL,
  `marca` varchar(50) DEFAULT NULL,
  `detalles` varchar(255) DEFAULT NULL,
  `dateCreation` datetime DEFAULT current_timestamp(),
  `userCreation` varchar(255) DEFAULT 'Admin'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `articles`
--

INSERT INTO `articles` (`id`, `nombre`, `descrip`, `idCategoria`, `idTipo`, `idProyecto`, `stock`, `modelo`, `longitud`, `diametro`, `peso`, `altura`, `materiales`, `unidadMedida`, `condicion`, `color`, `numSerie`, `marca`, `detalles`, `dateCreation`, `userCreation`) VALUES
(14, 'ELESMAPK453', '', 1, 1, 'HHHD45', 13, NULL, 4, 4, 5, 43, NULL, 'METROS', 'NUEVO', NULL, NULL, 'TYSON', 'MUY BUENO EH', '2025-04-03 07:07:20', 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `idCategory` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `descrip` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`idCategory`, `name`, `descrip`) VALUES
(1, 'Electronics', 'Devices and gadgets'),
(2, 'Furniture', 'Home and office furniture'),
(3, 'Categoría por defecto', NULL),
(4, 'Tornilleria', 'Tornillos mu grandes mu grandes de todos los tipos y tamaños, mu guapos todos eh'),
(5, 'Tornilleria', '324');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `departamentos`
--

CREATE TABLE `departamentos` (
  `idDepartamento` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `descrip` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `departamentos`
--

INSERT INTO `departamentos` (`idDepartamento`, `nombre`, `descrip`) VALUES
(1, 'Electrico', 'Electrico'),
(2, 'Ingieneria', 'Ingieneria'),
(3, 'Mecanica', 'Mecanica');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proyectos`
--

CREATE TABLE `proyectos` (
  `idProyecto` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descrip` int(11) NOT NULL,
  `cliente` varchar(25) DEFAULT NULL,
  `estado` varchar(25) NOT NULL,
  `fechaCreacion` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `proyectos`
--

INSERT INTO `proyectos` (`idProyecto`, `nombre`, `descrip`, `cliente`, `estado`, `fechaCreacion`) VALUES
(1, 'Tornilleria', 432, 'yo', '', 0),
(2, 'Tornilleria', 0, '4', '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `idRol` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `descrip` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`idRol`, `nombre`, `descrip`) VALUES
(1, 'Administrador', 'Electricista'),
(2, 'Usuario', 'Generico');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `types`
--

CREATE TABLE `types` (
  `idType` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `descrip` text DEFAULT NULL,
  `idCategory` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `types`
--

INSERT INTO `types` (`idType`, `name`, `descrip`, `idCategory`) VALUES
(1, 'Smartphones', 'Mobile phones and accessories', 1),
(2, 'Chairs', 'Seating furniture', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicaciones`
--

CREATE TABLE `ubicaciones` (
  `id` int(11) NOT NULL,
  `codigoUbicacion` varchar(10) DEFAULT NULL,
  `descrip` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ubicaciones`
--

INSERT INTO `ubicaciones` (`id`, `codigoUbicacion`, `descrip`) VALUES
(1, 'FCV53', 'Atico B'),
(2, '342', 'sdasd');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(25) DEFAULT NULL,
  `apellidos` varchar(25) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `contrasenya` varchar(100) NOT NULL,
  `idRol` int(11) NOT NULL,
  `idDepartamento` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellidos`, `email`, `contrasenya`, `idRol`, `idDepartamento`) VALUES
(17, 'estanis', 'estanis', 'estanis', '$2b$10$BVzG0aistDv1dB8mcqFr2uARnnKl0zgYIYS87M.Dc07qtE3FDlXe2', 1, 1),
(26, 'esalku', 'esalku', 'esalku@gmail.com', '$2b$10$jr5c1ann2P3o2FALepjORukTODNCWY.CkqJ5Yy7H5DJhCqGAJ0f8G', 0, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `viewmovements`
--

CREATE TABLE `viewmovements` (
  `id` int(11) NOT NULL,
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
  `quantityEntry` int(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `viewmovements`
--

INSERT INTO `viewmovements` (`id`, `idArticle`, `din`, `entryDate`, `consumptionDate`, `removedBy`, `quantityRemoved`, `material`, `characteristics`, `model`, `stock`, `location`, `reserved`, `quantityToOrder`, `extraRequest`, `quantityEntry`) VALUES
(5, 14, '', '2025-04-04 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 43),
(6, 14, '', NULL, '2025-04-02 14:00:53', NULL, 123, '', '', '', 0, 'ALT4', 0, 0, '', 23),
(7, 14, '', NULL, '2025-04-01 14:01:25', NULL, 23, '', '', '', 0, 'ALT4', 0, 0, '', 2),
(8, 14, '', '2025-04-03 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 2),
(9, 14, '', '2025-04-03 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 2),
(10, 14, '', '2025-04-03 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 2),
(11, 14, '', '2025-04-02 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 12),
(12, 14, '', '2025-04-02 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 12),
(13, 14, '', '2025-04-02 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 12),
(14, 14, '', '2025-04-10 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 12),
(15, 14, '', '2025-04-04 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 12),
(16, 14, '', '2025-04-04 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 12),
(17, 14, '', '2025-04-02 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 23),
(18, 14, '', '2025-04-03 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 23),
(19, 14, '', '2025-04-02 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 234),
(20, 14, '', '2025-04-02 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 888),
(21, 14, '', '2025-04-02 00:00:00', NULL, NULL, NULL, '', '', '', 0, '2342', 0, 0, '', 656),
(22, 14, '', '2025-04-03 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 777),
(23, 14, '', '2025-04-04 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 666),
(24, 14, '', '2025-04-04 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 45),
(25, 14, '', '2025-04-10 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 7),
(26, 14, '', '2025-04-03 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 88),
(27, 14, '', '2025-04-17 00:00:00', NULL, NULL, NULL, '', '', '', 0, '54', 0, 0, '', 6),
(28, 14, '', '2025-04-02 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 555),
(29, 14, '', '2025-04-04 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 44),
(30, 14, '', '2025-04-04 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 43),
(32, 14, '', '2025-04-04 00:00:00', NULL, NULL, NULL, '', '', '', 0, 'ALT4', 0, 0, '', 2),
(33, 14, '', NULL, NULL, NULL, 50, '', '', '', 0, '', 0, 0, '', 0),
(34, 14, '', NULL, NULL, NULL, 50, '', '', '', 0, '', 0, 0, '', 0),
(35, 14, '', NULL, '2025-04-04 00:00:00', NULL, 50, '', '', '', 0, '', 0, 0, '', 0),
(36, 14, '', NULL, '2025-04-04 00:00:00', NULL, 50, '', '', '', 0, '', 0, 0, '', 0),
(37, 14, '', NULL, '2025-04-04 06:42:38', NULL, 50, '', '', '', 0, '', 0, 0, '', 0),
(38, 14, '', NULL, '2025-04-04 06:48:36', NULL, 50, '', '', '', 0, '', 0, 0, '', 0),
(39, 14, '', NULL, '2025-04-04 06:48:49', NULL, 50, '', '', '', 0, '', 0, 0, '', 0),
(40, 14, '', NULL, '2025-04-04 06:48:58', NULL, 33, '', '', '', 0, '', 0, 0, '', 0),
(41, 14, '', NULL, '2025-04-04 06:52:08', NULL, 33, '', '', '', 0, '', 0, 0, '', 0),
(42, 14, '', NULL, '2025-04-04 06:53:24', NULL, 33, '', '', '', 0, '', 0, 0, '', 0),
(43, 14, '', NULL, '2025-04-04 07:02:12', 'estanis', 30, '', '', '', 0, '', 0, 0, '', 0),
(44, 14, '', NULL, '2025-04-04 07:28:55', 'estanis', 54, '', '', '', -17, '', 0, 0, '', 0),
(45, 14, '', '2025-04-04 00:00:00', '2025-04-04 00:00:00', NULL, 0, '', '', '', 0, 'ALT4', 0, 0, '', 35),
(46, 14, '', '2025-04-04 00:00:00', NULL, NULL, 0, '', '', '', 0, 'ALT4', 0, 0, '', 20),
(47, 14, '', '2025-04-04 00:00:00', NULL, NULL, 0, '', '', '', 0, 'ALT4', 0, 0, '', 2),
(48, 14, '', NULL, '2025-04-04 08:03:40', 'estanis', 4, '', '', '', 36, 'ALT4', 0, 0, '', 0),
(49, 14, '', '2025-04-04 00:00:00', NULL, NULL, 0, '', '', '', 0, 'ALT4', 0, 0, '', 1),
(50, 14, '', NULL, '2025-04-04 08:06:04', 'estanis', 2, '', '', '', 35, 'ALT4', 0, 0, '', 0),
(51, 14, '', '2025-04-04 00:00:00', NULL, NULL, 0, '', '', '', 0, 'ALT4', 0, 0, '', 2),
(52, 14, '', '2025-04-04 00:00:00', NULL, NULL, 0, '', '', '', 0, 'ALT4', 0, 0, '', 6),
(53, 14, '', NULL, '2025-04-04 10:19:48', 'estanis', 13, '', '', '', 30, 'ALT4', 0, 0, '', 0),
(54, 14, '', NULL, '2025-04-04 10:20:51', 'estanis', 2, '', '', '', 28, 'ALT4', 0, 0, '', 0),
(55, 14, '', '2025-04-04 00:00:00', NULL, NULL, 0, '', '', '', 0, 'ALT4', 0, 0, '', 4),
(56, 14, '', '2025-04-04 10:23:18', NULL, NULL, 0, '', '', '', 0, 'ALT4', 0, 0, '', 1),
(57, 14, '', '2025-04-04 10:27:01', NULL, NULL, 0, '', '', '', 0, 'ALT4', 0, 0, '', 4),
(58, 14, '', '2025-04-04 10:29:23', NULL, NULL, 0, '', '', '', 0, 'ALT4', 0, 0, '', 1),
(59, 14, '', '2025-04-04 10:31:20', NULL, NULL, 0, '', '', '', 0, 'ALT4', 0, 0, '', 2),
(60, 14, '', '2025-04-04 10:31:54', NULL, NULL, 0, '', '', '', 0, 'ALT4', 0, 0, '', 3),
(61, 14, '', '2025-04-04 10:33:55', NULL, NULL, 0, '', '', '', 0, 'ALT4', 0, 0, '', 3),
(62, 14, '', NULL, '2025-04-04 10:34:08', 'estanis', 33, '', '', '', 13, 'ALT4', 0, 0, '', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idCategoria` (`idCategoria`),
  ADD KEY `fk_article_type` (`idTipo`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`idCategory`);

--
-- Indices de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`idDepartamento`);

--
-- Indices de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  ADD PRIMARY KEY (`idProyecto`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`idRol`);

--
-- Indices de la tabla `types`
--
ALTER TABLE `types`
  ADD PRIMARY KEY (`idType`),
  ADD KEY `fk_types_categories` (`idCategory`);

--
-- Indices de la tabla `ubicaciones`
--
ALTER TABLE `ubicaciones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `viewmovements`
--
ALTER TABLE `viewmovements`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idArticle` (`idArticle`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `idCategory` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `idDepartamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `proyectos`
--
ALTER TABLE `proyectos`
  MODIFY `idProyecto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `idRol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `types`
--
ALTER TABLE `types`
  MODIFY `idType` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `ubicaciones`
--
ALTER TABLE `ubicaciones`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `viewmovements`
--
ALTER TABLE `viewmovements`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `articles`
--
ALTER TABLE `articles`
  ADD CONSTRAINT `articles_ibfk_1` FOREIGN KEY (`idCategoria`) REFERENCES `categories` (`idCategory`),
  ADD CONSTRAINT `articles_ibfk_2` FOREIGN KEY (`idTipo`) REFERENCES `types` (`idType`),
  ADD CONSTRAINT `fk_article_type` FOREIGN KEY (`idTipo`) REFERENCES `types` (`idType`);

--
-- Filtros para la tabla `types`
--
ALTER TABLE `types`
  ADD CONSTRAINT `fk_types_categories` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`idCategory`);

--
-- Filtros para la tabla `viewmovements`
--
ALTER TABLE `viewmovements`
  ADD CONSTRAINT `fk_article_movements` FOREIGN KEY (`idArticle`) REFERENCES `articles` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `viewmovements_ibfk_1` FOREIGN KEY (`idArticle`) REFERENCES `articles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
