/* Snack 3
Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
Es:
[
  { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
  { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
  { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]
Crea un nuovo array con la lista dei mammiferi. */


const animals = [
    {
        nome: "leone",
        famiglia:"felidi",
        classe: "mammiferi"
    },
    {
        nome: "cane",
        famiglia:"canidi",
        classe: "mammiferi"
    },
    {
        nome: "gallina",
        famiglia:"fasianidi",
        classe: "uccelli"
    },
    {
        nome: "aquila",
        famiglia:"fasianidi",
        classe: "uccelli"
    },
    {
        nome: "coccodrillo",
        famiglia:"crocodilidi",
        classe: "rettili"
    },
    
];

const mammiferi = animals.filter(animal => {
    if (animal.classe === "mammiferi"){
        return true;
    }
});

console.log(mammiferi);