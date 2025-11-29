const test = require('node:test');
const assert = require('node:assert');

const { Personaje, atacar } = require('../public_html/Personaje.js');

test('Personaje asigna las propiedades recibidas', () => {
  const jugador = new Personaje('Heroe', 120, 15);

  assert.strictEqual(jugador.nombre, 'Heroe');
  assert.strictEqual(jugador.vida, 120);
  assert.strictEqual(jugador.fuerza, 15);
});

test('atacar descuenta la vida en función del daño', () => {
  const vidaRestante = atacar(10, 100);

  assert.strictEqual(vidaRestante, 90);
});

test('atacar permite detectar cuando la vida queda en cero o menos', () => {
  const vidaRestante = atacar(75, 50);

  assert.strictEqual(vidaRestante, -25);
});
