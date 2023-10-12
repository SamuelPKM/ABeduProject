// Importación de módulos
import express from "express";
import dotenv from "dotenv";
dotenv.config();

// Creación de la instancia
const app = express();

//Midleware para procesar el body de la app
app.use(express.json());

// Importación del router
import productRouter from "./modules/routers/product.mjs";
import userRouter from "./modules/routers/user.mjs";
import commentRouter from "./modules/routers/comment.mjs";

// Uso del router
app.use(productRouter);
app.use(userRouter);
app.use(commentRouter);

// Declaración de ruta por default en process.env.SERVER_PORT 
app.get("/", (req, res) => {
  res.send("Hello World!");
});


// Puerto a escuchar
app.listen(process.env.SERVER_PORT, () => {
  console.log(">>> Escuchando en el puerto " + process.env.SERVER_PORT + ".");
});