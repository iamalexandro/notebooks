let names = ['nicola', 'duban', 'jesus', 'edward']
let [s1, s2, s3, s4] = names

//console.log(s3)

// push and pop 
// push
let songs = ['song1', 'song2', 'song3', 'song4', 'song5']
songs.push('hello - adele')

// pop 
let numbers = [1, 2, 3, 4, 5]
numbers.pop() // -> 1,2,3,4

// objetos

let perro = {
    nombre: 'Spike',
    edad: 3,
    vacunas: true,
    rabia: false,
    correr() {
        console.log(`${this.nombre} esta corriendo`)
    },
    feliz: true
}