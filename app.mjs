// Importación de módulos
import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Creación de la instancia
const app = express();

//Midleware para procesar el body de la app
app.use(express.json());

// Importación del router
import articleRouter from "./modules/routers/article.mjs";
import userRouter from "./modules/routers/user.mjs";
import commentRouter from "./modules/routers/comment.mjs";

// Uso del router
app.use(articleRouter);
app.use(userRouter);
app.use(commentRouter);

// Declaración de rutas
app.get("/", (req, res) => {
  res.send("Hello World!");
});


// Puerto a escuchar
app.listen(process.env.SERVER_PORT, () => {
  console.log(">>> Escuchando en el puerto " + process.env.SERVER_PORT + ".");
});