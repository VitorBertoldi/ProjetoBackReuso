const express = require("express");
const metaController = require("../controller/metaController");
const router = express.Router();



const metaRoutes = (app) => {
    const router = express.Router();

    router.post("/metas", metaController.createMeta);
    router.get("/metas/:id", metaController.getMeta);
    router.get("/metas/user/:userId", metaController.getMetas);
    router.put("/metas/:id", metaController.updateMeta);
    router.delete("/metas/:id", metaController.deleteMeta);

    app.use('/api', router);
};

module.exports = metaRoutes;
