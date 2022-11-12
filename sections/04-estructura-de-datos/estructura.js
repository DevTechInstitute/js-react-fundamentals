//if( solo pasa si... )
//else( si no pasa, que ocurra esto... )
//else if ( tambien puede pasar esto... )

// let edad = 18

// if( edad < 16 ){
//     console.log('Usted es un adolecente')
// }else{
//     console.log('resto del codigo')
// }


// let numero = Number(prompt('Ingrese cualquier numero'))

// if( numero % 2 == 0 ){
//     console.log('El numero es par')
// }else{
//     console.log('El numero no es par');
// }


// if(edad < 18){
//     console.log('Es menor de edad')
// }

// else if( edad > 18){
//     console.log('Es mayor de edad')
// }

// else if( edad > 65){
//     console.log('Es muy mayor')
// }

// else{
//     console.log('Datos erroneos')
// }


// console.log('Resto del codigo')


// if(edad > 18 && edad < 65){
//    console.log('Es mayor de edad')
// }

// else if(edad > 65 && edad < 90){
//     console.log('Es muy mayor')
// }

// else{
//     console.log('Ninguna se cumplio')
// }

//SWITCH
//Nos permite determinar condiciones por casos

// switch(edad){
//     case 18:
//         console.log('18')
//         break;
//     case 25:
//         console.log('25')
//         break;
//     case 65:
//         console.log('65')
//         break;

//     default:
//         console.log('Ninguno de los casos se cumplio')
// }

let nota = Number(prompt('Inrgrese nota del estudiante'));


if( nota < 51 ){
    console.log(' reprobo ')
}

if( nota > 51 ){
    if( nota < 65 ){
        console.log('aprobo raspando')
    }

    if( nota >= 90 ){
        console.log('aprobo con exelencia')
    }
    console.log('Aprobo')
}
 
// if( nota < 51 ){
//     console.log('El estudiante reprobo')
// }
// else if( nota >= 51 && nota <= 65 ){
//     console.log('El estudiante aprobo raspando')
// }

// else if( nota > 90 ){
//     console.log('Aprobo con excelencia')
// }
// else{
//     console.log('Aprobado')
// }