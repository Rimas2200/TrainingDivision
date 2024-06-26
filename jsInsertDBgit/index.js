const mysql = require('mysql');
const express = require('express');
const cors = require('cors');


const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(express.static(__dirname + '/views/front'));

const connect=mysql.createConnection({//подключение к бд
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'raspGlobalChange'
});

connect.connect((err) =>{
    try{
        if(err){
            throw(err);
        }
        console.log('Подключение к БД успешно');
    }catch (err){
        console.log(`Ошибка при подключении к бд ${err}`);
    }
});



//GET-зпапросы для POST
app.get('/register', (req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    res.render('register');
});
app.get('/auth', (req,res) =>{
    console.log(`Запроос данных ${req.url}`);
    res.render('auth');
});


/*GET-запросы по schedules
app.get('/schedules',(req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    res.send('Получение списка пар');
});
app.get('/schedules/:teacherName', (req,res) =>{
    console.log(`запрос данных ${req.url}`);
    res.send(`Получение пар преподователя: ${req.params.teacherName}`);
})
app.get('/schedules/group/:groupName', (req,res) =>{
    console.log(`Запрос  данных: ${req.url}`);
    res.send(`Получение пар по группе: ${req.url}`);
});
app.get('/schedules/group/:groupName/:dayoftheweek/:week', (req,res)=>{
    console.log(`Запрос данных ${req.url}`);
    res.send(`Вернуть пары группы: ${req.params.groupName} в ${req.params.dayoftheweek} на неделе: ${req.params.week}`);
})
*/

//GET-запросы для вывода списков
app.get('/users',(req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    res.send('Здесь список пользователей')
})
app.get('/faculties/direction/:faculty', (req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    res.send(`Списки направлений ${req.params.faculty} факультета`);
});
app.get('/faculties/direction/group/:direcrion_abbreviation',(req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    res.send(`Список группы: ${req.params.direcrion_abbreviation} `);
});

app.get('/direction',(req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    connect.query('SELECT * FROM direction', (err, results) => {
        if (err) throw err;
        res.render('front/index', {page: 'direction',  data: results });
    });
})
app.get('/discipline', (req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    connect.query('SELECT * FROM discipline', (err, results) => {
        if (err) throw err;
        res.render('front/index', {page: 'discipline',  data: results });
    });
})
app.get('/faculties', (req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    connect.query('SELECT * FROM faculty', (err, results)=> {
        if (err) throw err;
        res.render('front/index', {page: 'faculties', data: results});
    });
});
app.get('/classroom',(req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    connect.query('SELECT * FROM classroom', (err, results) => {
        if (err) throw err;
        res.render('front/index', {page: 'classroom',  data: results });
    });
});
app.get('/coupleType',(req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    connect.query('SELECT * FROM couple_type', (err, results) => {
        if (err) throw err;
        res.render('front/index',{page:'coupleType',  data: results });
    });
});
app.get('/professor',(req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    connect.query('SELECT * FROM professor', (err, results) => {
        if (err) throw err;
        res.render('front/index', {page: 'professor',  data: results });
    });
});
app.get('/',(req,res)=>{
    console.log(`Запрос данных ${req.url}`);
    res.render('front/index', {page: ''});
});
app.get('/departament',(req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    connect.query('SELECT * FROM departament', (err, results) => {
        if (err) throw err;
        res.render('front/index', {page: 'departament',  data: results });
    });
});
app.get('/address', (req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    connect.query('SELECT * FROM address', (err,results) =>{
        if (err) throw err;
        res.render('front/index', {page: 'address', data: results });
    });
});
app.get('/addition/schedule',(req,res) => {
    connect.query('SELECT id, discipline_name FROM discipline', (err, disciplineData) => {
        if (err) {
            console.error('Error retrieving data from discipline: ', err);
            res.status(500).send('Internal Server Error');
            return;
        }
        
        connect.query('SELECT id, last_name, first_name, middle_name FROM professor', (err, professorData) => {
            if (err) {
                console.error('Error retrieving data from professor: ', err);
                res.status(500).send('Internal Server Error');
                return;
            }
            
            connect.query('SELECT id,room_number FROM classroom', (err, classroomData) => {
                if (err) {
                    console.error('Error retrieving data from classroom: ', err);
                    res.status(500).send('Internal Server Error');
                    return;
                }
            
                res.render('front/menu', {
                    disciplineData,
                    professorData,
                    classroomData
                });
            });
        });
    });
});



