const mysql2 = require("mysql2/promise")

const nuevaConexion= async()=>{
    
    const conexion = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        database: "basedatos"
    })
    return conexion;
}
module.exports={
 nuevaConexion
}