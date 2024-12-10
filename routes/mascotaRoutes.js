import {Router} from 'express';
import { getMascotaController, getMascotaByIdController, postMascotaController, putMascotaController, deleteMascotaController } from '../controller/mascotaController.js';
const router = Router();

router.get('/mascota', getMascotaController);

router.get('/mascota/porId', getMascotaByIdController);

router.get('/mascota/agregar', postMascotaController);

router.get('/mascota/actualizar', putMascotaController);

router.get('/mascota/delete', deleteMascotaController);

export default router