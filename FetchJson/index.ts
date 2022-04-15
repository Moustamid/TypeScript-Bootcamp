import axios from 'axios';

const url = "https://jsonplaceholder.typicode.com/todos/10";

interface Todo {
    id : number;
    title: string;
    completed: boolean;
}

axios.get(url).then( response => {
    const todo : Todo = response.data as Todo;
    
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id ,  title , completed );

});

const logTodo = (id : number , title : string , completed : boolean) => {
    console.log(`
     The Todo with Id : ${id}
     Has a title of : ${title}
     Is it complete ? : ${completed}
    `);
} ;

// .1 tsc index.ts
// .2 node index.js
//.3 or ts-node index.ts