const mongoose = require("mongoose");

let isConnected = false; 

const connectDB = async () => {
  if (isConnected) {
    console.log("Conexão MongoDB já estabelecida.");
    return;
  }

  try {
    await mongoose.connect('mongodb+srv://bertoldivitor1:aFhZMVDDZcR4nBZo@cluster0.ccovx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    isConnected = true; 
    console.log("MongoDB conectado com sucesso.");
  } catch (err) {
    console.error("Erro ao conectar ao MongoDB", err);
    process.exit(1); 
  }
};

module.exports = connectDB;
