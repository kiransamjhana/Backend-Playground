//Creating tables
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  expense: {
    type: "string",
    required: true,
  },
  hour: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("expense", taskSchema); // creates table
