const { Router } = require("express")

const router= Router()

const { obetnerNom, insertar, actualizar, obtenerId, eliminar }=require("../controllers/controladores")

router.get("/nombres", obetnerNom)
router.get("/nombres/:id", obtenerId)

router.post("/nombres", insertar)

router.put("/nombres/:id", actualizar)

router.delete("/nombres/:id", eliminar)

module.exports = router