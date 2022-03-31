const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

let personal;
let wafs;
let rescue;
let pwa;
let bt;
let rtw;
let hcd;

app.get('/', (req, res) => {
    res.render('home', { personal });
});

app.get('/:id', (req, res) => {
    const route = req.params.id;

    if(route === 'wafs') {
        res.render('wafs', { wafs });
    }
    if(route === 'rescue') {
        res.render('rescue', { rescue });
    }
    if(route === 'pwa') {
        res.render('pwa', { pwa });
    }
    if(route === 'bt') {
        res.render('bt', { bt });
    }
    if(route === 'rtw') {
        res.render('rtw', { rtw });
    }
    if(route === 'hcd') {
        res.render('hcd', { hcd });
    }
});

app.post('/wafs', (req, res) => {
    personal = {
        "name": req.body.name,
        "number": req.body.number
    }
    res.render('wafs', { wafs });
});

app.post('/rescue', (req, res) => {
    wafs = {
        "teachers": req.body.teachers,
        "startDuration": req.body.start_duration,
        "endDuration": req.body.end_duration,
        "grade": `grade${req.body.grade}`,
        "difficulty": req.body.difficulty,
        "explanation": req.body.explanation,
        "understanding": req.body.understanding
    }
    res.render('rescue', { rescue });
});

app.post('/pwa', (req, res) => {
    rescue = {
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

app.post('/bt', (req, res) => {
    pwa = {
        "teachers": req.body.teachers,
        "startDuration": req.body.start_duration,
        "endDuration": req.body.end_duration,
        "grade": `grade${req.body.grade}`,
        "difficulty": req.body.difficulty,
        "explanation": req.body.explanation,
        "understanding": req.body.understanding
    }
    res.render('bt', { bt });
});

app.post('/rtw', (req, res) => {
    bt = {
        "teachers": req.body.teachers,
        "startDuration": req.body.start_duration,
        "endDuration": req.body.end_duration,
        "grade": `grade${req.body.grade}`,
        "difficulty": req.body.difficulty,
        "explanation": req.body.explanation,
        "understanding": req.body.understanding
    }
    res.render('rtw', { rtw });
});

app.post('/hcd', (req, res) => {
    rtw = {
        "teachers": req.body.teachers,
        "startDuration": req.body.start_duration,
        "endDuration": req.body.end_duration,
        "grade": `grade${req.body.grade}`,
        "difficulty": req.body.difficulty,
        "explanation": req.body.explanation,
        "understanding": req.body.understanding
    }
    res.render('hcd', { hcd });
});

app.post('/success', (req, res) => {
    hcd = {
        "teachers": req.body.teachers,
        "startDuration": req.body.start_duration,
        "endDuration": req.body.end_duration,
        "grade": `grade${req.body.grade}`,
        "difficulty": req.body.difficulty,
        "explanation": req.body.explanation,
        "understanding": req.body.understanding
    }
    res.render('success');
});

app.use((req, res) => {
    res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});