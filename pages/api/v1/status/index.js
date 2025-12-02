import database from "../../../../infra/database.js";

function status(req, res) {
  res.status(200).json({ message: "Mengão 4x Campeão da América" });
}

export default status;
