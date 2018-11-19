/**
 * 
 * @param {*} nomb 
 * @param {*} vid 
 * @param {*} fuer 
 * @author Nieva
 */
function Personaje(nomb, vid, fuer) {
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
function Atacar(daño1, vida1) {
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
 * @return {undefined}
 * @author willy
 */
function generarPersonajes() {
    personajes = new Array();
    i = localStorage.getItem("njugs");
    for (var f = 0; f < i; f++) {
        var nombre = $("#infoNombrePj" + i);
        var vida = $("#infoVidaPj" + i);
        var fuerza = $("#infoFuerzaPj" + i);

        var jugador = Personaje(nombre, vida, fuerza);
        personajes[f] = jugador;
    }
}
/**
 * 
 */
function rellenarDivsJugs() {
    njugs = localStorage.getItem('njugs');
    for (let index = 0; index < njugs; index++) {
        let p = new Personaje();
        p = localStorage.getItem('p' + index);
        $('#infoNombrePj' + index).val = p.nombre;
        $('#infoVidaPj' + index).val = p.vida;
        $('#infoFuerzaPj' + index).val = p.fuerza;


    }
}

/**
 * 
 * @param {type} i
 * @returns {undefined}
 * @author willy
 */
function muertePersonaje(i) {
    $("#" + i).attr("hidden", "false");
}

/**
 * 
 * @param {*} njugs
 * @author Manuel 
 */
function genDivJugs(njugs) {
    for (let index = 1; index <= njugs; index++) {
        var fuerza = parseInt(Math.random() * 5 + 5);
        var vida = parseInt(Math.random() * 100 + 100);
        var infoj = "<div id='divPj" + index + "'> <h3>Personaje</h3>";
        infoj = infoj + "<img src='Imagenes/personajes/" + index + ".png' alt='Personaje" + index + "' id='imgPj" + index + "'>";
        infoj = infoj + "<fieldset ><legend>Información</legend><label for='infoNombrePj" + index + "'>Nombre: </label><input type='text' name='infoNombrePj" + index + "' id='infoNombrePj" + index + "' value='Jugador " + index + "'><br><br><label for='infoVidaPj" + index + "'>Vida: </label><input type='text' name='infoVidaPj" + index + "' id='infoVidaPj" + index + "' value='" + vida + "' ><br><br><label for='infoFuerzaPj" + index + "'>Fuerza: </label><input type='text' name='infoFuerzaPj" + index + "' id='infoFuerzaPj" + index + "' value='" + fuerza + "'><br><br></fieldset><img src='Imagenes/Caras-dado/Dadocompleto.png' id='dado" + index + "'><div><input id='tirada" + index + "' value = '0'></div></div>";
        document.getElementById("contenedorpj").innerHTML += infoj;
    }
}

function realizarTirada1() {
    var n = parseInt((Math.random() * 6)+1);
    var dado = ' ';
    dado = "dado" + n + ".png";
    $("dado1").attr("src", dado);
    document.getElementById("tirada1").value =  n;
}

function realizarTirada2() {
    var n = parseInt((Math.random() * 6)+1);
    $("dado2").attr("src", "dado"+n+".png");
    document.getElementById("tirada2").value =  n;
}

function realizarTirada3() {
    var n = parseInt((Math.random() * 6)+1);
    $("dado3").attr("src", "dado"+n+".png");
    document.getElementById("tirada3").value =  n;
}

function realizarTirada4() {
    var n = parseInt((Math.random() * 6)+1);
    $("dado4").attr("src", "dado"+n+".png");
    document.getElementById("tirada4").value =  n;
}