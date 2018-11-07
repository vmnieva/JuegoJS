function Personaje(nombre, vida, fuerza){
    nomb = nombre;
    fuer = fuerza;
    vid = vida;
}

function Atacar(daño1, vida1){
    vida1 = vida1 - daño1;
    return vida1;
}

