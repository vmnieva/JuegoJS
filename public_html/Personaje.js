function Personaje(nombre, vida, fuerza){
    nomb = nombre;
    fuer = fuerza;
    vid = vida;
}

function Atacar(daño1, vidajefe){
    vidajefe = daño1 - vidajefe;
    return vidajefe;
}

