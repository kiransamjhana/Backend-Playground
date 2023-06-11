import express from "express";
import { createTask, readTasks } from "../model/TaskModel.js";
const router = express.Router();

router.get("/", async (req, res) => {
  //we need to get data form db
  const taskList = await readTasks();
  res.json({
    status: "success",
    message: "From Get method",
    taskList,
  });
});

router.post("/", async (req, res) => {
  try {
    const result = await createTask(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "New task has been added successfully",
        })
      : res.json({
          status: "success",
          message: "unable to add the data",
        });
  } catch (error) {
    console.log(error);
  }
});

router.patch("/", async (req, res) => {
  console.log(req.body);
  try {
    const { _id, type } = req.body;

    //update data in DB
    const result = await switchTask(_id, type);
    result?._id
      ? res.json({
          status: "success",
          message: "The task has been switeched",
        })
      : res.json({
          status: "success",
          message: "The task has been switeched",
        });
  } catch (error) {}
});

router.delete("/", (req, res) => {
  try {
    console.log(id);

    const { _id } = req.body;

    res.json({
      status: "success",
      message: "Task deleted successfully",
    });
  } catch (error) {}
  res.json({
    status: "success",
    message: "Task deleted successfully",
  });
});

export default router;
