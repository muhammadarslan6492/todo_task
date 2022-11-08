import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';

const todoSchema = mongoose.Schema({
  title: String,
  todo: String,
  isDone: Boolean,
});

todoSchema.plugin(paginate);

const Todo = mongoose.model('Todo', todoSchema);

export default Todo;
