import Customer from "@/models/Customer";
import { handleDBConnection } from "@/utils/dbHelper";

export default async function handler(req, res) {
    const dbConnected = await handleDBConnection(res);
    if (!dbConnected) return;

  if (req.method === "DELETE") {
    const id = req.query.customerId;

    try {
      await Customer.deleteOne({ _id: id });
      res
        .status(200)
        .json({ status: "Success", message: "Customer deleted successfully" });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({
          status: "Failed",
          message: "Failed to delete customer",
          error: error.message,
        });
    }
  }
}
