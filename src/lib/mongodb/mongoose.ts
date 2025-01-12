import mongoose from "mongoose";

const initailized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);

  if (initailized) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    const mongoUri = process.env.MONGODB_URI;

    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined");
    }
    await mongoose.connect(mongoUri, {
      dbName: "next-state",
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection error: ", error);
  }
};
