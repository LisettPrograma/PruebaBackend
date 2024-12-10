import { getMascotaRepository, getMascotaByIdRepository, postMascotaRepository, putMascotaRepository, deleteMascotaRepository  } from "../repository/mascotaRepository.js";

export const getMascotaServices = () => {
    let respuestaRepository = getMascotaRepository();
    console.log(respuestaRepository);
    return 'Respuesta del getMascotaServices';
}

export const getMascotaByIdServices = (id) => {
    let respuestaRepository = getMascotaByIdRepository(id)
    console.log('El id recibido desde el services es: ' + id);
    return respuestaRepository;
}

export const postMascotaServices = (mascota) => {
    let respuestaRepository = postMascotaRepository(mascota);
    console.log('La mascota a agregar es: ' + JSON.stringify(mascota));
    return respuestaRepository;
}

export const putMascotaServices = (id, mascota) => {
    let respuestaRepository = putMascotaRepository(id, mascota);
    console.log('La mascota a actualizar es: ' + id + ' y sus nuevos datos son: ' +  JSON.stringify(mascota));
    return respuestaRepository;
}

export const deleteMascotaServices = (id) => {
    let respuestaRepository = deleteMascotaRepository(id);
    console.log('La mascota con el id: ' + id + 'fué borrada correctamente');
    return respuestaRepository;
}