var per = [];

function Personaje(nomb, vid, fuer) {
        this.nombre = nomb;
        this.fuerza = fuer;
        this.vida = vid;
        this.vidaMax = vid;
}

function atacar(danio, vidaActual) {
        return Math.max(0, vidaActual - danio);
}

function almacenarNJug() {
        localStorage.setItem("njugs", $("#inpNumPj").val());
}

function initGame() {
        var njug = parseInt(localStorage.getItem("njugs"), 10) || 1;
        njug = Math.min(Math.max(njug, 1), 4);

        per = [];
        genDivberserker(njug);
        genDivJugs(njug);

        $("#contenedorpj").on("click", ".btn-roll", handleRoll);
        $("#btnReiniciar").on("click", resetMatch);

        $("#log").html("<h3>Registro de combate</h3>");
        logAction("La batalla comienza. Lanza el dado de cada héroe para atacar.");
}

function resetMatch() {
        window.location.href = "index.html";
}

function genDivberserker(numJugadores) {
        var fuerzaBase = parseInt(Math.random() * 4 + 6) + numJugadores;
        var vidaBase = (parseInt(Math.random() * 51 + 150) * numJugadores);
        var info = "<h3>Enemigo</h3>";
        info += "<img class='avatar' src='Imagenes/personajes/berserker.png' alt='Monstruo'>";
        info += "<div class='stats'>";
        info += "<label>Nombre</label>";
        info += "<input type='text' readonly='readonly' name='infoNombre' id='infoNombre' value='Berserker'>";
        info += "<label>Vida</label>";
        info += "<progress id='vidaEnemigo' value='" + vidaBase + "' max='" + vidaBase + "'></progress>";
        info += "<span id='infoVidaTexto'>" + vidaBase + " / " + vidaBase + "</span>";
        info += "<label>Fuerza</label>";
        info += "<input type='text' readonly='readonly' name='infoFuerza' id='infoFuerza' value='" + fuerzaBase + "'>";
        info += "</div>";
        $("#divMonster").html(info);
        var jugador = new Personaje("Enemigo", vidaBase, fuerzaBase);
        per.push(jugador);
}

function genDivJugs(njugs) {
        for (let index = 1; index <= njugs; index++) {
                var fuerza = parseInt(Math.random() * 5 + 5) + index;
                var vida = parseInt(Math.random() * 81 + 120);
                var nombre = "Jugador " + index;
                var infoj = "<div id='divPj" + index + "' class='card personaje'>";
                infoj += "<div class='header'>";
                infoj += "<h3>" + nombre + "</h3>";
                infoj += "<span class='rol'>Héroe</span>";
                infoj += "</div>";
                infoj += "<img class='avatar' src='Imagenes/personajes/" + index + ".png' alt='Personaje " + index + "' id='imgPj" + index + "'>";
                infoj += "<div class='stats'>";
                infoj += "<label for='infoNombrePj" + index + "'>Nombre</label>";
                infoj += "<input type='text' readonly='readonly' name='infoNombrePj" + index + "' id='infoNombrePj" + index + "' value='" + nombre + "'>";
                infoj += "<label for='infoVidaPj" + index + "'>Vida</label>";
                infoj += "<progress id='vidaPj" + index + "' value='" + vida + "' max='" + vida + "'></progress>";
                infoj += "<span id='infoVidaPjTexto" + index + "'>" + vida + " / " + vida + "</span>";
                infoj += "<label for='infoFuerzaPj" + index + "'>Fuerza</label>";
                infoj += "<input type='text' readonly='readonly' name='infoFuerzaPj" + index + "' id='infoFuerzaPj" + index + "' value='" + fuerza + "'>";
                infoj += "</div>";
                infoj += "<div class='acciones'>";
                infoj += "<button class='btn-roll' data-index='" + index + "' aria-label='Lanzar dado del " + nombre + "'>";
                infoj += "<img src='Imagenes/Caras-dado/Dadocompleto.png' id='dado" + index + "' alt='Dado del " + nombre + "'>";
                infoj += "</button>";
                infoj += "<div class='resultado'>";
                infoj += "Tirada: <span id='tirada" + index + "'>0</span>";
                infoj += "</div>";
                infoj += "</div>";
                infoj += "</div>";
                document.getElementById("contenedorpj").innerHTML += infoj;
                var jugador = new Personaje(nombre, vida, fuerza);
                per.push(jugador);
        }
}

function lanzarDado(selectorImagen, selectorTexto) {
        var n = parseInt((Math.random() * 6) + 1);
        if (selectorImagen) {
                $(selectorImagen).attr("src", "Imagenes/Caras-dado/dado" + n + ".png");
        }
        if (selectorTexto) {
                $(selectorTexto).text(n);
        }
        return n;
}

function handleRoll(event) {
        var index = parseInt($(event.currentTarget).data("index"), 10);
        if (!per[index] || per[index].vida === 0 || per[0].vida === 0) {
                return;
        }

        var roll = lanzarDado("#dado" + index, "#tirada" + index);
        var danoJugador = per[index].fuerza + roll;

        var vidaRestanteEnemigo = atacar(danoJugador, per[0].vida);
        per[0].vida = vidaRestanteEnemigo;
        updateMonsterDisplay();
        logAction(per[index].nombre + " causa " + danoJugador + " de daño al Berserker.");

        if (per[0].vida === 0) {
                logAction("¡El Berserker ha sido derrotado!", true);
                finalizarCombate(true);
                return;
        }

        var rollEnemigo = lanzarDado();
        var danoEnemigo = per[0].fuerza + rollEnemigo;
        var vidaRestante = atacar(danoEnemigo, per[index].vida);
        per[index].vida = vidaRestante;
        updatePlayerDisplay(index);
        logAction("El Berserker contraataca a " + per[index].nombre + " con " + danoEnemigo + " de daño (tirada " + rollEnemigo + ").");

        if (per[index].vida === 0) {
                $("#divPj" + index).addClass("muerto");
                logAction(per[index].nombre + " ha caído.");
        }

        if (jugadoresDerrotados()) {
                finalizarCombate(false);
        }
}

function jugadoresDerrotados() {
        for (var i = 1; i < per.length; i++) {
                if (per[i].vida > 0) {
                        return false;
                }
        }
        return true;
}

function finalizarCombate(ganado) {
        $(".btn-roll").prop("disabled", true);
        if (ganado) {
                $("#divMonster").addClass("muerto");
                logAction("¡Victoria! Tus héroes triunfan.", true);
        } else {
                logAction("Todos los héroes han sido derrotados.", true);
        }
}

function updateMonsterDisplay() {
        $("#vidaEnemigo").val(per[0].vida);
        $("#infoVidaTexto").text(per[0].vida + " / " + per[0].vidaMax);
}

function updatePlayerDisplay(index) {
        $("#vidaPj" + index).val(per[index].vida);
        $("#infoVidaPjTexto" + index).text(per[index].vida + " / " + per[index].vidaMax);
}

function logAction(texto, destacado) {
        var $log = $("#log");
        var linea = $("<p></p>").text(texto);
        if (destacado) {
                        linea.addClass("destacado");
        }
        $log.append(linea);
        $log.scrollTop($log.prop("scrollHeight"));
}
