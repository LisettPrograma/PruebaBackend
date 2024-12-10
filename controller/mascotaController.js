
import { getMascotaServices, getMascotaByIdServices, postMascotaServices, putMascotaServices, deleteMascotaServices } from "../services/mascotaServices.js";

export const getMascotaController = (req, res) => {
    let respuestaService = getMascotaServices();
    console.log(respuestaService);
    res.send('Mostrando una mascota');
}

export const getMascotaByIdController = (req, res) => {
    let respuestaService = getMascotaByIdServices(req.params.id);
    console.log(respuestaService);
    res.send('Mostrando una mascota por Id ' + req.params.id );
}

export const postMascotaController = (req, res) => {
    const mascota = req.body;
    let respuestaService = postMascotaServices(mascota);
    console.log(respuestaService);
    res.send('agregando mascota');
}

export const putMascotaController = (req, res) => {
    const mascota = req.body;
    const id = req.params.id;
    let respuestaService = putMascotaServices(id, mascota);
    console.log(respuestaService)
    res.send('actualizando mascota');
}

export const deleteMascotaController = (req, res) => {
    const id = req.params.id;
    let respuestaService = deleteMascotaServices(id);
    console.log(respuestaService);
    res.send('borrando mascota');
}