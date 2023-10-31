// 'use strict';

const nomeUtente = prompt('Inserisci il tuo nome:');
const cognomeUtente = prompt('Inserisci il tuo cognome:');
const colorePreferito = prompt('Inserisci il tuo colore preferito:');
const numero = Math.floor(Math.random() * 1000 + 1);

console.log(
  (document.getElementById('titolo').innerHTML =
    nomeUtente + cognomeUtente + colorePreferito + numero)
);

// Tramite il metodo writeln
// const password = nomeUtente + cognomeUtente + colorePreferito + numero;
// document.writeln(password);
// console.log(password);
