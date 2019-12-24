// function plus(num1, num2) {
//     return num1 + num2;
// }

// console.log('el resultado de la suma es: ' + plus(2, 5));

// validando sexo para cambiar el mensaje de bienvenida

// function saludar(persona = 'Visitante', sexo = 'm') {
//     let saludo = sexo === 'm' ? 'Bienvenido' : 'Bienvenida';
//     return `${saludo} a Wiedii, ${persona}`;
// }

// console.log(saludar('Nicola'));
// console.log(saludar('Monica', 'f'));
// console.log(saludar());

// const sumarRapido = (a, b) => a + b;

// PARAMETROS REST 4.5 (...)
// const mostrarTodos = (...numeros) => {
//     console.log(numeros);
// };

// console.log(mostrarTodos(1, 2, 3, 4, 5, 6, 7, 8, 9));

// sumar todos los argumentos

// const sumarTodos = (...numeros) => {
//     let result = 0;
//     for (let i = 0; i < numeros.length; i++) {
//         result += numeros[i];
//     }
//     return result;
// };

// console.log('el resultado es: ' + sumarTodos(2, 2, 3));

// Funciones = Ciudadanos de primera clase (son valores)

// const c = console.log;
// const multiplicar = (a, b) => a * b;

// c(multiplicar(2, 2));
// let edad = multiplicar(5, 4);
// c(`esta es tu edad: ${edad}`);

// una funcion puede ser argumento de una funcion
// let edad2 = multiplicar(multiplicar(5, 4), 2);
// c(`esta es tu nueva edad ${edad2}`);

// BASE de clousures
// function sumar(x) {
//     return function(y) {
//         return x + y;
//     };
// }
// let resultSuma = sumar(5)(2);
// c(`el resultado de la suma es ${resultSuma}`);

// convertimos a funcion flecha

// const sumar2 = (x) => (y) => x + y;
// let result2 = sumar2(1)(3);
// c(`El resultado de la suma2 es: ${result2}`);

// Ejercicio de funcion retornada

// const doSomething = (x) => (y) => x * y;

// const a = doSomething(2)(2); // --> 4
// const b = doSomething(3); // --> y = 3 * y

// c(doSomething(a)(b(3)));

// TIPOS DE FUNCIONES 4.8
// funcion pura: no causa efecto secundario

// funcion no pura (modifica valores fuera del bloque)
// let a = 'Hola';

// const saludo = (persona) => {
//     a += ' ' + persona;
//     return a;
// };

// c(saludo('Andrew'));
// c(a);

//convertir pura (ejecutar la misma funcion sin afectar el entorno)

// let b = 'Hola';

// const saludo2 = (saludo, persona) => `${saludo}, ${persona}`;

// c(saludo2(b, 'Juan'));
// c(b);

// funcion autoinvocada

// const saludo3 = ((saludo, persona) => `${saludo}, ${persona}`)(b, 'Marlotte');
// c(saludo3);
// c(b);

//funcion anonima ej: setTimeout

// setTimeout(() => {
//     alert('Apareci luego de 3 segundos');
// }, 3000);

// CLOUSURES

// function aumentar() {
//     let numero = 0;
//     return function() {
//         numero++;
//         c(numero);
//     };
// }

// const increment = aumentar();

// aumentar()();
// aumentar()();
// aumentar()();
// aumentar()();
// aumentar()();
// aumentar()();
// aumentar()();

// increment();
// increment();
// increment();
// increment();