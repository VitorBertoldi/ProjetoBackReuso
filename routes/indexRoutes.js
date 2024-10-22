const userRoutes = require('./userRoutes');  
const metaRoutes = require('./metaRoutes');  
const atividadeRoutes = require('./atividadeRoutes'); 


function indexRoute(app) {
    userRoutes(app);
    metaRoutes(app);
    atividadeRoutes(app);
}

module.exports = indexRoute;