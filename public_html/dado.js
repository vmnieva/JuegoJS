/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * 
 * @returns {undefined}
 * @Rafael
 */
function tirar_dado() {

    var aleatorio = Math.floor((Math.random() * 6) + 1);

    return aleatorio;

}

function recoger_dado() {

    var aleatorio = tirar_dado();

    var imagen;
    switch (aleatorio) {
        case 1:
            imagen = '<img src="Imagenes/Caras-dado/dado1.png"  id="1" width="150" height="150" alt="dado1"/> <br>';
            break;

        case 2:
            imagen = '<img src="Imagenes/Caras-dado/dado2.png" id="2" width="150" height="150" alt="dado2"/> <br>';
            break;
        case 3:
            imagen = '<img src="Imagenes/Caras-dado/dado3.png" id="3" width="150" height="150" alt="dado3"/> <br>';
            break;

        case 4:
            imagen = '<img src="Imagenes/Caras-dado/dado4.png" id="4" width="150" height="150" alt="dado4"/> <br>';
            break;
        case 5:
            imagen = '<img src="Imagenes/Caras-dado/dado5.png" id="5" width="150" height="150" alt="dado5"/> <br>';
            break;

        case 6:
            imagen = '<img src="Imagenes/Caras-dado/dado6.png" id="6" width="150" height="150" alt="dado6"/> <br>';
            break;
    }
    imagen = imagen + "<input type='text' name='numdado' value='" + aleatorio + "' readonly='readonly' /><br>";

    document.getElementById("dado").innerHTML += imagen;
}

