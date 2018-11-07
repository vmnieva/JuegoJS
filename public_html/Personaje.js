function Personaje(nomb, vid, fuer){
    nombre = nomb;
    fuerza = fuer;
    vida = vid;
}

function Atacar(daño1, vida1){
    vida1 = vida1 - daño1;
    return vida1;
}

