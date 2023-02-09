import { pool } from "@/config/db";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      return await getProduct(req, res);

    case "DELETE":
      return await deleteProduct(req, res);

    case "PUT":
      return await updateProduct(req, res);
  }
}

const getProduct = async (req, res) => {
  try {
    const { id } = req.query;
    const [result] = await pool.query("SELECT * FROM products WHERE id  = ? ", [
      id,
    ]);
    return res.status(200).json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.query;
    await pool.query("DELETE FROM products WHERE id  = ? ", [id]);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.query;
  const { name, description, price } = req.body;
  try {
    await pool.query(
      "UPDATE products SET name = ?, description = ?, price = ? WHERE id = ?",
      [name, description, price, id]
    );
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
