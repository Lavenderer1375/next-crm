import connectDB from "@/utils/connectDB";

export async function handleDBConnection(res) {
  try {
    await connectDB();
  } catch (error) {
    console.log("Catched an error in the node file:", error.message);
    res.status(500).json({
      status: "failed",
      message: "DB Connection Error",
      data: error.message,
    });
    return false;
  }
  return true;
}

//Instead of using this in every api file, I created the above function and imported it in the api files. reducing the code lines to be written in every file.
//export default async function handler(req, res) {
//   try {
//     await connectDB();
//   } catch (error) {
//     console.log("Catched an error in the node file:", error.message);
//     res.status(500).json({
//       status: "failed",
//       message: "DB Connection Error",
//       data: error.message,
//     });
//     return;
//   }
// }
