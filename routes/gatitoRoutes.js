//en el routes no va logica por eso la callback va en el controler
import { Router } from "express";  
import { getGatitoController, postGatitoController, getGatitoByIdController, putGatitoController, deleteGatitoController } from "../controller/gatitoController.js"; 
const router = Router();//instancia de metodo router

router.get('/gatito', getGatitoController)

router.get('/gatito/porId/:id', getGatitoByIdController)

router.post('/gatito/agregar', postGatitoController) //router.get q recibe 2 parametros: la ruta y una callback

router.put('/gatito/actualizar/:id', putGatitoController)

router.delete('/gatito/delete/:id', deleteGatitoController)

export default router