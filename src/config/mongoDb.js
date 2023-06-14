import mongoose from "mongoose";
export const mongoConnect = async () => {
  try {
    const con = await mongoose.connect("mongodb://localhost:27017/deletedb");
    con && console.log("mongo is connect");
  } catch (error) {
    console.log(err.message);
  }
};
