import dbConnect from "../../../library/mongo";
import Order from "../../../Models/Order";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;
    await dbConnect();
  if (method === "GET") {
    try {
      const order = await Order.findById(id);
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "PUT") {
    try {
      const order = await Order.findByIdAndUpdate;
    } catch (error) {
      res.status(200).json({ success: false });
    }
  }
  if (method === "DELETE") {
    try {
    } catch (error) {}
  }
};
export default handler;
