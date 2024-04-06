<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Проверка ввода данных</title>
	<h1>Добавить данные в расписание</h1>
</head>
<body>
<form id="scheduleForm">

	<label for="discipline">Дисциплина:</label>
	<input type="text" name="discipline" id="discipline">

	<label for="classroom">Аудитория:</label>
    <input type="text" id="classroom" name="classroom">

    <label for="group_name">Группа:</label>
    <input type="text" id="group_name" name="group_name">

    <label for="pair_name">Номер пары:</label>
    <input type="text" id="pair_name" name="pair_name">

    <label for="teacher_name">Преподаватель:</label>
    <input type="text" id="teacher_name" name="teacher_name"><br><br>


    <label for="day_of_the_week">День недели:</label>
    <input type="text" id="day_of_the_week" name="day_of_the_week">

    <label for="week">Неделя:</label>
    <input type="text" id="week" name="week">

    <label for="subgroup">Подгруппа:</label>
    <input type="text" id="subgroup" name="subgroup">
    <br><br>

    <button type="submit">Добавить данные</button>

    <script src="dataBase.php"></script>
</form>
</body>
<?php

$mysql = new mysqli("localhost","root","");

if ($mysql->connect_error) {
    die("Ошибка подключения:" . $mysql->connect_error); //остановка кода в случае ошибки
}

$sql = "CREATE DATABASE IF NOT EXISTS raspGlobalChange";
if ($mysql->query($sql) === TRUE){ //тип ещё чекает
    echo "Заебись создали \n";
}
else{
    echo "Ошибка при создании БД:".$mysql->error;
}

$mysqli = new mysqli("localhost","root","","raspGlobalChange");

if ($mysqli->connect_error){
    die("Ошибка подключения к БД".$mysqli->connect_error);
}


$sqlTableSchedule= "CREATE TABLE IF NOT EXISTS schedule(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    discipline VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'дисциплина',
    classroom VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'аудитория',
    group_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'группа',
    pair_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'номер пары',
    teacher_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'преподователь',
    day_of_the_week VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'день недели',
    week VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'неделя',
    subgroup VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT ' ' COMMENT 'подгруппа'
    )";

if ($mysqli->query($sqlTableSchedule) === TRUE){
    echo "Главная таблица создана \n";
}
else{
    echo"Ошибка в создании главной таблицы:".$mysqli->error;
}
$sqlTable= "CREATE TABLE IF NOT EXISTS professor(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    last_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'фамилия' UNIQUE KEY,
    first_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'имя',
    middle_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'отчество',
    position VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'должность',
    departement VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'кафедра' UNIQUE KEY
    )";

if ($mysqli->query($sqlTable)===TRUE){
    echo "Таблица создана";
    echo "\n";
}
else{
    echo"Ошибка в создании".$mysqli->error;
}

$sqlTable="CREATE TABLE IF NOT EXISTS departament(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'Название кафедры',
    phone VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'Телефон кафедры'
    )";


if ($mysqli->query($sqlTable)===TRUE){
    echo "Таблица создана";
    echo "\n";
}
else{
    echo"Ошибка в создании".$mysqli->error;
}


$sqlTable="CREATE TABLE IF NOT EXISTS group_name (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'Назваание группы' UNIQUE KEY,
    direction_abbreviation VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'аббревиатура' UNIQUE KEY
    )";


if ($mysqli->query($sqlTable)===TRUE){
    echo "Таблица создана";
    echo "\n";
}
else{
    echo"Ошибка в создании".$mysqli->error;
}


$sqlTable= "CREATE TABLE IF NOT EXISTS  direction (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    direction_abbreviation VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'аббревиатура',
    name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'имя',
    faculty VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'факультет' UNIQUE KEY
    )";


if ($mysqli->query($sqlTable)===TRUE){
    echo "Таблица создана";
    echo "\n";
}
else{
    echo"Ошибка в создании".$mysqli->error;
}


$sqlTable= "CREATE TABLE IF NOT EXISTS faculty (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    faculty_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'Название факультета',
    dean_fullname VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'ФИО Декана'
    )";


