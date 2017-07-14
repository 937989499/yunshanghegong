-- phpMyAdmin SQL Dump
-- version 4.6.6
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: 2017-07-13 01:26:07
-- 服务器版本： 5.7.17-log
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hgc_romes`
--

-- --------------------------------------------------------

--
-- 表的结构 `hgc_check`
--

CREATE TABLE `hgc_check` (
  `id` int(50) NOT NULL COMMENT '检查项编号',
  `Name` varchar(100) DEFAULT NULL COMMENT '检查项名称',
  `H_Type` int(10) NOT NULL DEFAULT '1' COMMENT '1：宿舍；2：教室',
  `HomeCheck` int(10) NOT NULL DEFAULT '1' COMMENT '1：卫生问题；2：安全问题'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hgc_check`
--

INSERT INTO `hgc_check` (`id`, `Name`, `H_Type`, `HomeCheck`) VALUES
(19, '电源', 1, 2),
(20, '电扇', 1, 2),
(21, '多媒体', 1, 1),
(23, '窗户', 2, 1),
(26, '灭火器', 1, 1),
(28, '电灯', 2, 2),
(36, '床单', 1, 1),
(37, '被褥', 1, 1);

-- --------------------------------------------------------

--
-- 表的结构 `hgc_checkcong`
--

