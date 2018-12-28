const mongoose = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5c2238418efd882de07fcb144';

Todo.findById(id).then((todo) => {
  console.log('Todo:', todo);
}).catch((e) => console.log(e));
