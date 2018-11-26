var per = new Array();

function Personaje(nomb, vid, fuer) {
	this.nombre = nomb;
	this.fuerza = fuer;
	this.vida = vid;
}

function atacar(daño1, vida1) {
	vida1 = vida1 - daño1;
	return vida1;
}

function almacenarNJug() {
	localStorage.setItem("njugs", $("#inpNumPj").val());
}

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

function muertePersonaje(i) {
	$("#divPj" + i).attr("hidden", "false");
}

function genDivberserker() {
	var fuerza = parseInt(Math.random() * 5 + 5);
	var vida = parseInt(Math.random() * 100 + 100) * 4;
	var info = "<h3>Enemigo</h3>";
	info = info + "<img src='Imagenes/personajes/berserker.png' alt='Monstruo'>"
	info = info + "<fieldset >";
	info = info + "<legend>Información</legend>";
	info = info + "<label for='infoNombre'>Nombre: </label>";
	info = info + "<input type='text' readonly='readonly' name='infoNombre' id='infoNombre' value='Berserker'><br>";
	info = info + "<label for='infoVida'>Vida: </label>";
	info = info + "<input type='text' readonly='readonly' name='infoVida' id='infoVida' value='" + vida + "'><br>";
	info = info + "<label for='infoFuerza'>Fuerza: </label>";
	info = info + "<input type='text' readonly='readonly' name='infoFuerza' id='infoFuerza' value='" + fuerza + "'><br>";
	info = info + "</fieldset>";
	$("#divMonster").html(info);
	var jugador = new Personaje("Enemigo", vida, fuerza);
	per.push(jugador);
}

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
		infoj = infoj + "<input type='text' readonly='readonly' name='infoNombrePj" + index + "' id='infoNombrePj" + index + "' value='Jugador " + index + "'>";
		infoj = infoj + "<br>";
		infoj = infoj + "<br>";
		infoj = infoj + "<label for='infoVidaPj" + index + "'>Vida: </label>";
		infoj = infoj + "<input type='text' readonly='readonly' name='infoVidaPj" + index + "' id='infoVidaPj" + index + "' value='" + vida + "' >";
		infoj = infoj + "<br>";
		infoj = infoj + "<br>";
		infoj = infoj + "<label for='infoFuerzaPj" + index + "'>Fuerza: </label>";
		infoj = infoj + "<input type='text' readonly='readonly' name='infoFuerzaPj" + index + "' id='infoFuerzaPj" + index + "' value='" + fuerza + "'>";
		infoj = infoj + "<br>";
		infoj = infoj + "<br>";
		infoj = infoj + "</fieldset>";
		infoj = infoj + "<img src='Imagenes/Caras-dado/Dadocompleto.png' id='dado" + index + "'>";
		infoj = infoj + "<div hidden='hidden'><input id='tirada" + index + "' value = '0'></div>";
		infoj = infoj + "</div>";
		document.getElementById("contenedorpj").innerHTML += infoj;
		var jugador = new Personaje(nombre, vida, fuerza);
		per.push(jugador);
	}
}

function realizarTirada1() {
	var result;
	var n = parseInt((Math.random() * 6) + 1);
	$("#dado1").attr("src", "Imagenes/Caras-dado/dado" + n + ".png");
	document.getElementById("tirada1").value = n;
	var fuerzapj = parseInt($("#infoFuerzaPj1").val()) + (n);
	var vidapj = parseInt($("#infoVidaPj1").val());
	var fuerzam = parseInt($("#infoFuerza").val()) + (n);
	var vidam = parseInt($("#infoVida").val());
	if (atacar(fuerzapj, vidam) <= 0) {
		document.getElementById("infoVida").value = 0;
                alert("Has ganado");
                $("#divMonster").html("<a style='text-decoration: none' href='index.html'><input type='button' value='Volver a Jugar'></a> <br/><br/>");
                
	} else {
		result = atacar(fuerzapj, vidam);
		document.getElementById("infoVida").value = result;
	} if (atacar(fuerzam, vidapj) <= 0) {
		document.getElementById("infoVidaPj1").value = 0;
		$("#divPj1").html("Jugador 1 ha muerto");
	} else {
		result = atacar(fuerzam, vidapj);
		document.getElementById("infoVidaPj1").value = result;
	}
}

