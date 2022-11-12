const persona1 = {
    name: 'Juan',
    lastname: '',
    numbers: '',
    direction: '',
    gretting: () => `Hola ${persona1.name}`,
}

console.log(persona1.gretting())


const persona2 = {
    name: 'Juana',
    lastname: '',
    numbers: '',
    direction: '',
    gretting: () => `Hola ${persona2.name}`,
}

const persona3 = {
    name: 'Jhon',
    lastname: '',
    numbers: '',
    direction: '',
    gretting: () => `Hola ${persona3.name}`,
}

const persona4 = {
    name: 'Mattias',
    lastname: '',
    numbers: '',
    direction: '',
    gretting: () => `Hola ${persona4.name}`,
}

const personas = [persona1, persona2, persona3, persona4]

personas.map( (persona,index) => {
    console.log(persona.gretting())
})