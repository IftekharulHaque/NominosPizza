import dbConnect from "../../../library/mongo";
import Order from "../../../Models/Order";

const handler = async (req, res) => {
  const {
    method,
    query: { id },
  } = req;

  if (method === "GET") {
    try {
      await dbConnect();
      const orders = await Order.find({});
      res.status(200).json({ success: true, data: orders });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  }
  if (method === "PUT") {
    try {
      await dbConnect();
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
