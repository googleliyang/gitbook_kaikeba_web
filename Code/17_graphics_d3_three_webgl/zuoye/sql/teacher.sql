-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2018 �?08 �?06 �?04:36
-- 服务器版本: 5.5.53
-- PHP 版本: 5.6.27

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `teacher`
--

CREATE TABLE IF NOT EXISTS `teacher` (
  `name` varchar(255) NOT NULL,
  `age` int(4) NOT NULL,
  `img` varchar(1023) NOT NULL,
  `hobbies` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=25 ;

--
-- 转存表中的数据 `teacher`
--

INSERT INTO `teacher` (`name`, `age`, `img`, `hobbies`, `id`) VALUES
('曹操', 20, 'upload/caocao.jpg', '读书练字写文章', 1),
('关羽', 12, 'upload/guanyu.jpg', '吃喝玩乐打麻将', 2),
('孔明', 16, 'upload/kongming.jpg', '读书练字写文章', 3),
('吕布', 45, 'upload/lvbu.jpg', '吃喝玩乐打麻将', 4),
('吕蒙', 78, 'upload/lvmeng.jpg', '读书练字写文章', 5),
('马超', 207, 'upload/machao.jpg', '吃喝玩乐打麻将', 6),
('孙权', 6, 'upload/sunquan.jpg', '读书练字写文章', 7),
('张飞', 28, 'upload/zhangfei.jpg', '吃喝玩乐打麻将', 8),
('张辽', 11, 'upload/zhangliao.jpg', '读书练字写文章', 9),
('刘禅', 20, 'upload/dan.jpg', '吃喝玩乐打麻将', 10),
('张飞', 20, 'upload/zhangfei.jpg', '读书练字写文章', 11),
('周瑜', 20, 'upload/zhouyu.jpg', '吃喝玩乐打麻将', 12),
('子龙', 20, 'upload/zilong.jpg', '读书练字写文章', 13),
('曹仁', 20, 'upload/caoren.jpg', '吃喝玩乐打麻将', 14),
('郭嘉', 20, 'upload/guojia.jpg', '读书练字写文章', 15),
('黄盖', 20, 'upload/huanggai.jpg', '吃喝玩乐打麻将', 16),
('黄忠', 20, 'upload/huangzong.jpg', '读书练字写文章', 17),
('魏延', 20, 'upload/weiyan.jpg', '吃喝玩乐打麻将', 18),
('徐晃', 20, 'upload/xuhuang.jpg', '读书练字写文章', 19),
('王朗', 20, 'upload/wanglang.jpg', '吃喝玩乐打麻将', 20);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
