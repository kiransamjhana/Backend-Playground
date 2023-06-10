import express from "express";
import { createTask } from "../model/TaskModel.js";
const router = express.Router();

let fakeDb = [
  {
    task: "Watching tv",
    hr: 33,
    _id: "j234l35jho3",
  },
  {
    task: "cooking ",
    hr: 3,
    _id: "ssdsd",
  },
  {
    task: "coding ",
    hr: 333,
    _id: "aldsfjk390",
  },
  {
    task: "coding ",
    hr: 333,
    _id: "sd3ddcd",
    type: "entry",
  },
];

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "From Get method",
    fakeDb,
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

router.patch("/", (req, res) => {
  console.log(req.body);
  const { _id, type } = req.body;
  //update data in arrary
  // loop through the array and find matching _id and update the type

  fakeDb = fakeDb.map((item) => {
    if (item._id === _id) {
      return { ...item, type };
    }
    return item;
  });

  res.json({
    status: "success",
    message: "The task has been switeched",
  });
});

router.delete("/", (req, res) => {
  const { _id } = req.body;
  fakeDb = fakeDb.filter((item) => item._id !== _id);
  res.json({
    status: "success",
    message: "Task deleted successfully",
  });
});

export default router;
