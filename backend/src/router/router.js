const { Router } = require("express")

const router= Router()

const { obetnerNom, insertar, actualizar, obtenerId, eliminar }=require("../controllers/controladores")

router.get("/nombres", obetnerNom)
router.get("/nombres/:id", obtenerId)

router.post("/nombres", insertar)

router.put("/nombres/:id_saludo", actualizar)

router.delete("/nombres/:id_saludo", eliminar)

module.exports = router