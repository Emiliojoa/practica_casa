const mysql2 = require("mysql2/promise")// migrar todo a impor y export

const nuevaConexion= async()=>{
    
    const conexion = await mysql2.createConnection({
        host: "localhost",
        user: "root",
        database: "basedatos"
    })//mirando como conectar a una base de datos
    
    return conexion;
}
module.exports={
 nuevaConexion
}