const { Atividade } = require("../models/atividadeModel");

class AtividadeRepository {
  async createAtividade(atividadeData) {
    const atividade = new Atividade(atividadeData);
    return await atividade.save();
  }

  async getAllAtividades() {
    return await Atividade.find();
  }

  async getById(id) {
    try {
      const atividade = await Atividade.findById(id);
      if (!atividade) {
        throw new Error("Atividade não encontrada");
      }
      return atividade;
    } catch (error) {
      throw error;
    }
  }

  async update(id, updateData) {
    const atividade = await Atividade.findByIdAndUpdate(id, updateData, { new: true });
    if (!atividade) {
      throw new Error("Atividade não encontrada para atualização");
    }
    return atividade;
  }

  async delete(id) {
    const resultado = await Atividade.findByIdAndDelete(id);
    if (!resultado) {
      throw new Error("Atividade não encontrada para exclusão");
    }
    return resultado;
  }
}

module.exports = new AtividadeRepository();
