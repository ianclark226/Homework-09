const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));

app.get('/', (_, res) => {
    const filePath = path.resolve(__dirname, '..', 'public','index.html');

    res.sendFile(filePath);
});

app.get('/notes', (_, res) => {
    const filePath = path.resolve(__dirname, '..', 'public', 'notes.html');

    res.sendFile(filePath);
});

app.get('/index.js', (_, res) => {
    const filePath = path.resolve(__dirname, '..', 'public', 'notes.html');

    res.sendFile(filePath);
});



app.use('*', (_, res) => {
    res.redirect('/');
});





app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});

