import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (mongoose.connections[0].readyState) {
      console.log("Already connected");
      return;
      //  Return the existing connection
    }
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to DB");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw new Error("Database connection failed");
  }
};

export default connectDB;

// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     if (mongoose.connections[0].readyState) {
//       console.log("Already connected");
//       return mongoose.connection.asPromise();
//     }

//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to DB");
//   } catch (error) {
//     console.error("Error connecting to the database:", error);
//     throw new Error("Database connection failed");
//   }
// };

// export default connectDB;
