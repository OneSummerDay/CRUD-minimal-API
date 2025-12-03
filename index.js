const express = require('express');
const db = require('./db');

const app = express();
app.use(express.json());


app.post('/', (request, response) => {
    const task = db.create(request.body);
    response.status(201).send(task);
});

app.get('/', (request, response) => {
    const tasks = db.read();
    response.status(200).send(tasks);
});

app.put('/:id', (request, response) => {
    const task = db.update(request.params.id);
    response.status(200).send(task);
});

app.delete('/:id', (request, response) => {
    response.sendStatus(205);
});

app.listen(80);