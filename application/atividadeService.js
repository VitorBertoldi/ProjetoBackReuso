const AtividadeRepository = require("../repositories/atividadeRepository");

class AtividadeService {
  async criarAtividade(atividadeData) {
    return await AtividadeRepository.createAtividade(atividadeData);
  }

  async getAtividadeById(id) {
    return await AtividadeRepository.getById(id);
  }

  async getAllAtividades() {
    return await AtividadeRepository.getAllAtividades();
  }

  async atualizarAtividade(id, updateData) {
    return await AtividadeRepository.update(id, updateData);
  }

  async deletarAtividade(id) {
    return await AtividadeRepository.delete(id);
  }
}

module.exports = new AtividadeService();
