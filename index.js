const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/wafs', async (req, res) => {
    const test = { "name": req.body.name, "number": req.body.number }
    console.log(test)
    res.render('wafs');
});

app.post('/css', (req, res) => {
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