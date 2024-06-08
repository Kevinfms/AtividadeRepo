CREATE SCHEMA IF NOT EXISTS `db_atvreposicao`;
use `db_atvreposicao`;

CREATE TABLE IF NOT EXISTS `db_atvreposicao`.`tbl_cliente`(
	`id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NOT NULL,
    `data_nasc` DATE not null,
    `cpf` VARCHAR(15) NOT NULL, 
    `dat_cad` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);


CREATE TABLE IF NOT EXISTS `db_atvreposicao`.`telefone` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` INT NOT NULL,
  `tipo` ENUM("CELULAR", "FIXO") NOT NULL,
  `numero` VARCHAR(15) NOT NULL,
  `dat_cad` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_cliente_id_telefone_id_cliente`
    FOREIGN KEY (`id_cliente`)
    REFERENCES `db_atvreposicao`.`cliente` (`id`));
select * from telefone;