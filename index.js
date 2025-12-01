const express = require('express');

const app = express();
app.use(express.json());

const idCounter = 1;

app.post('/', (request, response) => {
    const task = {
        id: idCounter,
        text: request.body.text,
        done: false,
    };

    response.status(201).send(task);
});

app.get('/', (request, response) => {
    const tasks = [
        {
        id: idCounter,
        text: request.body.text,
        done: false,
        },
    ];

    response.status(200).send(tasks);
});

app.put('/:id', (request, response) => {

});

app.delete('/:id', (request, response) => {

});

app.listen(80);