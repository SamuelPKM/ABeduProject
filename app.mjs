//Importación de módulos
import express from "express";

//Creación de la instancia
const app = express();

//Declaración de rutas
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Puerto a escuchar
app.listen(3000, () => {
  console.log(">>> Escuchando en el puerto 3000.");
});
