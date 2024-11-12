const User = require('./user');
const Item = require('./item');

class ToDoList{
    constructor(name,user){
        this.name = name;
        this.user = user;
        this.items = [];
    }

    add(item){

        if(!(item instanceof Item )){
            return 'not an item';
        }

        if(!(this.user instanceof User)){
            return 'not a user';
        }

        if(this.user.isValid()) {
            if(this.items.length < 10){
                this.items.push(item);
                return true;
            }else
                return 'list is full';
        }else{
            return 'unvalid user';
        }
    }
}

module.exports = ToDoList;