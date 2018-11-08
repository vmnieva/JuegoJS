/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function tirar_dado(){
    var i1 = new Image();
    i1.src="Imagenes/Caras-dado/dado1.png";
    var i2 = new Image();
    i2.src="Imagenes/Caras-dado/dado2.png";
    var i3 = new Image();
    i3.src="Imagenes/Caras-dado/dado3.png";
    var i4 = new Image();
    i4.src="Imagenes/Caras-dado/dado4.png";
    var i5 = new Image();
    i5.src="Imagenes/Caras-dado/dado5.png";
    var i6 = new Image();
    i6.src="Imagenes/Caras-dado/dado6.png";
    
    var aleatorio = (Math.random()*6)+1;
    var dado = '<div id="dado"/>';
    
    switch (aleatorio) {
        case 1:
            dado = dado + '<img src="'+ i1 +'" alt="dado" /><br>';
            break;
        case 2:
            dado = dado + '<img src="'+ i2 +'" alt="dado" /><br>';
            break;
        case 3:
            dado = dado + '<img src="'+ i3 +'" alt="dado" /><br>';
            break;
        case 4:
            dado = dado +'<img src="'+ i4 +'" alt="dado" /><br>';
            break;
        case 5:
            dado = dado + '<img src="'+ i5 +'" alt="dado" /><br>';
            break;
        case 6:
            dado = dado +'<img src="'+ i6 +'" alt="dado" /><br>';
            break;
            
            dado = dado + '<input type="number" id="numdado" disable="" value="'+ aleatorio +'" /></div>';
        
        document.getElementById("dado").innerHTML = dado;
    }
}
