const {nuevaConexion} = require("../db/bd")


async function obetnerNom(req,res){
    const conexion = await nuevaConexion();
    const result = await conexion.query("SELECT * FROM holi");
    res.json(result[0]);
    conexion.end();
}
async function obtenerId(req,res){
    const conexion = await nuevaConexion();
    const id = req.params.id
    const result = await conexion.query("SELECT * FROM holi WHERE id_saludo =?",id);

    res.json(result[0]);
    conexion.end();
}

async function insertar(req,res){
    const conexion = await nuevaConexion();
    const {nom} = req.body
    const result = await conexion.query("INSERT INTO holi (nom) VALUES (?)",[nom]);
    res.send(result)
    conexion.end();
}


async function eliminar(req, res){

    const conexion = await nuevaConexion();

    const id= req.params.id
     await conexion.query("DELETE FROM holi WHERE id_saludo =?",[id]);

    res.send("se elimino tu maldito saludo")
    conexion.end();
}
async function actualizar(req, res){

    const conexion = await nuevaConexion();

    const id= req.params.id

    const {nom} = req.body
    await conexion.query("UPDATE holi SET nom =? WHERE id_saludo =?",[nom,id]);
    res.send("se actualizo tu maldito saludo")
    conexion.end();
}


module.exports = {
    obetnerNom,
    obtenerId,
    insertar,
    eliminar,
    actualizar
}