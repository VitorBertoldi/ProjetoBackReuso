const mongoose = require("mongoose");

const atividadeSchema = new mongoose.Schema({
  tipoAtividade: { type: String, required: true },
  dataAtividade: { type: Date, required: true },
  duracao: { type: Number, required: true },
  distancia: { type: Number, required: true },
  intensidade: { type: String, required: true },
  caloriasQueimadas: { type: Number, required: true },
  observacoes: { type: String, required: false },
});

const Atividade = mongoose.model("Atividade", atividadeSchema);

module.exports = { Atividade };
