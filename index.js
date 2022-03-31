const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let personal;
let wafs;

app.get('/', (req, res) => {
    res.render('home', { personal });
});

app.post('/wafs', (req, res) => {
    personal = {
        "name": req.body.name,
        "number": req.body.number
    }
    res.render('wafs', { wafs });
});

app.post('/css', (req, res) => {
    wafs = {
        "teachers": req.body.teachers,
        "startDuration": req.body.start_duration,
        "endDuration": req.body.end_duration,
        "grade": req.body.grade,
        "difficulty": req.body.difficulty,
        "explanation": req.body.explanation,
        "understanding": req.body.understanding
    }
    res.render('css');
});

app.post('/pwa', (req, res) => {
    res.render('pwa');
});

app.post('/bt', (req, res) => {
    res.render('bt');
});

app.post('/rtw', (req, res) => {
    res.render('rtw');
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