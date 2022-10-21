/* Snack 2
A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */


const soccerTeams = ["MIlan","juvENtus","iNTer","napoLI"];
//scorro nell'array
const newTeams = soccerTeams.map(function(team){
    //per ogni elemento mando tutta la stringa in lower case
    const teamLower = team.toLowerCase();
    //selezione prima lettera all'indice 0
    const teamUpperLetter = teamLower.charAt(0).toUpperCase();
    const teamUpperAndLower = teamUpperLetter + teamLower.slice(1)
    return teamUpperAndLower;
});

console.log(newTeams);
