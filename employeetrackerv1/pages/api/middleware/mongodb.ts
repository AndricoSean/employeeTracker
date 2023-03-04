import mongoose from "mongoose";

const connectDB = (handler: any) => async (req: any, res: any) => {
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }

  const connString = process.env.MONGODB_URL as string;
  await mongoose.connect(connString);
  return handler(req, res);
};

export default connectDB;
