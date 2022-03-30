const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/wafs', (req, res) => {
    res.render('wafs');
})

app.post('/wafs', (req, res) => {
    res.render('wafs');
})

app.post('/css', (req, res) => {
    res.render('css');
})

app.use((req, res) => {
    res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});