//                  0         1         2
const nombres = ['Mattias', 'John', 'Melissa', 'Diego', 'Javier', 'Doe', 'Alex', 'Carlos']

// for( let i = 0 ; i < nombres.length ; i++ ){
//     // console.log(i)
//     console.log(nombres[i])
// }   


const listadoNombres =  nombres.map( (nombre, i)  =>  nombre + '2')
console.log(listadoNombres)

