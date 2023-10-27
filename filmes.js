// 1 - No arquivo filmes.js, armazene em uma constante "my3FavoriteTVShows" suas 3 séries favoritas
const my3FavoriteTVShows = ["Wanda&Vision", "Sombra e Ossos", "The Witcher"] 

// 2 - Exiba no console um boolean indicando se o array de séries que você criou possui 3 itens
let itens = false
let quatidade = 3

console.log("A lista de series tem 3 itens?")

if (my3FavoriteTVShows.length == quatidade){
    itens = true
} 

console.log(itens)

