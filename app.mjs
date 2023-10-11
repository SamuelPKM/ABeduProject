// Importación de módulos
import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Creación de la instancia
const app = express();

// Importación del router
import articleRouter from "./modules/routers/article.mjs";

// Declaración de rutas
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Uso del router
app.use(articleRouter);

// Puerto a escuchar
app.listen(process.env.SERVER_PORT, () => {
  console.log(">>> Escuchando en el puerto " + process.env.SERVER_PORT + ".");
});