var per = new Array();

/**
 * 
 * @param {*} nomb 
 * @param {*} vid 
 * @param {*} fuer 
 * @author Nieva
 */
function Personaje(nomb, vid, fuer) {
    this.nombre = nomb;
    this.fuerza = fuer;
    this.vida = vid;
}

/**
 * 
 * @param {*} daño1 
 * @param {*} vida1 
 * @author Nieva
 */
function atacar(daño1, vida1) {
    vida1 = vida1 - daño1;
    return vida1;
}

/**
 * 
 * @returns {undefined}
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
    var personajes = new Array();
    i = localStorage.getItem("njugs");
    for (var f = 0; f < i; f++) {
        var nombre = $("#infoNombrePj" + i).val();
        var vida = $("#infoVidaPj" + i).val();
        var fuerza = $("#infoFuerzaPj" + i).val();

        var jugador = Personaje(nombre, vida, fuerza);
        alert(jugador);
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
        var nombre = "Personaje" + index;
        var infoj = "<div id='divPj" + index + "'>";
        infoj = infoj + "<h3>Personaje</h3>";
        infoj = infoj + "<img src='Imagenes/personajes/" + index + ".png' alt='Personaje" + index + "' id='imgPj" + index + "'>";
        infoj = infoj + "<fieldset >";
        infoj = infoj + "<legend>Información</legend>";
        infoj = infoj + "<label for='infoNombrePj" + index + "'>Nombre: </label>";
        infoj = infoj + "<input type='text' name='infoNombrePj" + index + "' id='infoNombrePj" + index + "' value='Jugador " + index + "'>";
        infoj = infoj + "<br>";
        infoj = infoj + "<br>";
        infoj = infoj + "<label for='infoVidaPj" + index + "'>Vida: </label>";
        infoj = infoj + "<input type='text' name='infoVidaPj" + index + "' id='infoVidaPj" + index + "' value='" + vida + "' >";
        infoj = infoj + "<br>";
        infoj = infoj + "<br>";
        infoj = infoj + "<label for='infoFuerzaPj" + index + "'>Fuerza: </label>";
        infoj = infoj + "<input type='text' name='infoFuerzaPj" + index + "' id='infoFuerzaPj" + index + "' value='" + fuerza + "'>";
        infoj = infoj + "<br>";
        infoj = infoj + "<br>";
        infoj = infoj + "</fieldset>";
        infoj = infoj + "<img src='Imagenes/Caras-dado/Dadocompleto.png' id='dado" + index + "'>";
        infoj = infoj + "<div><input id='tirada" + index + "' value = '0'></div>";
        infoj = infoj + "</div>";
        document.getElementById("contenedorpj").innerHTML += infoj;
        
        var jugador = new Personaje(nombre, vida, fuerza);
        per[index] = jugador;
    }
}

function realizarTirada1() {
    var n = parseInt((Math.random() * 6) + 1);
    $("#dado1").attr("src", "Imagenes/Caras-dado/dado" + n + ".png");
    document.getElementById("tirada1").value = n;
    atacar();
}

function realizarTirada2() {
    var n = parseInt((Math.random() * 6) + 1);
    $("#dado2").attr("src", "Imagenes/Caras-dado/dado" + n + ".png");
    document.getElementById("tirada2").value = n;
}

function realizarTirada3() {
    var n = parseInt((Math.random() * 6) + 1);
    $("#dado3").attr("src", "Imagenes/Caras-dado/dado" + n + ".png");
    document.getElementById("tirada3").value = n;
}

function realizarTirada4() {
    var n = parseInt((Math.random() * 6) + 1);
    $("#dado4").attr("src", "Imagenes/Caras-dado/dado" + n + ".png");
    document.getElementById("tirada4").value = n;
}