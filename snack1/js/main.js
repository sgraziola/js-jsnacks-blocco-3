/* Snack 1:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array. */


const cars = [
    {
        marca: "Renault",
        modello: "Clio",
        alimentazione: "Benzina"
    },
    {
        marca: "Dacia",
        modello: "Sandero",
        alimentazione: "Diesel"
    },
    {
        marca: "Fiat",
        modello: "500",
        alimentazione: "Benzina"
    },
    {
        marca: "Fiat",
        modello: "Tempra",
        alimentazione: "Benzina"
    },
    {
        marca: "Opel",
        modello: "Corsa",
        alimentazione: "Metano"
    },
    {
        marca: "Renault",
        modello: "Twingo",
        alimentazione: "Elettrico"
    },
    {
        marca: "Ferrari",
        modello: "Enzo",
        alimentazione: "GPL"
    },
    {
        marca: "Citroen",
        modello: "Saxo",
        alimentazione: "Diesel"
    },
    {
        marca: "Tesla",
        modello: "Model X",
        alimentazione: "Elettrico"
    },
    {
        marca: "Tesla",
        modello: "Model Y",
        alimentazione: "Elettrico"
    },
];

const benzinaCars = cars.filter(function(motore){
    if (motore.alimentazione === "Benzina"){
        return true;
    }; 
});

const dieselCars = cars.filter(function(motore){
    if (motore.alimentazione === "Diesel"){
        return true;
    }; 
});

const variedCars = cars.filter(function(motore){
    if (motore.alimentazione !== "Diesel" && motore.alimentazione !== "Benzina"){
        return true;
    }; 
});

console.log(benzinaCars);

console.log(dieselCars);

console.log(variedCars);
