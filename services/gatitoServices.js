import { deleteGatitoRepository, getGatitoByIdRepository, getGatitoRepository, postGatitoRepository, putGatitoRepository,  } from "../repository/gatitoRepository.js";

export const getGatitoServices = () => {
    let respuestaRepository = getGatitoRepository();
    console.log(respuestaRepository);
    return 'Respuesta del getGatitoServices';
} 

export const getGatitoByIdServices = (id) => {
    let respuestaRepository = getGatitoByIdRepository(id);
    console.log('El id recibido desde el controller es: ' + id);
    return respuestaRepository;
} 

export const postGatitoServices = (gatito) => {
    let respuestaRepository = postGatitoRepository(gatito);
    console.log('El gato es: ' + JSON.stringify(gatito));
    return respuestaRepository;
} 

export const putGatitoServices = (id, gatito) => {
    let respuestaRepository = putGatitoRepository(id, gatito);
    //console.log('El gato a actualizar es : ' + id + ' y sus nuevos datos son: '  + JSON.stringify(gatito));
    return respuestaRepository;
} 

export const deleteGatitoServices = (id) => {
    let respuestaRepository = deleteGatitoRepository(id);
    //console.log('el gato con el id: ' + id + ' fue borrado corrrectamente');
    return respuestaRepository;
}