const express = require("express");
const cors = require("cors"); 
const connectDB = require("./config/dbConfig");
const indexRoute = require('./routes/indexRoutes');

const app = express();
app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:3001', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type'], 
};

app.use(cors(corsOptions)); 

connectDB();

indexRoute(app);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
