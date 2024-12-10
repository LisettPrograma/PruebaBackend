export const getMascotaRepository = () => {
    return 'Retornando mascotas de la BD';
}

export const getMascotaByIdRepository = (id) => {
    console.log('Se muestra el id: ' + id);
    return 'Un gatito de la BD';
}

export const postMascotaRepository = (mascota) => {
    console.log('Se muestra la mascota: ' + JSON.stringify(mascota));
    return 'Se agrego una mascota';
}

export const putMascotaRepository = (id, mascota) => {
    console.log('La mascota es: ' + id + ' y sus propiedades son: ' + JSON.stringify(mascota));
    return 'Mascota actualizada';
}

export const deleteMascotaRepository = (id) => {
    console.log('La mascota ' + id + ' se borró');
}
