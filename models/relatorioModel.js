const mongoose = require("mongoose");

const relatorioSchema = new mongoose.Schema({
  tipo: { type: String, required: true },
  dataInicio: { type: Date, required: true },
  dataFim: { type: Date, required: true },
  dados: { type: Array, default: [] },
});

class Relatorio {
  constructor(tipo, dataInicio, dataFim) {
    this.tipo = tipo;
    this.dataInicio = dataInicio;
    this.dataFim = dataFim;
  }

  async gerarRelatorio() {
    throw new Error("Método 'gerarRelatorio' deve ser implementado nas subclasses.");
  }

  async salvarRelatorio() {
    const relatorioModel = mongoose.model("Relatorio", relatorioSchema);
    const relatorio = new relatorioModel({
      tipo: this.tipo,
      dataInicio: this.dataInicio,
      dataFim: this.dataFim,
    });
    return await relatorio.save();
  }
}

class RelatorioSemanal extends Relatorio {
  async gerarRelatorio() {
    console.log(`Gerando relatório semanal de ${this.dataInicio} a ${this.dataFim}`);
    await this.salvarRelatorio();
  }
}

class RelatorioMensal extends Relatorio {
  async gerarRelatorio() {
    console.log(`Gerando relatório mensal de ${this.dataInicio} a ${this.dataFim}`);
    await this.salvarRelatorio();
  }
}

module.exports = {
  Relatorio,
  RelatorioSemanal,
  RelatorioMensal,
};
