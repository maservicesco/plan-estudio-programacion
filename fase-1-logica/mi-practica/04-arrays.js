const peliculas = ["Matrix", "Interstellar", "Inception"];
console.log (peliculas [0]);
console.log (peliculas [2]);
console.log (peliculas.length);

peliculas.push ("Dune");
peliculas [1] = "Titanic";
console.log (peliculas);

for (let i = 0; i < peliculas.length; i++) {
    console.log(`${i + 1} - ${peliculas[i]}`);
}
