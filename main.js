const User = require('./user');
const ToDoList = require('./todolist');
const Item = require('./item');

const user1 = new User('jean-dupont@gmail.com','Jean', 'Dupont', '12345678Mm*', new Date('2000-01-01'));
const user2 = new User('jean-dupont@gmail.com','Jean', 'Dupont', '12345678Mm*', new Date('2022-01-01'));

const user3 = '';


const item1 = new Item('test1', 'test1', Date.now());
const item2 = new Item('test 2', 'test2', Date.now());

const todolist = new ToDoList('todolist 1', user1);

const todolist2 = new ToDoList('todolist 2', user2);

const todolist3 = new ToDoList('todolist 3', user3);


todolist.add(item1);
todolist.add(item2);
todolist.add(item2);
todolist.add(item2);
todolist.add(item2);
todolist.add(item2);
todolist.add(item2);
todolist.add(item2);
todolist.add(item2);
todolist.add(item2);


todolist.add(item2);

todolist2.add(item1);

todolist3.add(item1);




console.log(todolist.items);

console.log(todolist);