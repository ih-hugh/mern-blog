import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  username: { type: 'String', required: true },
  postID: { type: 'String', required: true },
  content: { type: 'String', required: true },
  datetime: { type: 'Date', default: Date.now, required: true },
});

export default mongoose.model('Comment', commentSchema);
