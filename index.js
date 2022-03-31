const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let personal;
let wafs;
let css;
let pwa;
let bt;
let rtw;
let hcd;

app.get('/', (req, res) => {
    res.render('home', { personal });
});

app.get('/wafs', (req, res) => {
    console.log(wafs)
    res.render('wafs', { wafs });
});

app.post('/wafs', (req, res) => {
    personal = {
        "name": req.body.name,
        "number": req.body.number
    }
    res.render('wafs', { wafs });
});

app.get('/css', (req, res) => {
    res.render('css', { css });
});

app.post('/css', (req, res) => {
    wafs = {
        "teachers": req.body.teachers,
        "startDuration": req.body.start_duration,
        "endDuration": req.body.end_duration,
        "grade": `grade${req.body.grade}`,
        "difficulty": req.body.difficulty,
        "explanation": req.body.explanation,
        "understanding": req.body.understanding
    }
    res.render('css', { css });
});

app.get('/pwa', (req, res) => {
    res.render('pwa', { pwa });
});

app.post('/pwa', (req, res) => {
    css = {
        "teachers": req.body.teachers,
        "startDuration": req.body.start_duration,
        "endDuration": req.body.end_duration,
        "grade": `grade${req.body.grade}`,
        "difficulty": req.body.difficulty,
        "explanation": req.body.explanation,
        "understanding": req.body.understanding
    }
    res.render('pwa', { pwa });
});

app.get('/bt', (req, res) => {
    res.render('bt');
});

app.post('/bt', (req, res) => {
    res.render('bt');
});

app.get('/rtw', (req, res) => {
    res.render('rtw');
});

app.post('/rtw', (req, res) => {
    res.render('rtw');
});

app.get('/hcd', (req, res) => {
    res.render('hcd');
});

app.post('/hcd', (req, res) => {
    res.render('hcd');
});

app.post('/success', (req, res) => {
    res.render('success');
});

app.use((req, res) => {
    res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});