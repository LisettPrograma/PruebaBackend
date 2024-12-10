export const getGatitoRepository = () => {
    return 'Retornando gatitos de la BD';
}

export const getGatitoByIdRepository = (id) => {
    console.log('Se muestra el gatito' + id);
    return 'un gatito de la BD';
}

export const postGatitoRepository = (gatito) => {
    console.log('Se muestra el gatito' + JSON.stringify(gatito));
    return 'se agrego un gatito';
}

export const putGatitoRepository = (id, gatito) => {
    console.log('El gato actualizado es: ' + id + 'y sus propiedades: ' + JSON.stringify(gatito));
    return 'gato actualizado';
}

export const deleteGatitoRepository = (id) => {
    console.log('El gato: ' + id + 'se borró');
    return 'gato borrado';
}
