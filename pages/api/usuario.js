import connect from "../../config/database";

export default async (req, res) => {
  if (req.method === "POST") {
    const { nome, email, telefone, professor } = req.body;

    if (!nome) {
      return res.json({ message: "Campo Nome é obrigatório" });
    }

    const { db } = await connect();
    const response = await db.collection("usuarios").insertOne({
      nome,
      email,
      telefone,
      professor,
    });

    return res.json(response.ops[0]);
  } else {
    return res.json({ message: "Error" });
  }
};
