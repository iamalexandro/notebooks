//OPERADORES ________________________________________________________

// Operadores unarios y aritmeticos (2.5)
// let nombre = 'nicola'
// let edad = 21

//lineas escritas en la consola ()
// edad += 4
// edad /= 5
// edad*=3

//Operador Ternario (2.6)

//  let age = prompt('How old are you ?')

// let isAdult = age >= 18 ?
//     'You are adult' :
//     'You are just a child'

// ExpresionQueDevuelveBoolean
// ? valorSiEsTrue
// : valorSiEsFalse

// alert(isAdult)

//Operador de CORTO CIRCUITO || o &&

// operado pleca (||)
// let a
// let b = a

// b = a || 'Juan'
//output: b = 'Juan'
//si el primer valor es false tome el segundo valor

//operador ampersand (&) lo contrario
// let a1
// let b1 = a1

// b1 = null && a
// output: output b1 = null
// si el primer valor es false toma ese valor

// # NUMEROS ________________________________________________________

// # toFixed() especifica el numero de decimales numer.toFixed(n)
// let numero1 = 5
// numero1 = numero1.toFixed(2)
// output: 5.00

// # parseInt() convierte a numero
// let cadena = '5'
// cadena = parseInt(cadena)
// output: 5 como numero

//NaN: Cualquier operacion matematica que no devuelva un numero
//Ejemplo 'hola' * 5 output:

//MATH (floor, ceil, round, random)

//Math.floor -> redondea hacia abajo
//Ex 5.12 -> 5 | 5.3453452 -> 5

//Math.ceil -> redondea hacia arriba
//Ex 6.3453254 -> 7

//Math.round -> redondea segun la cifra
//Ex 5.67 -> 6  | 6.42 -> 6

//Math.random -> numero aleatorio entre 0 y 1 || en caso de 0 a 10 -> Math.random()*10
//Math.random()*20 -> 14.985664723395494
//entero -> Math.ceil(Math.random()*20) -> 17

// # STRINGS ________________________________________________________

// length -> cantidad de caracteres
let cadena = 'nicola';
// alexis.length -> 6
// 'nicola'.length -> literal (valor en vez de variable)

// .trim() quita espacios en blanco
// let cadena2 = '     hola     '
// cadena2.trim() -> 'hola'
// cadena2.toUpperCase() -> 'HOLA'
// cadena2.toLoweCase() -> 'hola'

// let answer = prompt('Cual es la capital de italia ?').toUpperCase().trim()
// let msg = answer === 'ROMA' ? 'Correcto :D' : 'Incorrecto ):'

// alert(msg)

//IndexOf -> devuelve la posicion del string que buscamos (nicola)
//cadena.indexOf('o') -> 3

//en caso de tener varias letras iguales empleamos index of para que comience a buscarlas de inicio a fin y en caso de querer buscarlas desde el fin hasta el inicio empleamos (lastIndexOf)

//Ex 'maracaibo'.lastIndexOf('a') -> 5

//A partir de ESC 6 (include,starsWith,endsWith)
// 'nicola es crack'.includes('crack') -> true
//'hola como estas'.starsWith('hola') -> true
//'hola como estas'.endsWith('estoy') -> false

// # MANIPULACION DE TEXTO
//replace
// 'hola mundo'.replace('mundo','nicola') -> 'Hola nicola'

//split
//'el texto que quiero dividir'.split('') -> (27) ["e", "l", " ", "t", "e", "x", "t", "o", " ", "q", "u", "e", " ", "q", "u", "i", "e", "r", "o", " ", "d", "i", "v", "i", "d", "i", "r"] -> separo por letra ('') sin ningun espacio

//'el texto que quiero dividir'.split(' ') -> (5) ["el", "texto", "que", "quiero", "dividir"] -> separo por palabras (' ') un espacio

//separar por letras
//'javeriana'.split('e') -> 'jav' 'riana'

//encontrar caracter de una posicion
// 'palabrota'[4] -> 'b'

//extraer desde un indice hasta a otro SUBSTRING (si el seg param es - extrae de ahi hacia atras)
// 'hola mundo'.substring(2) ->'la mundo'
//'hola mundo'.substring(5,8) -> "mun"
//'hola mundo'.substring(2,-1) -> "hol"

//extraer texto desde un indice y la cantidad de caracteres siguiente
//'hola mundo soy nicola'.substr(2,7) -> "la mund"

//ultimos caracteres con un solo valor negativo
//ex los 4 ultimos caracteres de una palabra -> 'hola paraguay'.substr(-4) -> 'guay'

//slice -> fragmento o rodaja de texto

// CONDICIONALES

let age = parseInt(prompt('Bienvenido a Discoteca, digita tu edad'));
console.log(age);

if (age) {
    if (age >= 18) {
        alert('Bienvenido a la discoteca');
    } else {
        alert('Aun eres un niño');
    }
} else {
    let age = parseInt(prompt('Bienvenido a Discoteca, digita tu edad'));
}