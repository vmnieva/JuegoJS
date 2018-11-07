/**
 * 
 * @param {*} nomb 
 * @param {*} vid 
 * @param {*} fuer 
 * @author Nieva
 */
function Personaje(nomb, vid, fuer){
    nombre = nomb;
    fuerza = fuer;
    vida = vid;
}

/**
 * 
 * @param {*} daño1 
 * @param {*} vida1 
 * @author Nieva
 */
function Atacar(daño1, vida1){
    vida1 = vida1 - daño1;
    return vida1;
}

/**
 * @author Manuel
 */
function almacenarNJug() {
    localStorage.setItem("njugs", $("#inpNumPj").val());
}


/**
 * 
 * @param {*} njugs
 * @author Manuel 
 */
function genDivJugs(njugs) {
    for (let index = 1; index < njugs; index++) {
        var infoj = "<div id='divPj'" + index + "'> <h3>Personaje</h3> <img src='' alt=''><fieldset disabled='disabled'><legend>Información</legend><label for='infoNombrePj1'>Nombre</label><input type='text' name='infoNombrePj1' id='infoNombrePj1'><br><label for='infoVidaPj1'>Vida</label><input type='text' name='infoVidaPj1' id='infoVidaPj1'><br><label for='infoFuerzaPj1'>Fuerza</label><input type='text' name='infoFuerzaPj1' id='infoFuerzaPj1'><br></fieldset>"
        switch (index) {
            case 1:
                var im = "<img src='' alt=''>"
                break;
        
            default:
                break;
        }
            
            
            
            
        
        <img src="" alt="" id="imgdado1">
    </div>

    }
}

