import mongoose from "mongoose";
// schema create the table

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  hr: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    default: "bad",
  },
});

// creating table
export default mongoose.model("Task", taskSchema); /// will create a table name tasks

///queries
//lets create another file 
// do it now 