import mongoose from "mongoose";

export const conectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://dukoooo:007007007@cluster0.n8q5zs1.mongodb.net/blog-app"
  );
  console.log("DB Conected");
};
