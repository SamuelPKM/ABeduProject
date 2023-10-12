// exportamos una funcion para obtener productos.
export function getProduct(req, res){
    res.json([]);  
};

// exportamos una funcion para crear productos.
export function createProduct(req,res){
    // nos muestra el body del objeto en consola
    console.log(req.body);
    // Nos responde con un texto en formato HTML
    res.send("Created Product");
};

// Exportamos una funcion para borrar productos.
export function deleteProduct(req,res){
    console.log(req.body);
    res.send("Deleted Product");
}

// Exportamos una funcion para modificar productos.
export function modifyProduct(req, res) {
    console.log(req.body);
    res.send("Modified Product")

}
