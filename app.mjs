//Importación de módulos
import express from "express";
import dotenv from "dotenv";
dotenv.config();

//Creación de la instancia
const app = express();

//Declaración de rutas
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Puerto a escuchar
app.listen(process.env.SERVER_PORT, () => {
  console.log(">>> Escuchando en el puerto " + process.env.SERVER_PORT + ".");
});
