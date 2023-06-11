// model does the queries

import TaskSchema from "./TaskSchema.js";

// C Create data in db
export const createTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};

//read data from DB
export const readTasks = () => {
  return TaskSchema.find();
};
// id as an string
export const switchTask = (_id, type) => {
  return TaskSchema.findByIdAndUpdate(_id, { type });
};
