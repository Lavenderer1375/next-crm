import Customer from "@/models/Customer";
import { handleDBConnection } from "@/utils/dbHelper";

export default async function handler(req, res) {
  try {
    const dbConnected = await handleDBConnection(res);
    if (!dbConnected) return;
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    res.status(500).json({ status: "Failed", error: error.message });
    return;
  }

  if (req.method === "POST") {
    const data = req.body.data;

    if (!data.name || !data.lastName || !data.email)
      return res
        .status(400)
        .json({ status: "Failed", error: "Missing required fields" });

    try {
      const customer = await Customer.create(data);
      res.status(200).json({
        status: "Success",
        message: "customer created",
        data: customer,
      });
    } catch (error) {
      console.error("Error creating customer:", error.message);
      res.status(500).json({ status: "Failed", error: error.message });
    }
  }
}