CREATE TABLE `hgc_checkcong` (
  `id` int(50) NOT NULL COMMENT '检查记录从表编号',
  `Cm_Id` int(50) NOT NULL COMMENT '检查记录主表编号',
  `C_Id` int(50) NOT NULL COMMENT '检查项编号',
  `CheckStyle` int(10) NOT NULL DEFAULT '1' COMMENT '1:优；3:差',
  `ImgUrl` varchar(300) DEFAULT NULL COMMENT '照片路径'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hgc_checkcong`
--

INSERT INTO `hgc_checkcong` (`id`, `Cm_Id`, `C_Id`, `CheckStyle`, `ImgUrl`) VALUES
(1, 8, 20, 1, ''),
(2, 8, 20, 3, ''),
(3, 8, 20, 1, NULL);

-- --------------------------------------------------------

--
-- 表的结构 `hgc_checkmind`
--

CREATE TABLE `hgc_checkmind` (
  `id` int(50) NOT NULL COMMENT '检查记录主表编号',
  `P_Id` int(50) NOT NULL COMMENT '检查人员编号',
  `H_Id` int(50) NOT NULL COMMENT '检查房间编号',
  `CheckDate` date DEFAULT NULL COMMENT '检查日期',
  `CheckStyle` int(10) NOT NULL DEFAULT '1' COMMENT '1:优；3:差'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hgc_checkmind`
--

INSERT INTO `hgc_checkmind` (`id`, `P_Id`, `H_Id`, `CheckDate`, `CheckStyle`) VALUES
(2, 1, 4, '2017-06-07', 3),
(8, 3, 3, '2017-06-08', 1),
(9, 1, 4, '2017-06-12', 1),
(10, 3, 4, '2017-06-13', 3),
(11, 1, 4, '2017-06-15', 1),
(12, 2, 4, '2017-06-16', 3),
(13, 1, 3, '2017-06-16', 1),
(14, 2, 4, '2017-06-05', 3);

-- --------------------------------------------------------

--
-- 表的结构 `hgc_fudao`
--

CREATE TABLE `hgc_fudao` (
  `id` int(50) NOT NULL COMMENT '辅导员编号',
  `UserName` varchar(60) DEFAULT NULL COMMENT '用户名',
  `TrueName` varchar(60) DEFAULT NULL COMMENT '真实姓名',
  `O_Id` int(50) NOT NULL COMMENT '组织架构编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hgc_fudao`
--

INSERT INTO `hgc_fudao` (`id`, `UserName`, `TrueName`, `O_Id`) VALUES
(1, '方法', '方法', 7),
(2, '得到', '刘德华', 7);

-- --------------------------------------------------------

--
-- 表的结构 `hgc_home`
--

CREATE TABLE `hgc_home` (
  `id` int(50) NOT NULL COMMENT '编号',
  `LouId` varchar(200) DEFAULT NULL COMMENT '楼号',
  `HId` varchar(200) DEFAULT NULL COMMENT '房间号',
  `HType` int(10) DEFAULT '1' COMMENT '1:宿舍；2:教室',
  `O_Id` int(50) NOT NULL COMMENT '组织架构编号',
  `Fd_Id` int(50) NOT NULL COMMENT '辅导员编号',
  `Sch_Id` int(10) DEFAULT NULL COMMENT '学院编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hgc_home`
--

INSERT INTO `hgc_home` (`id`, `LouId`, `HId`, `HType`, `O_Id`, `Fd_Id`, `Sch_Id`) VALUES
(3, '2', '101', 1, 5, 1, 1),
(4, '2', '201', 1, 5, 2, 1),
(6, '1', '101', 2, 5, 2, 6),
(8, '1', '102', 1, 2, 2, 6);

-- --------------------------------------------------------

--
-- 表的结构 `hgc_mokuai`
--

CREATE TABLE `hgc_mokuai` (
  `id` int(50) NOT NULL COMMENT '模块编号',
  `Name` varchar(255) NOT NULL COMMENT '模块名称',
  `state` varchar(50) NOT NULL DEFAULT '' COMMENT '导航状态',
  `Type` int(50) DEFAULT NULL COMMENT '类型 1:菜单 2:按钮',
  `Url` varchar(300) DEFAULT NULL COMMENT '菜单页面路径',
  `IconCls` varchar(300) DEFAULT NULL COMMENT '菜单图标',
  `btnAdd` varchar(200) DEFAULT NULL COMMENT '按钮标识',
  `PId` int(50) NOT NULL COMMENT '排序编号',
  `FId` int(50) NOT NULL COMMENT '父模块编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hgc_mokuai`
--

INSERT INTO `hgc_mokuai` (`id`, `Name`, `state`, `Type`, `Url`, `IconCls`, `btnAdd`, `PId`, `FId`) VALUES
(3, '模块管理', 'open', 1, 'mokuai/mokuai', NULL, '0', 0, 0),
(4, '角色管理', 'open', 1, 'users/users/users', NULL, '0', 0, 0),
(5, '人员管理', 'open', 1, 'manager/manager', NULL, '0', 0, 0),
(6, '统计分析管理', 'open', 1, 'check/checkmind/checkmind', NULL, '0', 0, 0),
(12, '辅导员管理', 'open', 1, 'fudao/fudao', NULL, '0', 0, 0),
(13, '检查项管理', 'open', 1, 'check/check/check', NULL, '0', 0, 0),
(14, '房间管理', 'open', 1, 'home/home', NULL, '0', 0, 0),
(15, '组织架构管理', 'open', 1, 'zuzhi/zuzhi', NULL, '0', 0, 0),
(16, '添加模块', '', 2, NULL, NULL, 'btnAdd', 0, 3),
(17, '修改模块', '', 2, NULL, NULL, 'btnAdd', 0, 3),
(18, '删除模块', '', 2, NULL, NULL, 'btnAdd', 0, 3),
(19, '添加角色', '', 2, NULL, NULL, 'btnAdd', 0, 4),
(20, '修改角色', '', 2, NULL, NULL, 'btnAdd', 0, 4),
(21, '删除角色', '', 2, NULL, NULL, 'btnAdd', 0, 4),
(22, '设置权限', '', 2, NULL, NULL, 'btnAdd', 0, 4),
(23, '添加人员', '', 2, NULL, NULL, 'btnAdd', 0, 5),
(24, '修改人员', '', 2, NULL, NULL, 'btnAdd', 0, 5),
(25, '删除人员', '', 2, NULL, NULL, 'btnAdd', 0, 5),
(26, '添加辅导员', '', 2, NULL, NULL, 'btnAdd', 0, 12),
(27, '修改辅导员', '', 2, NULL, NULL, 'btnAdd', 0, 12),
(28, '删除辅导员', '', 2, NULL, NULL, 'btnAdd', 0, 12),
(29, '添加检查项', '', 2, NULL, NULL, 'btnAdd', 0, 13),
(30, '修改检查项', '', 2, NULL, NULL, 'btnAdd', 0, 13),
(31, '删除检查项', '', 2, NULL, NULL, 'btnAdd', 0, 13),
(32, '添加房间', '', 2, NULL, NULL, 'btnAdd', 0, 14),
(33, '修改房间', '', 2, NULL, NULL, 'btnAdd', 0, 14),
(34, '删除房间', '', 2, NULL, NULL, 'btnAdd', 0, 14),
(35, '添加组织架构', '', 2, NULL, NULL, 'btnAdd', 0, 15),
(36, '修改组织架构', '', 2, NULL, NULL, 'btnAdd', 0, 15),
(37, '删除组织架构', '', 2, NULL, NULL, 'btnAdd', 0, 15);

-- --------------------------------------------------------

--
-- 表的结构 `hgc_organizational`
--

CREATE TABLE `hgc_organizational` (
  `id` int(50) NOT NULL COMMENT '组织架构编号',
  `Name` varchar(255) DEFAULT NULL COMMENT '组织架构名称',
  `FId` int(255) NOT NULL COMMENT '组织架构父编号',
  `Url` varchar(300) NOT NULL COMMENT '路径',
  `state` varchar(300) NOT NULL,
  `Type` int(10) NOT NULL COMMENT '1:学院  2:班级'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hgc_organizational`
--

INSERT INTO `hgc_organizational` (`id`, `Name`, `FId`, `Url`, `state`, `Type`) VALUES
(1, '河工', 0, '', 'closed', 1),
(2, '信息系', 1, '', 'open', 1),
(3, '建筑系', 1, '', 'open', 1),
(4, '人员管理', 1, '', 'closed', 2),
(5, '房间管理', 0, '', 'open', 2),
(6, '检查项管理', 2, '', 'open', 2),
(7, '辅导员管理', 0, '', 'open', 2);

-- --------------------------------------------------------

--
-- 表的结构 `hgc_person`
--

CREATE TABLE `hgc_person` (
  `id` int(50) NOT NULL COMMENT '人员编号',
  `UserName` varchar(60) DEFAULT NULL COMMENT '用户名',
  `Password` varchar(80) DEFAULT NULL COMMENT '密码',
  `TrueName` varchar(60) DEFAULT NULL COMMENT '真实姓名',
  `O_Id` int(50) NOT NULL COMMENT '组织架构编号',
  `U_Id` int(50) NOT NULL COMMENT '角色编号',
  `CanCheck` varchar(200) DEFAULT NULL COMMENT '可检查房间',
  `auth` varchar(20) NOT NULL DEFAULT '启用' COMMENT '权限'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hgc_person`
--

INSERT INTO `hgc_person` (`id`, `UserName`, `Password`, `TrueName`, `O_Id`, `U_Id`, `CanCheck`, `auth`) VALUES
(1, 'root', '123456', '超级管理员', 1, 1, '101', '1'),
(2, 'admin', '123456', '管理员', 1, 4, NULL, '1');

-- --------------------------------------------------------

--
-- 表的结构 `hgc_usermokuai`
--

CREATE TABLE `hgc_usermokuai` (
  `id` int(50) NOT NULL COMMENT '角色模块编号',
  `U_Id` int(50) NOT NULL COMMENT '角色编号',
  `M_Id` int(50) NOT NULL COMMENT '模块编号'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hgc_usermokuai`
--

INSERT INTO `hgc_usermokuai` (`id`, `U_Id`, `M_Id`) VALUES
(269, 1, 3),
(270, 1, 4),
(271, 1, 5),
(272, 1, 6),
(273, 1, 12),
(274, 1, 13),
(275, 1, 14),
(276, 1, 15),
(277, 1, 16),
(278, 1, 17),
(279, 1, 18),
(280, 1, 19),
(281, 1, 20),
(282, 1, 21),
(283, 1, 22),
(284, 1, 23),
(285, 1, 24),
(286, 1, 25),
(287, 1, 26),
(288, 1, 27),
(289, 1, 28),
(290, 1, 29),
(291, 1, 30),
(292, 1, 31),
(293, 1, 32),
(294, 1, 33),
(295, 1, 34),
(296, 1, 35),
(297, 1, 36),
(298, 1, 37),
(301, 4, 3),
(302, 4, 4);

-- --------------------------------------------------------

--
-- 表的结构 `hgc_users`
--

CREATE TABLE `hgc_users` (
  `id` int(50) NOT NULL COMMENT '角色编号',
  `Name` varchar(200) DEFAULT NULL COMMENT '角色名称'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `hgc_users`
--

INSERT INTO `hgc_users` (`id`, `Name`) VALUES
(1, '超级管理员'),
(4, '管理员');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hgc_check`
--
ALTER TABLE `hgc_check`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Htype` (`H_Type`);

--
-- Indexes for table `hgc_checkcong`
--
ALTER TABLE `hgc_checkcong`
  ADD PRIMARY KEY (`id`),
  ADD KEY `checkmindid` (`Cm_Id`),
  ADD KEY `checkid` (`C_Id`),
  ADD KEY `checkstyle` (`CheckStyle`);

--
-- Indexes for table `hgc_checkmind`
--
ALTER TABLE `hgc_checkmind`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CheckStyle` (`CheckStyle`),
  ADD KEY `personid` (`P_Id`),
  ADD KEY `homeid` (`H_Id`);

--
-- Indexes for table `hgc_fudao`
--
ALTER TABLE `hgc_fudao`
  ADD PRIMARY KEY (`id`),
  ADD KEY `OId` (`O_Id`);

--
-- Indexes for table `hgc_home`
--
ALTER TABLE `hgc_home`
  ADD PRIMARY KEY (`id`),
  ADD KEY `O_Id` (`O_Id`),
  ADD KEY `Fd_Id` (`Fd_Id`),
  ADD KEY `LouId` (`LouId`),
  ADD KEY `HId` (`HId`),
  ADD KEY `schid` (`Sch_Id`) USING BTREE;

--
-- Indexes for table `hgc_mokuai`
--
ALTER TABLE `hgc_mokuai`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hgc_organizational`
--
ALTER TABLE `hgc_organizational`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `hgc_person`
--
ALTER TABLE `hgc_person`
  ADD PRIMARY KEY (`id`),
  ADD KEY `-Userid` (`U_Id`),
  ADD KEY `-Organizationalid` (`O_Id`),
  ADD KEY `CanCheck` (`CanCheck`);

--
-- Indexes for table `hgc_usermokuai`
--
ALTER TABLE `hgc_usermokuai`
  ADD PRIMARY KEY (`id`),
  ADD KEY `UserId` (`U_Id`),
  ADD KEY `MokuaiId` (`M_Id`);

--
-- Indexes for table `hgc_users`
--
ALTER TABLE `hgc_users`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `hgc_check`
--
ALTER TABLE `hgc_check`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '检查项编号', AUTO_INCREMENT=38;
--
-- 使用表AUTO_INCREMENT `hgc_checkcong`
--
ALTER TABLE `hgc_checkcong`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '检查记录从表编号', AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `hgc_checkmind`
--
ALTER TABLE `hgc_checkmind`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '检查记录主表编号', AUTO_INCREMENT=15;
--
-- 使用表AUTO_INCREMENT `hgc_fudao`
--
ALTER TABLE `hgc_fudao`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '辅导员编号', AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `hgc_home`
--
ALTER TABLE `hgc_home`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '编号', AUTO_INCREMENT=9;
--
-- 使用表AUTO_INCREMENT `hgc_mokuai`
--
ALTER TABLE `hgc_mokuai`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '模块编号', AUTO_INCREMENT=38;
--
-- 使用表AUTO_INCREMENT `hgc_organizational`
--
ALTER TABLE `hgc_organizational`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '组织架构编号', AUTO_INCREMENT=8;
--
-- 使用表AUTO_INCREMENT `hgc_person`
--
ALTER TABLE `hgc_person`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '人员编号', AUTO_INCREMENT=3;
--
-- 使用表AUTO_INCREMENT `hgc_usermokuai`
--
ALTER TABLE `hgc_usermokuai`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '角色模块编号', AUTO_INCREMENT=303;
--
-- 使用表AUTO_INCREMENT `hgc_users`
--
ALTER TABLE `hgc_users`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT COMMENT '角色编号', AUTO_INCREMENT=5;
--
-- 限制导出的表
--

--
-- 限制表 `hgc_checkcong`
--
ALTER TABLE `hgc_checkcong`
  ADD CONSTRAINT `checkid` FOREIGN KEY (`C_Id`) REFERENCES `hgc_check` (`id`),
  ADD CONSTRAINT `checkmindid` FOREIGN KEY (`Cm_Id`) REFERENCES `hgc_checkmind` (`id`),
  ADD CONSTRAINT `checkstyle` FOREIGN KEY (`CheckStyle`) REFERENCES `hgc_checkmind` (`CheckStyle`);

--
-- 限制表 `hgc_fudao`
--
ALTER TABLE `hgc_fudao`
  ADD CONSTRAINT `OId` FOREIGN KEY (`O_Id`) REFERENCES `hgc_organizational` (`id`);

--
-- 限制表 `hgc_home`
--
ALTER TABLE `hgc_home`
  ADD CONSTRAINT `--fdid` FOREIGN KEY (`Fd_Id`) REFERENCES `hgc_fudao` (`id`),
  ADD CONSTRAINT `--oid` FOREIGN KEY (`O_Id`) REFERENCES `hgc_organizational` (`id`),
  ADD CONSTRAINT `--schid` FOREIGN KEY (`Sch_Id`) REFERENCES `hgc_organizational` (`id`);

--
-- 限制表 `hgc_person`
--
ALTER TABLE `hgc_person`
  ADD CONSTRAINT `-Organizationalid` FOREIGN KEY (`O_Id`) REFERENCES `hgc_organizational` (`id`),
  ADD CONSTRAINT `-Userid` FOREIGN KEY (`U_Id`) REFERENCES `hgc_users` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
