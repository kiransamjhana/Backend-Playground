import express from "express";
import { createTask, deleteTaskById, readTasks } from "../model/TaskModel.js";
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

router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  const result = await deleteTaskById(_id);
  try {
    result?._id
      ? res.json({
          status: "success",
          message: "The task has been deleted successfully",
        })
      : res.json({
          status: "error",
          message: "Unable to delete the task ",
        });
  } catch (error) {
    console.log(error);

    res.json({
      status: "error",
      message: "Error deleting the task",
    });
  }
});
// taskrouter please deletet ths comment this just for testing
//Thank you for pushing me

export default router;
