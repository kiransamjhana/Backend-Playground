import mongoose from "mongoose";

export const mongoConnect = async () => {
  try {
    const dbLink =
      "mongodb+srv://<username>:0rHNgz7vp62hFczk@cluster0.ceqpjis.mongodb.net/?retryWrites=true&w=majority";
    const con = await mongoose.connect("mongodb://localhost:27017/nottododb");

    con && console.log("mongo is connected");
  } catch (error) {
    console.log(error);
  }
};