//кнопки для БД
app.post('/coupleType/delete/:id', (req,res) => {
    console.log(`Запрос данных ${req.url}`);
    connect.query('DELETE FROM couple_type where id =' + req.params.id, (err, result) => {
        try{
            if (err){
                throw err;
            }
            console.log('Данны успешно удалены');
            res.redirect('/coupleType');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/coupleType/edit/:id', (req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    const pair_type = req.body.pair_type;
    connect.query('UPDATE couple_type SET pair_type = ? WHERE id = ?',[pair_type, req.params.id], (err,result) => {
        try{
            if (err){
                throw err;
            }
            console.log('Данны успешно удалены');
            res.redirect('/coupleType');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/classroom/delete/:id', (req,res) => {
    console.log(`Запрос данных ${req.url}`);
    connect.query('DELETE FROM classroom where id =' + req.params.id, (err,result) =>{
        try{
            if (err){
                throw err;
            }
            console.log('Данные успешно удалены');
            res.redirect('/classroom');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/classroom/edit/:id', (req,res) =>{
    let room_number = req.body.room_number;
    let building = req.body.building;
    connect.query('UPDATE classroom SET room_number = ?,building = ? WHERE id = ?',[room_number, building ,req.params.id], (err,result) => {
        try{
            if (err){
                throw err;
            }
            console.log('Данны успешно удалены');
            res.redirect('/classroom');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/discipline/delete/:id',(req,res) => {
    connect.query('DELETE FROM discipline where id =' + req.params.id, (err,result) =>{
        try{
            if (err){
                throw err;
            }
            console.log('Данные успешно удалены');
            res.redirect('/discipline');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/discipline/edit/:id', (req,res) =>{
    let discipline_name = req.body.discipline_name;
    connect.query('UPDATE discipline SET discipline_name = ? WHERE id = ?',[discipline_name ,req.params.id], (err,result) => {
        try{
            if (err){
                throw err;
            }
            console.log('Данны успешно удалены');
            res.redirect('/discipline');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/faculties/delete/:id', (req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    connect.query('DELETE FROM faculty WHERE id =' + req.params.id, (err,result) =>{
        try{
            if (err){
                throw err;
            }
            console.log('Данные успешно удалены');
            res.redirect('/faculties');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/faculties/edit/:id', (req,res) =>{
    let faculty_name = req.body.faculty_name;
    let dean_fullname = req.body.dean_fullname;
    connect.query('UPDATE faculty SET faculty_name = ?,dean_fullname = ? WHERE id = ?',[faculty_name, dean_fullname ,req.params.id], (err,result) => {
        try{
            if (err){
                throw err;
            }
            console.log('Данны успешно удалены');
            res.redirect('/faculties');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/departament/delete/:id', (req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    connect.query('DELETE FROM departament WHERE id =' + req.params.id, (err,result) =>{
        try{
            if (err){
                throw err;
            }
            console.log('Данные успешно удалены');
            res.redirect('/departament');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    })
});
app.post('/departament/edit/:id', (req,res) =>{
    let name = req.body.name;
    let phone = req.body.phone;
    connect.query('UPDATE departament SET name = ?,phone = ? WHERE id = ?',[name, phone ,req.params.id], (err,result) => {
        try{
            if (err){
                throw err;
            }
            console.log('Данны успешно удалены');
            res.redirect('/departament');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/address/delete/:id', (req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    connect.query('DELETE FROM address WHERE id =' + req.params.id, (err,ressult) => {
        try{
            if (err){
                throw err;
            }
            console.log('Данные успешно удалены');
            res.redirect('/address');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/address/edit/:id', (req,res) =>{
    let address = req.body.address;
    let faculty = req.body.faculty;
    connect.query('UPDATE address SET address = ?,faculty = ? WHERE id = ?',[address, faculty ,req.params.id], (err,result) => {
        try{
            if (err){
                throw err;
            }
            console.log('Данны успешно удалены');
            res.redirect('/address');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/professor/delete/:id', (req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    connect.query('DELETE FROM professor WHERE id =' + req.params.id, (err,ressult) => {
        try{
            if (err){
                throw err;
            }
            console.log('Данные успешно удалены');
            res.redirect('/professor');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/professor/edit/:id', (req,res) =>{
    let last_name= req.body.last_name;
    let first_name= req.body.first_name;
    let middle_name= req.body.middle_name;
    let position = req.body.position;
    let departament = req.body.departament;
    connect.query('UPDATE professor SET last_name = ?, first_name = ?, middle_name = ?, position = ?, departement = ? WHERE id = ?',[last_name, first_name, middle_name, position, departament, req.params.id], (err,result) => {
        try{
            if (err){
                throw err;
            }
            console.log('Данны успешно удалены');
            res.redirect('/professor');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/direction/delete/:id', (req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    connect.query('DELETE FROM direction WHERE id =' + req.params.id, (err,ressult) => {
        try{
            if (err){
                throw err;
            }
            console.log('Данные успешно удалены');
            res.redirect('/direction');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});
app.post('/direction/edit/:id', (req,res) =>{
    let direction_abbreviation = req.body.direction_abbreviation;
    let name = req.body.name;
    let faculty = req.body.faculty;
    connect.query('UPDATE direction SET direction_abbreviation = ?, name = ?, faculty = ? WHERE id = ?',[direction_abbreviation, name, faculty, req.params.id], (err,result) => {
        try{
            if (err){
                throw err;
            }
            console.log('Данны успешно удалены');
            res.redirect('/direction');
        }catch(err){
            console.log('Ошибка при удалении данных' + err.message);
        }
    });
});




app.get('*',(req,res)=>{
    console.log(`Запрос ${req.url}`);
    res.render('error');
})



app.post('/register', (req,res) =>{
    let user_name = req.body.username;
    let password = req.body.password;
    let email = req.body.email;
    const regData= {user_name: user_name,
    password: password,
    email: email};
    connect.query('INSERT INTO user SET ?', regData, (error,res)=>{
        try{
            if (error){
                throw error;
            }
            console.log('Успешно выполнено CODE: 200');
        }catch(error){
            if (error.code == 'ER_DUP_ENTRY'){
                console.log('Ошибка 409' );
            }
            else{
                console.log('Ошибка CODE: 416' + error.message);
            };
        }
    })
});
app.post('/auth', (req,res) =>{
    let password = req.body.password;
    let email = req.body.email;
    const regData= {password: password,
    email: email};
    console.log(`${email} ${password} зашёл в систему`);
});



app.post('/addition/schedule', (req, res)=>{
    let discipline= req.body.discipline;
    let classroom= req.body.classroom;
    let group_name= req.body.group_name;
    let pair_name = req.body.pair_name;
    let teacher_name= req.body.teacher_name;
    let day_of_the_week= req.body.day_of_the_week;
    let week= req.body.week;
    let subgroup= req.body.subgroup;
    const data ={discipline: discipline,
        classroom: classroom,
        group_name: group_name,
        pair_name: pair_name,
        teacher_name: teacher_name,
        day_of_the_week: day_of_the_week,
        week: week,
        subgroup: subgroup}; 
    connect.query('INSERT INTO schedule SET ?', data, (error,res)=>{
        try{
            if (error){
                throw error;
            }
            console.log('Успешно выполнено CODE: 200');
        }catch(error){
            if (error.code == 'ER_DUP_ENTRY'){
                console.log('Ошибка 409');
            }
            else{
                console.log('Ошибка при вставке данных дисциплины' + error.message);
            };
        }
    })
});

app.post('/addition/professor', (req, res)=>{
    let last_name= req.body.last_name;
    let first_name= req.body.first_name;
    let middle_name= req.body.middle_name;
    let position = req.body.position;
    let departament = req.body.departament;
    const proffessorData ={last_name: last_name,
        first_name: first_name,
        middle_name: middle_name,
        position: position,
        departement: departament}; 
    connect.query('INSERT INTO professor SET ?', proffessorData, (error,result)=>{
        try{
            if (error){
                throw error;
            }
            console.log('Успешно выполнено CODE: 200');
            res.redirect('/professor');
        }catch(error){
            if (error.code == 'ER_DUP_ENTRY'){
                console.log('Ошибка 409' );
            }
            else{
                console.log('Ошибка при вставке данных профессора' + error.message);
            };
        }
    })
});

app.post('/addition/classroom', (req, res)=>{
    let room_number = req.body.room_number;
    let building = req.body.building;
    const classroomData ={room_number: room_number,
        building: building}; 
    connect.query('INSERT INTO classroom SET ?', classroomData, (error,result)=>{
        try{
            if (error){
                throw error;
            }
            console.log('Успешно выполнено CODE: 200');
            res.redirect('/classroom');
        }catch(error){
            if (error.code == 'ER_DUP_ENTRY'){
                console.log('Ошибка 409' );
            }
            else{
                console.log('Ошибка при вставке данных аудитории' + error.message);
            }
        }
    })
});

app.post('/addition/coupleType', (req, res)=>{
    let pair_type= req.body.pair_type;
    const couple_typeData ={pair_type: pair_type}; 
    connect.query('INSERT INTO couple_type SET ?', couple_typeData, (error,result)=>{
        try{
            if (error){
                throw error;
            }
            console.log('Успешно выполнено CODE: 200');
            res.redirect('/coupleType');
        }catch(error){
            if (error.code == 'ER_DUP_ENTRY'){
                console.log('Ошибка 409' );
            }
            else{
                console.log('Ошибка при вставке данных типа пар' + error.message);
            };
        }
    })
});

app.post('/addition/departament', (req, res)=>{
    let name = req.body.name;
    let phone = req.body.phone;
    const departamentData ={name: name,
    phone: phone}; 
    connect.query('INSERT INTO departament SET ?', departamentData, (error,result)=>{
        try{
            if (error){
                throw error;
            }
            console.log('Успешно выполнено CODE: 200');
            res.redirect('/departament');
        }catch(error){
            if (error.code == 'ER_DUP_ENTRY'){
                console.log('Ошибка 409' );
            }
            else{
                console.log('Ошибка при вставке данных кафедры' + error.message);
            };
        }
    })
});

app.post('/addition/address', (req, res)=>{
    let address = req.body.address;
    let faculty = req.body.faculty;
    const addressData ={address: address,
    faculty: faculty}; 
    connect.query('INSERT INTO address SET ?', addressData, (error,result)=>{
        try{
            if (error){
                throw error;
            }
            console.log('Успешно выполнено CODE: 200');
            res.redirect('/address');
        }catch(error){
            if (error.code == 'ER_DUP_ENTRY'){
                console.log('Ошибка 409' );
            }
            else{
                console.log('Ошибка при вставке данных адресса' + error.message);
            }
        }
    })
});

app.post('/faculties/addition', (req, res)=>{
    let faculty_name = req.body.faculty_name;
    let dean_fullname = req.body.dean_fullname;
    const facultyData ={faculty_name: faculty_name,
        dean_fullname: dean_fullname}; 
    connect.query('INSERT INTO faculty SET ?', facultyData, (error,result)=>{
        try{
            if (error){
                throw error;
            }
            console.log('Успешно выполнено CODE: 200');
            res.redirect('/faculties');
        }catch(error){
            if (error.code == 'ER_DUP_ENTRY'){
                console.log('Ошибка 409' );
            }
            else{
                console.log('Ошибка при вставке данных факультета' + error.message);
            }
        }
    })
});

app.post('/addition/discipline', (req, res)=>{
    let discipline_name = req.body.discipline_name;
    const disciplineData ={discipline_name: discipline_name}; 
    connect.query('INSERT INTO discipline SET ?', disciplineData, (error,result)=>{
        try{
            if (error){
                throw error;
            }
            console.log('Успешно выполнено CODE: 200');
            res.redirect('/discipline');
        }catch(error){
            if (error.code == 'ER_DUP_ENTRY'){
                console.log('Ошибка 409' );
            }
            else{
                console.log('Ошибка при вставке данных дисциплины' + error.message);
            }
        }
    })
});

app.post('/addition/direction', (req, res)=>{
    let direction_abbreviation = req.body.direction_abbreviation;
    let name = req.body.name;
    let faculty = req.body.faculty;
    const directionData ={direction_abbreviation: direction_abbreviation,
    name: name,
    faculty: faculty}; 
    connect.query('INSERT INTO direction SET ?', directionData, (error,result)=>{
        try{
            if (error){
                throw error;
            }
            console.log('Успешно выполнено CODE: 200');
            res.redirect('/direction');
        }catch(error){
            if (error.code == 'ER_DUP_ENTRY'){
                console.log('Ошибка 409' );
            }
            else{
                console.log('Ошибка при вставке данных дисциплины' + error.message);
            }
        }
    })
});

app.post('/addition/group', (req, res)=>{
    let name = req.body.name;
    let direction_abbreviation = req.body.direction_abbreviation;
    const groupData ={name: name,
    direction_abbreviation: direction_abbreviation}; 
    connect.query('INSERT INTO group_name SET ?', groupData, (error,res)=>{
        try{
            if (error){
                throw error;
            }
            console.log('Успешно выполнено CODE: 200');
        }catch(error){
            if (error.code == 'ER_DUP_ENTRY'){
                console.log('Ошибка 409' );
            }
            else{
                console.log('Ошибка при вставке данных дисциплины' + error.message);
            }
        }
    })
});






const PORT=3000;
const HOSTNAME= 'localhost';

app.listen(PORT,HOSTNAME, ()=>{//сервер
    console.log(`Сервер создан: http://${HOSTNAME}:${PORT}`)
});