const mysql = require('mysql');
const express = require('express');



const app = express();

app.set('view engine','ejs');
app.use(express.urlencoded({extended:false}));


const connect=mysql.createConnection({
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


app.get('/', (req, res)=> {
    console.log(`Запрос данных ${req.url}`)
    res.render('index')
});


app.post('/addData', (req, res)=>{
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
            console.log('Данные успешно вставлены');
        }catch(error){
            console.log('Ошибка при вставке данных' + error.message);
        }
    })
});

const PORT=3000;

app.listen(PORT, ()=>{
    console.log(`Сервер создан: http://localhost:${PORT}`)
});