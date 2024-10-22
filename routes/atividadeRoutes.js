const express = require("express");
const atividadeController = require("../controller/atividadeController");
const router = express.Router();

const atividadeRoutes = (app) => {
    const router = express.Router();

    router.post("/atividades", atividadeController.criarAtividade);
    router.get("/atividades/:id", atividadeController.getAtividadeById);
    router.get("/atividades", atividadeController.getAllAtividades);
    router.put("/atividades/:id", atividadeController.atualizarAtividade);
    router.delete("/atividades/:id", atividadeController.deletarAtividade);

    app.use('/api', router);
};

module.exports = atividadeRoutes;
