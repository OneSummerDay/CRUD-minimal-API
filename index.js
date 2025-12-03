const express = require('express');
const db = require('./db')

const app = express();
app.use(express.json());


app.post('/', (request, response) => {
    

    response.status(201).send(task);
});

app.get('/', (request, response) => {
    const tasks = [
        {
        id: idCounter,
        text: 'Eat icecream',
        done: false,
        },
    ];

    response.status(200).send(tasks);
});

app.put('/:id', (request, response) => {
    const task = {
        id: request.params.id,
        text: request.body.text,
        done: request.body.done,
    };

    response.status(200).send(task);
});

app.delete('/:id', (request, response) => {
    response.sendStatus(205);
});

app.listen(80);