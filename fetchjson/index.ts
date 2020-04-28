import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos?id=1';

interface Todo {
  id: Number;
  title: String;
  completed: boolean;
}

const logTodo = (id: Number, title: String, completed: boolean) => {
  console.log(`
    The todo with ID: ${id}
    Has a title of ${title}
    Is it finished? ${completed}
  `);
};

axios.get(url).then(res => {
  const todo: Todo = res.data[0];

  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  logTodo(id, title, finished);
});