if ($mysqli->query($sqlTable)===TRUE){
    echo "Таблица создана";
    echo "\n";
}
else{
    echo"Ошибка в создании".$mysqli->error;
}


$sqlTable= "CREATE TABLE IF NOT EXISTS address(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    address VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'адресс',
    faculty VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'факультет'
    )";


if ($mysqli->query($sqlTable)===TRUE){
    echo "Таблица создана";
    echo "\n";
}
else{
    echo"Ошибка в создании".$mysqli->error;
}


$sqlTable="CREATE TABLE IF NOT EXISTS user(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'имя пользователя',
    password VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'пароль',
    email VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'Электронная почта',
    groupm VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'группа'
    )";


if ($mysqli->query($sqlTable)===TRUE){
    echo "Таблица создана";
    echo "\n";
}
else{
    echo"Ошибка в создании".$mysqli->error;
}


$sqlTable="CREATE TABLE IF NOT EXISTS discipline(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        discipline_name VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'название дисциплины'           
        )";


if ($mysqli->query($sqlTable)===TRUE){
    echo "Таблица создана";
    echo "\n";
}
else{
    echo"Ошибка в создании".$mysqli->error;
}


$sqlTable="CREATE TABLE IF NOT EXISTS classroom(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        room_number VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'аудитория' UNIQUE KEY,
        building VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'корпус'          
        )";


if ($mysqli->query($sqlTable)===TRUE){
    echo "Таблица создана";
    echo "\n";
}
else{
    echo"Ошибка в создании".$mysqli->error;
}


$sqlTable="CREATE TABLE IF NOT EXISTS couple_type(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        pair_type VARCHAR(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NULL DEFAULT NULL COMMENT 'тип пары'
        )";


if ($mysqli->query($sqlTable)===TRUE){
    echo "Таблица создана
    ";
}
else{
    echo"Ошибка в создании".$mysqli->error;
}


$discipline = $_POST['discipline'];
$classroom = $_POST['classroom'];
$group_name = $_POST['group_name'];
$pair_name = $_POST['pair_name'];
$teacher_name = $_POST['teacher_name'];
$day_of_the_week = $_POST['day_of_the_week'];
$week = $_POST['week'];
$subgroup = $_POST['subgroup'];

$sql = "INSERT INTO schedule (discipline, classroom, group_name, pair_name, teacher_name, day_of_the_week, week, subgroup)
            VALUES ('$discipline', '$classroom', '$group_name', '$pair_name', '$teacher_name', '$day_of_the_week', '$week', '$subgroup')";


if ($mysqli->query($sql) === TRUE) {
    echo "Данные успешно добавлены в главную таблицу
    ";
} else {
    echo "Ошибка при добавлении данных: " . $mysqli->error;
}


$sql = "INSERT INTO professor(last_name)
            VALUES('$teacher_name')";


if ($mysqli->query($sql) === TRUE) {
    echo "Данные успешно добавлены в таблицу профессор
    ";
} else {
    echo "Ошибка при добавлении данных: " . $mysqli->error;
}


$sql= "INSERT INTO group_name(name)
            VALUES('$group_name')";


if ($mysqli->query($sql) === TRUE) {
    echo "Данные успешно добавлены в название группы
    ";
} else {
    echo "Ошибка при добавлении данных: " . $mysqli->error;
}


$sql= "INSERT INTO classroom(room_number)
            VALUES('$classroom')";


if ($mysqli->query($sql) === TRUE) {
    echo "Данные успешно добавлены в аудиторию
    ";
} else {
    echo "Ошибка при добавлении данных: " . $mysqli->error;
}


$sql= "INSERT INTO discipline(discipline_name)
            VALUES('$discipline')";

if ($mysqli->query($sql) === TRUE) {
    echo "Данные успешно добавлены в дисциплину
    ";
} else {
    echo "Ошибка при добавлении данных: " . $mysqli->error;
}


$mysqli->close();

?>
<script src="dataBaseInsert.js"></script>
</html>