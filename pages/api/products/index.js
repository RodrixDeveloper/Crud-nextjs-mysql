import { pool } from "../../../config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProduct(req, res);

    case "POST":
      return await saveProduct(req, res);
  }
}

const getProduct = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM products");
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const saveProduct = async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const [result] = await pool.query("INSERT INTO products SET ?", {
      name: name,
      price: price,
      description: description,
    });

    return res
      .status(200)
      .json({ name, description, price, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
