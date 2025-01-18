import { handleDBConnection } from "@/utils/dbHelper";
import Customer from "@/models/Customer";

export default async function handler(req, res) {
  const dbConnected = await handleDBConnection(res);
  if (!dbConnected) return;

  if (req.method == "GET") {
    const id = req.query.customerId;

    try {
      const customer = await Customer.findOne({ _id: id });
      res.status(200).json({ status: "Success", data: customer });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .json({ status: "Failed", message: "Error fetching customer data" });
    }
  }
}
