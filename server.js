import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const PORT = 8000;
//middleware
app.use(express.json());
//Server listening the port

app.listen(PORT, (error) => {
  error &
    console.log(
      "Hey Kiran your testing server is running on http://localhost:${PORT}"
    );
});
