-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-07-2020 a las 00:37:52
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `refrigodb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombreCategoria` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombreCategoria`) VALUES
(1, 'Aires Acondicionados'),
(2, 'Heladeras'),
(3, 'Lavarropas'),
(4, 'Herramientas'),
(5, 'Combos');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `items`
--

CREATE TABLE `items` (
  `id` int(11) NOT NULL,
  `nombre` varchar(200) DEFAULT NULL,
  `precio` int(11) NOT NULL,
  `imgUrl` varchar(200) NOT NULL,
  `categoriaId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `items`
--

INSERT INTO `items` (`id`, `nombre`, `precio`, `imgUrl`, `categoriaId`) VALUES
(1, 'Aire acondicionado Philco split frío 5500 frigorías blanco PHS60C18N', 19542, 'https://claboutique.com/images/detailed/286/PanasonicFZ-UKE-01.jpg', 1),
(2, 'Heladera skin condenser standard electric ste2f1600pd plata', 21542, 'https://www.tiomusa.com.ar/imagenes/archivos/2019-09/140-23753-heladerapatrickhpk135blanca-12.jpg', 2),
(3, 'Lavarropas automático Aurora Lavaurora 6506 blanco/negro 6kg 220V', 16577, 'https://electroluxar.vteximg.com.br/arquivos/ids/156325-1000-1000/elaf8.jpg?v=636754715606270000', 3),
(4, 'Heladera skin + Lavarropas automático Aurora 6506', 18745, 'https://static.mercadoshops.com/combo-inverter-heladera-no-frost-lavarropas-ge-appliances_iZ1051803332XvZgrandeXpZ1XfZ222983189-769121671-1XsZ222983189xIM.jpg', 5),
(5, 'Kit Herramientas Refrigeracion 4 Bomba Vacio 60 Dosivac', 35999, 'https://mla-s2-p.mlstatic.com/757897-MLA32615160020_102019-F.jpg', 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `item_dfgr_1` (`categoriaId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `items`
--
ALTER TABLE `items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `items`
--
ALTER TABLE `items`
  ADD CONSTRAINT `item_dfgr_1` FOREIGN KEY (`categoriaId`) REFERENCES `categorias` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
