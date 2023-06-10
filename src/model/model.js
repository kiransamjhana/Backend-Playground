// model does the queries

import TaskSchema from "./TaskSchema.js";

// C Create data indb
export const createTask = (taskObj) => {
  return TaskSchema(taskObj).save();
};
