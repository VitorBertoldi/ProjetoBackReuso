const mongoose = require("mongoose");

const metaSchema = new mongoose.Schema({
  id_usuario: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tipo_atividade: { type: String, required: true },
  valor_meta: { type: Number, required: true },
  data_inicial: { type: Date, required: true },
  data_final: { type: Date, required: true },
  status_meta: { type: String, required: true },
});

const Meta = mongoose.model("Meta", metaSchema);


module.exports = Meta;  
