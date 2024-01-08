import mongoose from "mongoose";

const connectToDB = async () => {
  mongoose
    .connect(process.env.DB)
    .then(() => {
      console.log("Mongo DB connected successfully");
    })
    .catch((err) => {
      console.log("Mongo DB not connected : ", err);
    });
};

export default connectToDB;
