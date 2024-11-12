const User = require('./user');
const Item = require('./item');
const ToDoList = require('./todolist');


const user1 = new User('jean-dupont@gmail.com','Jean', 'Dupont', '12345678Mm*', new Date('2000-01-01'));

const user3 = '';


const item1 = new Item('test1', 'test1', Date.now());
const item2 = new Item('test 2', 'test2', Date.now());

const todolist = new ToDoList('todolist 1', user1);

const todolist2 = new ToDoList('todolist 2', user2);

const todolist3 = new ToDoList('todolist 3', user3);

test('not a user', () => {
    const user1 = '';
    const item1 = new Item('test1', 'test1', Date.now());
    const todolist = new ToDoList('todolist 1', user3);
    expect(todolist.add(item1)).toBe('not a user');
});

test('todolist valide', () => {
    const user1 = new User('jean-dupont@gmail.com','Jean', 'Dupont', '12345678Mm*', new Date('2020-01-01'));
    const item1 = new Item('test1', 'test1', Date.now());
    const todolist = new ToDoList('todolist 1', user1);
    expect(todolist.add(item1)).toBe(true);
});

test('todolist valide', () => {
    let user1 = new User('jean-dupont@gmail.com','Jean', 'Dupont', '12345678Mm*', new Date('2000-01-01'));
    const item1 = new Item('test1', 'test1', Date.now());
    const todolist = new ToDoList('todolist 1', user1);
    expect(todolist.add(item1)).toBe(true);
});

test('todolist valide', () => {
    let user1 = new User('jean-dupont@gmail.com','Jean', 'Dupont', '12345678Mm*', new Date('2000-01-01'));
    const item1 = new Item('test1', 'test1', Date.now());
    const todolist = new ToDoList('todolist 1', user1);
    expect(todolist.add(item1)).toBe(true);
});

test('valid todolist', () => {
    let user1 = new User('jean-dupont@gmail.com','Jean', 'Dupont', '12345678Mm*', new Date('2000-01-01'));
    const item1 = new Item('test1', 'test1', Date.now());
    const todolist = new ToDoList('todolist 1', user1);
    expect(todolist.add(item1)).toBe(true);
});



