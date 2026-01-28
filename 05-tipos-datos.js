//* TIPOS DE DATOS PRIMITIVOS

const { useLayoutEffect } = require("react");

// string
let primerNombre = 'Jose'
let segundoNombre = "Alfonso"; // Se pueden colocar con comillas simples '' o comillas dobles "", JS lo admite de ambas maneras.

// number
let age = 22;

// boolean
let esMayorDeEdad = true; // Solo devuelve true (verdadero) o false (falso).

// null
let hayAlgunValor = null; // Es un valor vacio.

// undefined
let noDefinido = undefined; // Para indicar que no hay nada declarado.

// Symbol;
let simboloÚnico = Symbol('único');

// Bingint
let numeroGrande = 2n // Valores muy grandes en JS

//* TIPOS DE DATOS COMPLEJOS

// Objetos
let carro = {
    marca : 'Tesla',
    modelo : ' Modelo S'
}

// Arrays
let frutas = ['manzana', 'platano', 'uvas']

// Funciones
function saludar (primerNombre) {
    console.log('Hola ', primerNombre);
    
}