import dbConnect from "../../../library/mongo";
import Product from "../../../Models/Product";

export default async function handler(req, res) {
  const { method, cookies } = req;
  const token = cookies.token;
  dbConnect();

  if (method === "GET") {
    try {
      const product = await Product.find();
      res.status(200).json(product);
    } catch (error) {
      res.json(error);
    }
  }
  if (method === "POST") {
    if (!token || token !== process.env.TOKEN) {
      return res.status(401).json("unauthorized");
    }
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
