require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const apiWeather = require('./apiWeather');

//const uri = "";
const uri=process.env.MONGO_STR;
mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{console.log("mongo db connected ")});

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const Teachers_Router = require('./api/v1/routes/Teachers')
app.use('/teachers', Teachers_Router);

const Students_Router = require('./api/v1/routes/Students');
app.use('/students', Students_Router);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
})

app.get('/reg', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'))
});

app.get('/addTeacher', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'add_teacher.html'))
});

app.get('/addStudent', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'add_student.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login_student.html'))
});

app.get('/weather', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'weather.html'))
});

app.post('/register', (req, res) => {
    if (req.body == null) return;
    const username = req.body.UserName;
    const email = req.body.Email;
    const password = req.body.Password;
    console.log(`Received registeration data = Username: ${username}, Email: ${email}, Password: ${password}`);
    res.send('Registration successful!');
})

app.post('/autocomp', async(req, res)=>{
    const cityName = req.body.cityName;
    console.log(cityName);
    if(cityName != null) {
        const result = await apiWeather.apiAutoComplete(cityName);
        console.log(result);
        console.log(result.key);
        return res.status(200).json({massage: result});
    }
    return res.status(500).json({massage: "Server Error Acouried"});
})

app.post('/w_d', async (req, res)=>{
    const cityCode = req.body.cityCode;
    if (cityCode != null) {
        const result = await apiWeather.apiLocationWeatherDaily(cityCode);
        return res.status(200).json({massage: result});
    }
    return res.status(500).json({massage: "Server Error Acouried"});
})

app.post('/w_fd', async (req, res)=>{
    const cityCode = req.body.cityCode;
    if (cityCode != null) {
        const result_arr = await apiWeather.apiLocationWeatherFiveDays(cityCode);
        return res.status(200).json({massage: result_arr});
    }
    return res.status(500).json({massage: "Server Error Acouried"});
})

module.exports=app;