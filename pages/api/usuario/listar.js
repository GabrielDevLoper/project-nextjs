import connect from "../../../config/database";

export default async (req, res) => {
  if (req.method === "GET") {
    const { db } = await connect();

    const response = await db.collection("usuarios").find();

    return res.json(response);
  } else {
    return res.json({ message: "Error" });
  }
};
