// importamos dependencias
import express from "express";

// Encendemos el router 
const router = express.Router();

// importamos las rutas 
import { getProduct, 
         createProduct, 
         deleteProduct, 
         modifyProduct } 
         from "../controllers/product.mjs";


// Definimos la ruta para CREAR un producto
router.get("/createProduct", createProduct);
// Definimos la ruta para OBTENER un producto.
router.get("/getProduct", getProduct);
// Definimos la ruta para ELIMINAR un producto.
router.get("/deleteProduct", deleteProduct);
// Definimos la ruta para MODIFICAR un producto.
router.get("/modifyProduct", modifyProduct)

// exportamos el enrutador para que se pueda importar y utilizar
// en otros archivos de la aplicación.
export default router;