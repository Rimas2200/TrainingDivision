<!DOCTYPE html>
<html lang='ru'>
<head>
    <meta charset='utf-8'>
    <meta name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'>
    <title>Добро пожаловать!</title>

</head>
<body>
<h1> Hello</h1>
<input type="button" value="omg" name=" ">
<?php
    $mysql = new mysqli("localhost","root","");
    $mysql->query("SET NAMES 'utf8'");
    $mysql->query("DROP DATABASE `rasp`");
    $mysql->query("CREATE DATABASE `rasp`");



    $mysql->query("CREATE TABLE `rasp`.`schedule` (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    discipline VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'дисциплина' UNIQUE KEY,
    classroom VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'аудитория' UNIQUE KEY,
    group_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'группа' UNIQUE KEY,
    pair_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'номер пары',
    teacher_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'преподователь' UNIQUE KEY,
    day_of_the_week VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'день недели',
    week VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'неделя',
    subgroup VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT ' ' COMMENT 'подгруппа'
     )");





    $mysql->query("CREATE TABLE `rasp`.`professor` (
    id INT NOT NULL AUTO_INCREMENT,
    last_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'фамилия',
    first_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'имя',
    middle_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'отчество',
    position VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'должность',
    departement VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'кафедра' UNIQUE KEY,
    FOREIGN KEY (last_name) REFERENCES schedule (teacher_name),
    PRIMARY KEY(id)                 
    )");




$mysql->query("CREATE TABLE `rasp`.`departament` (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'Название кафедры',
    phone VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'Телефон кафедры',
    FOREIGN KEY (name) REFERENCES professor (departement),
    PRIMARY KEY(id)                  
    )");







    $mysql->query("CREATE TABLE `rasp`.`groupa` (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'Назваание группы',
    direction_abbreviation VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'аббревиатура' UNIQUE KEY,
    FOREIGN KEY (name) REFERENCES schedule (group_name),
    PRIMARY KEY(id)                  
    )");

    $mysql->query("CREATE TABLE `rasp`.`direction` (
    id INT NOT NULL AUTO_INCREMENT,
    direction_abbreviation VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'аббревиатура',
    name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'имя',
    faculty VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'факультет' UNIQUE KEY,
    FOREIGN KEY (direction_abbreviation) REFERENCES groupa (direction_abbreviation),
    PRIMARY KEY(id)                  
    )");

    $mysql->query("CREATE TABLE `rasp`.`faculty` (
    id INT NOT NULL AUTO_INCREMENT,
    faculty_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'Название факультета',
    dean_fullname VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'ФИО Декана',
    FOREIGN KEY (faculty_name) REFERENCES professor (departement),
    PRIMARY KEY(id)                  
    )");

    $mysql->query("CREATE TABLE `rasp`.`address` (
    id INT NOT NULL AUTO_INCREMENT,
    address VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'адресс',
    faculty VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'факультет',
    PRIMARY KEY(id)                  
    )");

    $mysql->query("CREATE TABLE `rasp`.`user` (
    id INT NOT NULL AUTO_INCREMENT,
    user_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'имя пользователя',
    password VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'пароль',
    email VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'Электронная почта',
    groupm VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'группа',
    PRIMARY KEY(id)                  
    )");



    $mysql->query("CREATE TABLE `rasp`.`discipline` (
    id INT NOT NULL AUTO_INCREMENT,
    discipline_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'название дисциплины',
    FOREIGN KEY (discipline_name) REFERENCES schedule (discipline),
    PRIMARY KEY(id)                  
    )");

    $mysql->query("CREATE TABLE `rasp`.`classroom` (
    id INT NOT NULL AUTO_INCREMENT,
    room_number VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'аудитория',
    building VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'корпус',
    FOREIGN KEY (room_number) REFERENCES schedule (classroom),
    PRIMARY KEY(id)                  
    )");

    $mysql->query("CREATE TABLE `rasp`.`couple_type` (
    id INT NOT NULL AUTO_INCREMENT,
    pair_type VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'тип пары',
    PRIMARY KEY(id)                  
    )");



    $mysql->query("INSERT INTO `rasp`.`schedule` ( `discipline`, `classroom`, `group_name`, `pair_name`, `teacher_name`, `day_of_the_week`, `week`, `subgroup`)
    VALUES('ФИЗИКА (ПР.)', 'АУД. 212 (2)', 'Х-101', '1', 'Бутько Л. М.', 'Понедельник', '2Н', ' '),
           ('БЩ.И НЕОРГ.ХИМ.(ЛАБ.)', 'АУД. 301А (2)', 'X-101', '1', 'Макогон А. Г.', 'Пятница', '1Н', 'первая подгруппа')");

    $mysql->close();

?>


</body>

</html>