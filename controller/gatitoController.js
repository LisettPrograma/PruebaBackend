import { getGatitoServices, getGatitoByIdServices, postGatitoServices, putGatitoServices, deleteGatitoServices } from "../services/gatitoServices.js";
export const getGatitoController = (req, res) => {
    let respuestaService = getGatitoServices(); 
    console.log(respuestaService);
    res.send('Mostrando gatito')//respuesta a la pagina
}

export const getGatitoByIdController = (req, res) => {
    let respuestaService = getGatitoByIdServices(req.params.id);
    console.log(respuestaService);
    //obtener a través del parametro req el query params
    res.send('El Id es: ' + req.params.id);
}

export const postGatitoController = (req, res) => {
    //const {nombre, raza, edad, sexo} = req.body
    //res.send(`Agregando el gatito: ${nombre} de raza ${raza} de ${edad} años de edad y sexo ${sexo}` )
    const gatito = req.body
    let respuestaService = postGatitoServices(gatito)
    console.log(respuestaService);
    res.send (gatito);
}

export const putGatitoController = (req, res) => {
    //const {nombre, raza, edad, sexo} = req.body
    //res.send(`Actualizando gatito ${nombre} de raza ${raza} con ${edad} años de edad y sexo ${sexo}`)
    const gatito = req.body
    const id = req.params.id;
    let respuestaService = putGatitoServices(id, gatito);
    console.log(respuestaService);
    res.send('Gato actualizado correctamente')
}

export const deleteGatitoController = (req, res) => {
    const id = req.params.id;
    let respuestaService = deleteGatitoServices(id);
    console.log(respuestaService);
    res.send('Gato eliminado correctamente');
}