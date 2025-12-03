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