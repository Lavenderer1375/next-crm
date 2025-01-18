import Customer from "@/models/Customer";
import { handleDBConnection } from "@/utils/dbHelper";

export default async function handler(req, res) {
  const dbConnected = await handleDBConnection(res);
  if (!dbConnected) return;

  if (req.method === "PATCH") {
    const id = req.query.customerId;
    const data = req.body.data;

    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.postalCode = data.postalCode;
      customer.date = data.date;
      customer.products = data.products;
      customer.updatedAt = Date.now();
      await customer.save(); // Add await here
      res.status(200).json({
        status: "Success",
        message: "Customer Updated successfully",
        data: customer,
      });
    } catch (error) {
      console.error("Error updating customer:", error.message);
      res.status(500).json({ status: "Failed", error: error.message });
    }
  }
}
