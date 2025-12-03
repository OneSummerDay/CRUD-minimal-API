//  {
//     id: number,
//     text: string,
//     done: boolean,
//  };

const idCounter = 1;
const tasks = [];

const create = (body) => {
    const task = {
        id: idCounter,
        text: body.text,
        done: false,
    };

    idCounter += 1;
    tasks.push(task);
};

const read = () => {
    return [...tasks];
};

const update = (id, body) => {
    const task = tasks.find((one) => one.id == id);
    if (task) {
        task.text = body.text;
        task.done = body.done;
        return task;
    } else {
        return null;
    }
};