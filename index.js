const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

const fsReadFile = (res, route) => {
    if (route !== 'manifest.json') {
        fs.readFile(`${route}.json`, 'utf8', function (err, data) {
            if (err) throw err;
            let info
            if (data) {
                info = JSON.parse(data);
            }
    
            if(route === 'wafs') {
                res.render('wafs', { wafs: info });
            }
            if(route === 'rescue') {
                res.render('rescue', { rescue: info });
            }
            if(route === 'pwa') {
                res.render('pwa', { pwa: info });
            }
            if(route === 'bt') {
                res.render('bt', { bt: info });
            }
            if(route === 'rtw') {
                res.render('rtw', { rtw: info });
            }
            if(route === 'hcd') {
                res.render('hcd', { hcd: info });
            }  
        });
    }

}

app.get('/', (req, res) => {
    fs.readFile('personal.json', 'utf8', function (err, data) {
        if (err) throw err;
        let info
        if (data) {
            info = JSON.parse(data);
        }

        res.render('home', {
            personal: info
        });
    
    });

});

app.get('/:id', (req, res) => {
    const route = req.params.id;
    fsReadFile(res, route)
});

app.post('/wafs', (req, res) => {
    const personal = {
        "name": req.body.name,
        "number": req.body.number
    }
    const stringData = JSON.stringify(personal);

    fs.writeFile('personal.json', stringData, (err) => {
        if(err) {
            console.log(err)
        }
    });
    fsReadFile(res, 'wafs')
});

app.post('/rescue', (req, res) => {
    const wafs = {
        "teachers": req.body.teachers,
        "startDuration": req.body.start_duration,
        "endDuration": req.body.end_duration,
        "grade": `grade${req.body.grade}`,
        "difficulty": req.body.difficulty,
        "explanation": req.body.explanation,
        "understanding": req.body.understanding
    }
    const stringData = JSON.stringify(wafs)

    fs.writeFile('wafs.json', stringData, (err) => {
        if(err) {
            console.log(err)
        }
    })
    fsReadFile(res, 'rescue')
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
    const stringData = JSON.stringify(rescue);

    fs.writeFile('rescue.json', stringData, (err) => {
        if(err) {
            console.log(err)
        }
    });
    fsReadFile(res, 'pwa')
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
    const stringData = JSON.stringify(pwa);

    fs.writeFile('pwa.json', stringData, (err) => {
        if(err) {
            console.log(err)
        }
    });
    fsReadFile(res, 'bt')
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
    const stringData = JSON.stringify(bt);

    fs.writeFile('bt.json', stringData, (err) => {
        if(err) {
            console.log(err)
        }
    });
    fsReadFile(res, 'rtw')
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
    const stringData = JSON.stringify(rtw);

    fs.writeFile('rtw.json', stringData, (err) => {
        if(err) {
            console.log(err)
        }
    });
    fsReadFile(res, 'hcd')
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
    const stringData = JSON.stringify(hcd);

    fs.writeFile('hcd.json', stringData, (err) => {
        if(err) {
            console.log(err)
        }
    });
    res.render('success');
});

app.use((req, res) => {
    res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});