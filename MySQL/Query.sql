create database fintechBD;
use fintechBD;

create table usuario(
	id int primary key auto_increment,
    nome varchar(30) not null,
    nome_usuario varchar(20),
    email varchar(100) not null,
    senha varchar(100) not null,
    dataNascimento date not null
);

create table transacoes(
	id int primary key auto_increment,
    id_usuario int,
    constraint fkUserTrasacao foreign key(id_usuario) references usuario(id),
	tipoTransacao char(7) not null check(LOWER(tipoTransacao) = 'despesa' or LOWER(tipoTransacao) = 'receita'),
    valor decimal(10,2) not null,
    descricao varchar(100),
    categoria varchar(20),
    dataTransacao date
);

create table categoriaTransacao(
	id int primary key auto_increment,
    nome varchar(50) not null
);

insert into categoriaTransacao(nome) values
	('Alimentação'),
    ('Moradia'),
    ('Transporte'),
    ('Saúde'),
    ('Educação'),
    ('Entretenimento'),
    ('Viagens'),
    ('Economias'),
    ('Salario'),
    ('Renda Extra'),
    ('Outros')
;

create table contas(
	id int primary key auto_increment,
    nome_conta varchar(20) not null,
    tipo_de_conta varchar(30),
    saldo_inicial decimal(10,2)
);

create table meta_de_orcamento(
	id int primary key auto_increment,
    id_usuario int,
	categoria varchar(20),
    valor decimal(10,2),
    data_inicio date,
    data_fim date,
    constraint fkUserMetaOrcamento foreign key(id_usuario) references usuario(id)
);

create table relatorio_e_visualizacao(
	saldo_atual decimal(10,2) default 0.00,
    gastos_categoria decimal(10,2) default 0.00,
    receita decimal(10,2) default 0.00,
    despesa decimal(10,2) default 0.00
);


