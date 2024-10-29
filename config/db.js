import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnection = async () => {
  try {
    const conInfo = await mongoose.connect(`${process.env.DB_URI}/${DB_NAME}`);
    console.log(`connected sucessfully with "${conInfo.connection.name}"`);
  } catch (error) {
    console.log(`not connected to DB, error is:-`, error);
    process.exit(1);
  }
};

export default dbConnection;