function realizarTirada2() {
	var n = parseInt((Math.random() * 6) + 1);
	$("#dado2").attr("src", "Imagenes/Caras-dado/dado" + n + ".png");
	document.getElementById("tirada2").value = n;
        var fuerzapj = parseInt($("#infoFuerzaPj2").val()) + (n);
	var vidapj = parseInt($("#infoVidaPj2").val());
	var fuerzam = parseInt($("#infoFuerza").val()) + (n);
	var vidam = parseInt($("#infoVida").val());
	if (atacar(fuerzapj, vidam) <= 0) {
		document.getElementById("infoVida").value = 0;
                alert("Has ganado");
                $("#divMonster").html("<a style='text-decoration: none' href='index.html'><input type='button' value='Volver a Jugar'></a> <br/><br/>");
                
	} else {
		result = atacar(fuerzapj, vidam);
		document.getElementById("infoVida").value = result;
	} if (atacar(fuerzam, vidapj) <= 0) {
		document.getElementById("infoVidaPj2").value = 0;
		$("#divPj2").html("Jugador 2 ha muerto");
	} else {
		result = atacar(fuerzam, vidapj);
		document.getElementById("infoVidaPj2").value = result;
	}
}

function realizarTirada3() {
	var n = parseInt((Math.random() * 6) + 1);
	$("#dado3").attr("src", "Imagenes/Caras-dado/dado" + n + ".png");
	document.getElementById("tirada3").value = n;
        var fuerzapj = parseInt($("#infoFuerzaPj3").val()) + (n);
	var vidapj = parseInt($("#infoVidaPj3").val());
	var fuerzam = parseInt($("#infoFuerza").val()) + (n);
	var vidam = parseInt($("#infoVida").val());
	if (atacar(fuerzapj, vidam) <= 0) {
		document.getElementById("infoVida").value = 0;
                alert("Has ganado");
                $("#divMonster").html("<a style='text-decoration: none' href='index.html'><input type='button' value='Volver a Jugar'></a> <br/><br/>");
                
	} else {
		result = atacar(fuerzapj, vidam);
		document.getElementById("infoVida").value = result;
	} if (atacar(fuerzam, vidapj) <= 0) {
		document.getElementById("infoVidaPj3").value = 0;
		$("#divPj3").html("Jugador 3 ha muerto");
	} else {
		result = atacar(fuerzam, vidapj);
		document.getElementById("infoVidaPj3").value = result;
	}
}

function realizarTirada4() {
	var n = parseInt((Math.random() * 6) + 1);
	$("#dado4").attr("src", "Imagenes/Caras-dado/dado" + n + ".png");
	document.getElementById("tirada4").value = n;
        var fuerzapj = parseInt($("#infoFuerzaPj4").val()) + (n);
	var vidapj = parseInt($("#infoVidaPj4").val());
	var fuerzam = parseInt($("#infoFuerza").val()) + (n);
	var vidam = parseInt($("#infoVida").val());
	if (atacar(fuerzapj, vidam) <= 0) {
		document.getElementById("infoVida").value = 0;
                alert("Has ganado");
                $("#divMonster").html("<a style='text-decoration: none' href='index.html'><input type='button' value='Volver a Jugar'></a> <br/><br/>");
                
	} else {
		result = atacar(fuerzapj, vidam);
		document.getElementById("infoVida").value = result;
	} if (atacar(fuerzam, vidapj) <= 0) {
		document.getElementById("infoVidaPj4").value = 0;
		$("#divPj4").html("Jugador 4 ha muerto");
	} else {
		result = atacar(fuerzam, vidapj);
		document.getElementById("infoVidaPj4").value = result;
	}
}