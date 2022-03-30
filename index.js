const express = require('express');
const app = express();
const port = 6666;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use((req, res) => {
    res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});