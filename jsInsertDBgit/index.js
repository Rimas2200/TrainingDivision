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
    res.render('front/index', {page: 'direction'})
})
app.get('/faculties', (req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    res.render('front/index', {page: 'faculties'} )
});
app.get('/classroom',(req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    res.render('front/index', {page: 'classroom'});
});
app.get('/coupleType',(req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    res.render('front/index', {page: 'coupleType'});
});
app.get('/professor',(req,res) =>{
    console.log(`Запрос данных ${req.url}`);
    res.render('front/index', {page: 'professor'});
});
app.get('/',(req,res)=>{
    console.log(`Запрос данных ${req.url}`);
    res.render('front/index', {page: ''});
})




//GET-запросы с последующими POST-запросами
app.get('/addition/schedule', (req, res)=> {
    console.log(`Запрос данных ${req.url}`);
    res.render('front/menu');
});
app.get('/addition/group',(req,res)=>{
    console.log(`Запрос ${req.url}`);
    res.render('group');
});
app.get('/addition/direction',(req,res)=>{
    console.log(`Запрос ${req.url}`);
    res.render('direction');
});
/*
app.get('/faculties/addition',(req,res)=>{
    console.log(`Запрос ${req.url}`);
    res.render('faculty');
});
*/
app.get('/addition/address',(req,res)=>{
    console.log(`Запрос ${req.url}`);
    res.render('address');
});
app.get('/addition/departament',(req,res)=>{
    console.log(`Запрос ${req.url}`);
    res.render('departament');
});
app.get('/addition/coupleType',(req,res)=>{
    console.log(`Запрос ${req.url}`);
    res.render('coupleType');
});
app.get('/addition/classroom',(req,res)=>{
    console.log(`Запрос ${req.url}`);
    res.render('classroom');
});
app.get('/addition/professor',(req,res)=>{
    console.log(`Запрос ${req.url}`);
    res.render('professor');
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
    connect.query('INSERT INTO professor SET ?', proffessorData, (error,res)=>{
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
    connect.query('INSERT INTO classroom SET ?', classroomData, (error,res)=>{
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
                console.log('Ошибка при вставке данных аудитории' + error.message);
            }
        }
    })
});

app.post('/addition/coupleType', (req, res)=>{
    let pair_type= req.body.pair_type;
    const couple_typeData ={pair_type: pair_type}; 
    connect.query('INSERT INTO couple_type SET ?', couple_typeData, (error,res)=>{
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
    connect.query('INSERT INTO departament SET ?', departamentData, (error,res)=>{
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
    connect.query('INSERT INTO address SET ?', addressData, (error,res)=>{
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
    connect.query('INSERT INTO faculty SET ?', facultyData, (error,res)=>{
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
                console.log('Ошибка при вставке данных факультета' + error.message);
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
    connect.query('INSERT INTO direction SET ?', directionData, (error,res)=>{
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