import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = 8080;
import path from "path";

const _dirname = path.resolve();
console.log(_dirname);
import { mongoConnect } from "./src/config/mongoDb.js";
mongoConnect();

// middleware
app.use(express.json());
app.use(cors());
app.use(express.static(_dirname + "/build"));

//api endpoints
import taskRouter from "./src/routers/taskRouter.js";
app.use("/api/v1/task", taskRouter);

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "server running as normal",
  });
});

// server listening the port
app.listen(PORT, (error) => {
  error && console.log(error.message);

  console.log(`
  server running at http://localhost:${PORT}
  `);
});
// the main file is also working nicely let ha
