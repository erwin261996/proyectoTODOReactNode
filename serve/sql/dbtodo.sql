/*
 Navicat Premium Data Transfer

 Source Server         : Mysql
 Source Server Type    : MySQL
 Source Server Version : 100137
 Source Host           : localhost:3306
 Source Schema         : dbtodo

 Target Server Type    : MySQL
 Target Server Version : 100137
 File Encoding         : 65001

 Date: 31/03/2021 04:32:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_todo
-- ----------------------------
DROP TABLE IF EXISTS `tb_todo`;
CREATE TABLE `tb_todo`  (
  `id` smallint NOT NULL AUTO_INCREMENT,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `completed` tinyint(1) NULL DEFAULT 0 COMMENT 'Estatus del todo es un booleano por tanto inicia con false',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;

-- ----------------------------
-- Records of tb_todo
-- ----------------------------

-- ----------------------------
-- Procedure structure for sp_todo
-- ----------------------------
DROP PROCEDURE IF EXISTS `sp_todo`;
delimiter ;;
CREATE PROCEDURE `sp_todo`(in opc int, in spid smallint, in sptexto varchar(255), in spcomple tinyint)
BEGIN
	
	IF opc = 1 THEN -- Consultamos TODOS
	BEGIN
		SELECT id, text, completed FROM tb_todo;
	END;
	END IF;
	
	IF opc = 2 THEN -- Registramos TODOS
	BEGIN
		INSERT INTO tb_todo (text, completed) VALUES (sptexto, spcomple);
		
		SELECT id, text, completed FROM tb_todo;
	END;
	END IF;
	
	IF opc = 3 THEN -- Actualizamos el estatus del TODOS
	BEGIN	
		UPDATE tb_todo SET 
			completed = spcomple
		WHERE id = spid;
		
		SELECT id, text, completed FROM tb_todo;
	END;
	END IF;
	
	IF opc = 4 THEN -- Eliminamos el registro del TODOS
	BEGIN
		DELETE FROM tb_todo WHERE id=spid;
		SELECT id, text, completed FROM tb_todo;
	END;
	END IF;

END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
