import connect from "../../../config/database";

export default async (req, res) => {
  const {
    nome,
    email,
    telefone,
    professor,
    cursos,
    horarios_disponiveis,
    locais_disponiveis,
  } = req.body;

  const { db } = await connect();

  const response = await db.collection("usuarios").insertOne({
    nome,
    email,
    telefone,
    professor,
    cursos,
    horarios_disponiveis,
    locais_disponiveis,
  });

  return res.json(response.ops[0]);
};
