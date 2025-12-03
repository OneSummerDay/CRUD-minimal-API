//  {
//     id: number,
//     text: string,
//     done: boolean,
//  };

const idCounter = 1;
const tasks = [];

exports.create = (body) => {
    const task = {
        id: idCounter,
        text: body.text,
        done: false,
    };

    idCounter += 1;
    tasks.push(task);
};

exports.read = () => {
    return [...tasks];
};

exports.update = (id, body) => {
    const task = tasks.find((one) => one.id == id);
    if (task) {
        task.text = body.text;
        task.done = body.done;
        return task;
    } else {
        return null;
    }
};

exports.deleteOne = (id) => {
    const index = tasks.findIndex((one) => one.id == id);
    if (index >= 0) {
        tasks.splice(index, 1);
    }
};